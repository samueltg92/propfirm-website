import { useEffect } from 'react';
import { initializeTracking, trackingEvents } from '@/lib/tracking';

// Hook para inicializar el tracking cuando la app se carga
export const useTracking = () => {
  useEffect(() => {
    // Initialize all tracking services when the app loads
    initializeTracking();
  }, []);

  return trackingEvents;
};

// Hook para tracking específico de página
export const usePageTracking = (pageName: string) => {
  useEffect(() => {
    // Track page view when component mounts
    trackingEvents.pageView(pageName);
  }, [pageName]);
};