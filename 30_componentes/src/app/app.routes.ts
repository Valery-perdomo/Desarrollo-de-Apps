import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then(m => m.HomePage)
  },
  {
    path: 'acordeon',
    loadComponent: () => import('./pages/acordeon/acordeon.page').then( m => m.AcordeonPage)
  },
  {
    path: 'boton',
    loadComponent: () => import('./pages/boton/boton.page').then( m => m.BotonPage)
  },
  {
    path: 'tarjeta',
    loadComponent: () => import('./pages/tarjeta/tarjeta.page').then( m => m.TarjetaPage)
  },
  {
    path: 'casilla',
    loadComponent: () => import('./pages/casilla/casilla.page').then( m => m.CasillaPage)
  },
  {
    path: 'etiqueta',
    loadComponent: () => import('./pages/etiqueta/etiqueta.page').then( m => m.EtiquetaPage)
  },
  {
    path: 'fecha-hora',
    loadComponent: () => import('./pages/fecha-hora/fecha-hora.page').then( m => m.FechaHoraPage)
  },
  {
    path: 'boton-flotante',
    loadComponent: () => import('./pages/boton-flotante/boton-flotante.page').then( m => m.BotonFlotantePage)
  },
  {
    path: 'campo-entrada',
    loadComponent: () => import('./pages/campo-entrada/campo-entrada.page').then( m => m.CampoEntradaPage)
  },
  {
    path: 'lista',
    loadComponent: () => import('./pages/lista/lista.page').then( m => m.ListaPage)
  },
  {
    path: 'ventana-modal',
    loadComponent: () => import('./pages/ventana-modal/ventana-modal.page').then( m => m.VentanaModalPage)
  },
  {
    path: 'interruptor',
    loadComponent: () => import('./pages/interruptor/interruptor.page').then( m => m.InterruptorPage)
  },
  {
    path: 'insignia',
    loadComponent: () => import('./pages/insignia/insignia.page').then( m => m.InsigniaPage)
  },
  {
    path: 'avatar',
    loadComponent: () => import('./pages/avatar/avatar.page').then( m => m.AvatarPage)
  },
  {
    path: 'icono',
    loadComponent: () => import('./pages/icono/icono.page').then( m => m.IconoPage)
  },
  {
    path: 'deslizador-rango',
    loadComponent: () => import('./pages/deslizador-rango/deslizador-rango.page').then( m => m.DeslizadorRangoPage)
  },
  {
    path: 'boton-radio',
    loadComponent: () => import('./pages/radio/radio.page').then( m => m.RadioPage)
  },
  {
    path: 'barra-busqueda',
    loadComponent: () => import('./pages/barra-busqueda/barra-busqueda.page').then( m => m.BarraBusquedaPage)
  },
  {
    path: 'segmento',
    loadComponent: () => import('./pages/segmento/segmento.page').then( m => m.SegmentoPage)
  },
  {
    path: 'selector-desplegable',
    loadComponent: () => import('./pages/selector-desplegable/selector-desplegable.page').then( m => m.SelectorDesplegablePage)
  },
  {
    path: 'indicador-carga',
    loadComponent: () => import('./pages/indicador-carga/indicador-carga.page').then( m => m.IndicadorCargaPage)
  },
  {
    path: 'area-texto',
    loadComponent: () => import('./pages/area-texto/area-texto.page').then( m => m.AreaTextoPage)
  },
  {
    path: 'notificacion-toast',
    loadComponent: () => import('./pages/notificacion-toast/notificacion-toast.page').then( m => m.NotificacionToastPage)
  },
  {
    path: 'miga-pan',
    loadComponent: () => import('./pages/miga-pan/miga-pan.page').then( m => m.MigaPanPage)
  },
  {
    path: 'barra-progreso',
    loadComponent: () => import('./pages/barra-progreso/barra-progreso.page').then( m => m.BarraProgresoPage)
  },
  {
    path: 'elemento-deslizable',
    loadComponent: () => import('./pages/elemento-deslizable/elemento-deslizable.page').then( m => m.ElementoDeslizablePage)
  },
  {
    path: 'rejilla',
    loadComponent: () => import('./pages/rejilla/rejilla.page').then( m => m.RejillaPage)
  },
  {
    path: 'actualizador-desplazamiento',
    loadComponent: () => import('./pages/actualizador-desplazamiento/actualizador-desplazamiento.page').then( m => m.ActualizadorDesplazamientoPage)
  },
  {
    path: 'desplazamiento-infinito',
    loadComponent: () => import('./pages/desplazamiento-infinito/desplazamiento-infinito.page').then( m => m.DesplazamientoInfinitoPage)
  },
  {
    path: 'alerta-emergente',
    loadComponent: () => import('./pages/alerta-emergente/alerta-emergente.page').then( m => m.AlertaEmergentePage)
  },
  {
    path: 'ventana-flotante',
    loadComponent: () => import('./pages/ventana-flotante/ventana-flotante.page').then( m => m.VentanaFlotantePage)
  },
];