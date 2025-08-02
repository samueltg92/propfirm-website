# Empire Funded - Tracking System

Sistema modular de tracking que incluye Meta Pixel, TrackDesk y Google Tag Manager.

## Configuración

1. **Variables de Entorno**: Copia `.env.example` a `.env` y agrega tus IDs reales:
   ```
   VITE_META_PIXEL_ID=tu_pixel_id_de_meta
   VITE_TRACKDESK_ID=tu_id_de_trackdesk  
   VITE_GTM_ID=GTM-XXXXXXX
   ```

2. **Archivos Principales**:
   - `src/lib/tracking.ts` - Configuración y funciones de tracking
   - `src/hooks/useTracking.ts` - Hooks de React para tracking
   - `src/App.tsx` - Inicialización del tracking

## Uso

### Tracking Automático
- Page views se trackan automáticamente en cada página
- Inicialización automática al cargar la app

### Tracking Manual
```typescript
import { trackingEvents } from '@/lib/tracking';

// Eventos predefinidos
trackingEvents.challengeView('$25K Challenge', '$179');
trackingEvents.challengeClick('$25K Challenge', '$179');
trackingEvents.contactFormSubmit();
trackingEvents.leadGeneration('newsletter');

// Eventos personalizados
import { trackEvent } from '@/lib/tracking';
trackEvent('CustomEvent', { custom_parameter: 'value' });
```

## Modificaciones Futuras

### Agregar nuevo servicio de tracking:
1. Agrega la configuración en `trackingConfig`
2. Crea funciones init/track en `src/lib/tracking.ts`
3. Integra en `initializeTracking()` y `trackEvent()`

### Cambiar IDs de tracking:
1. Modifica las variables en `.env`
2. No requiere cambios de código

### Remover un servicio:
1. Comenta las líneas correspondientes en `initializeTracking()`
2. Opcionalmente comenta en `trackEvent()`

## Eventos Implementados

- **PageView**: Vista de página
- **ViewContent**: Vista de challenge
- **AddToCart**: Click en botón de challenge  
- **Contact**: Envío de formulario de contacto
- **Lead**: Generación de leads

## Servicios Integrados

- ✅ Meta Pixel (Facebook Ads)
- ✅ TrackDesk (Affiliate Tracking)
- ✅ Google Tag Manager
- ❌ WooCommerce API (removido)

El sistema es completamente modular y permite activar/desactivar servicios fácilmente.