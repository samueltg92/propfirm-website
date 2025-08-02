// Tracking configuration - modular system for analytics
// Easy to modify tracking scripts for Empire Funded

interface TrackingConfig {
  metaPixelId?: string;
  trackdeskId?: string;
  gtmId?: string;
}

// Configuration object - modify these IDs as needed
export const trackingConfig: TrackingConfig = {
  metaPixelId: process.env.VITE_META_PIXEL_ID || '', // Set in .env: VITE_META_PIXEL_ID=your_pixel_id
  trackdeskId: process.env.VITE_TRACKDESK_ID || '', // Set in .env: VITE_TRACKDESK_ID=your_trackdesk_id
  gtmId: process.env.VITE_GTM_ID || '', // Set in .env: VITE_GTM_ID=GTM-XXXXXX
};

// Meta Pixel tracking functions
export const metaPixel = {
  init: () => {
    if (!trackingConfig.metaPixelId) return;
    
    (function(f: any, b: any, e: any, v: any, n?: any, t?: any, s?: any) {
      if (f.fbq) return;
      n = f.fbq = function() {
        n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
      };
      if (!f._fbq) f._fbq = n;
      n.push = n;
      n.loaded = !0;
      n.version = '2.0';
      n.queue = [];
      t = b.createElement(e);
      t.async = !0;
      t.src = v;
      s = b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t, s);
    })(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');
    
    (window as any).fbq('init', trackingConfig.metaPixelId);
    (window as any).fbq('track', 'PageView');
  },
  
  track: (eventName: string, parameters?: any) => {
    if (!trackingConfig.metaPixelId || !(window as any).fbq) return;
    (window as any).fbq('track', eventName, parameters);
  },
  
  trackCustom: (eventName: string, parameters?: any) => {
    if (!trackingConfig.metaPixelId || !(window as any).fbq) return;
    (window as any).fbq('trackCustom', eventName, parameters);
  }
};

// TrackDesk tracking functions
export const trackDesk = {
  init: () => {
    if (!trackingConfig.trackdeskId) return;
    
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://api.trackdesk.com/v1/pixels/${trackingConfig.trackdeskId}.js`;
    document.head.appendChild(script);
  },
  
  track: (eventName: string, parameters?: any) => {
    if (!trackingConfig.trackdeskId || !(window as any).trackdesk) return;
    (window as any).trackdesk.track(eventName, parameters);
  }
};

// Google Tag Manager functions
export const gtm = {
  init: () => {
    if (!trackingConfig.gtmId) return;
    
    // GTM script
    const script1 = document.createElement('script');
    script1.async = true;
    script1.src = `https://www.googletagmanager.com/gtm.js?id=${trackingConfig.gtmId}`;
    document.head.appendChild(script1);
    
    // GTM noscript
    const noscript = document.createElement('noscript');
    const iframe = document.createElement('iframe');
    iframe.src = `https://www.googletagmanager.com/ns.html?id=${trackingConfig.gtmId}`;
    iframe.height = '0';
    iframe.width = '0';
    iframe.style.display = 'none';
    iframe.style.visibility = 'hidden';
    noscript.appendChild(iframe);
    document.body.insertBefore(noscript, document.body.firstChild);
    
    // Initialize dataLayer
    (window as any).dataLayer = (window as any).dataLayer || [];
    (window as any).gtag = function() {
      (window as any).dataLayer.push(arguments);
    };
    (window as any).gtag('js', new Date());
    (window as any).gtag('config', trackingConfig.gtmId);
  },
  
  track: (eventName: string, parameters?: any) => {
    if (!trackingConfig.gtmId || !(window as any).gtag) return;
    (window as any).gtag('event', eventName, parameters);
  }
};

// Main tracking initialization function
export const initializeTracking = () => {
  // Initialize all tracking services
  metaPixel.init();
  trackDesk.init();
  gtm.init();
};

// Centralized event tracking function
export const trackEvent = (eventName: string, parameters?: any) => {
  // Track the same event across all platforms
  metaPixel.track(eventName, parameters);
  trackDesk.track(eventName, parameters);
  gtm.track(eventName, parameters);
};

// Common events for easy use
export const trackingEvents = {
  pageView: (page: string) => {
    trackEvent('PageView', { page });
  },
  
  challengeView: (challengeName: string, price: string) => {
    trackEvent('ViewContent', {
      content_name: challengeName,
      content_type: 'product',
      value: parseFloat(price.replace('$', '')),
      currency: 'USD'
    });
  },
  
  challengeClick: (challengeName: string, price: string) => {
    trackEvent('AddToCart', {
      content_name: challengeName,
      content_type: 'product', 
      value: parseFloat(price.replace('$', '')),
      currency: 'USD'
    });
  },
  
  contactFormSubmit: () => {
    trackEvent('Contact', {
      content_category: 'engagement'
    });
  },
  
  leadGeneration: (formType: string) => {
    trackEvent('Lead', {
      content_category: formType
    });
  }
};