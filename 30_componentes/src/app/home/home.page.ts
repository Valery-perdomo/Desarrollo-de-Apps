// Importaciones principales de Angular y Ionic
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { 
  IonHeader, 
  IonToolbar, 
  IonTitle, 
  IonContent, 
  IonList, 
  IonItem, 
  IonLabel, 
  IonIcon 
} from '@ionic/angular';

// Configuración del componente
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [
    CommonModule, 
    RouterLink,
    IonHeader, 
    IonToolbar, 
    IonTitle, 
    IonContent, 
    IonList, 
    IonItem, 
    IonLabel, 
    IonIcon
  ]
})
export class HomePage {
componentes = [
    { id: '1', nombre: '1. Botón', desc: 'Botones sólidos, outline y de ancho completo', icono: 'radio-button-on-outline', ruta: '/boton' },
    { id: '2', nombre: '2. Tarjeta', desc: 'Tarjeta contenedora con encabezado y contenido', icono: 'card-outline', ruta: '/tarjeta' },
    { id: '3', nombre: '3. Casilla de selección', desc: 'Casilla interactiva para aceptar términos', icono: 'checkbox-outline', ruta: '/casilla' },
    { id: '4', nombre: '4. Etiqueta', desc: 'Chips y etiquetas de distintos estados', icono: 'pricetag-outline', ruta: '/etiqueta' },
    { id: '5', nombre: '5. Fecha y hora', desc: 'Selector visual de calendario y hora', icono: 'calendar-outline', ruta: '/fecha-hora' },
    { id: '6', nombre: '6. Botón flotante', desc: 'Botón FAB para acciones rápidas', icono: 'add-circle-outline', ruta: '/boton-flotante' },
    { id: '7', nombre: '7. Campo de entrada', desc: 'Campos de texto y correo con etiquetas', icono: 'create-outline', ruta: '/campo-entrada' },
    { id: '8', nombre: '8. Lista', desc: 'Lista vertical estructurada con elementos', icono: 'list-outline', ruta: '/lista' },
    { id: '9', nombre: '9. Ventana modal', desc: 'Ventana superpuesta con contenido', icono: 'browsers-outline', ruta: '/ventana-modal' },
    { id: '10', nombre: '10. Interruptor', desc: 'Interruptor de encendido y apagado (ON/OFF)', icono: 'toggle-outline', ruta: '/interruptor' },
    { id: '11', nombre: '11. Insignia', desc: 'Insignia informativa o contador (Badge)', icono: 'ellipse-outline', ruta: '/insignia' },
    { id: '12', nombre: '12. Avatar', desc: 'Avatar circular para representación de usuario', icono: 'person-circle-outline', ruta: '/avatar' },
    { id: '13', nombre: '13. Icono', desc: 'Iconos vectoriales de Ionicons', icono: 'star-outline', ruta: '/icono' },
    { id: '14', nombre: '14. Deslizador de rango', desc: 'Control deslizante de selección numérica', icono: 'options-outline', ruta: '/deslizador-rango' },
    { id: '15', nombre: '15. Botón de radio', desc: 'Grupo de botones de selección única', icono: 'radio-button-off-outline', ruta: '/boton-radio' },
    { id: '16', nombre: '16. Barra de búsqueda', desc: 'Buscador con filtrado simple en tiempo real', icono: 'search-outline', ruta: '/barra-busqueda' },
    { id: '17', nombre: '17. Segmento', desc: 'Pestañas y selector horizontal de vistas', icono: 'albums-outline', ruta: '/segmento' },
    { id: '18', nombre: '18. Selector desplegable', desc: 'Menú desplegable para selección de opciones', icono: 'caret-down-circle-outline', ruta: '/selector-desplegable' },
    { id: '19', nombre: '19. Indicador de carga', desc: 'Variantes de spinner para tiempos de espera', icono: 'reload-outline', ruta: '/indicador-carga' },
    { id: '20', nombre: '20. Área de texto', desc: 'Campo multilínea con contador de caracteres', icono: 'document-text-outline', ruta: '/area-texto' },
    { id: '21', nombre: '21. Notificación Toast', desc: 'Notificación flotante o mensaje temporal', icono: 'notifications-outline', ruta: '/notificacion-toast' },
    { id: '22', nombre: '22. Acordeón', desc: 'Secciones colapsables que se expanden', icono: 'folder-open-outline', ruta: '/acordeon' },
    { id: '23', nombre: '23. Miga de pan', desc: 'Ruta de navegación jerárquica (Breadcrumbs)', icono: 'navigate-outline', ruta: '/miga-pan' },
    { id: '24', nombre: '24. Barra de progreso', desc: 'Barra de estado de avance determinado e indeterminado', icono: 'bar-chart-outline', ruta: '/barra-progreso' },
    { id: '25', nombre: '25. Elemento deslizable', desc: 'Elemento de lista con opciones al deslizar', icono: 'swap-horizontal-outline', ruta: '/elemento-deslizable' },
    { id: '26', nombre: '26. Rejilla', desc: 'Sistema de maquetación de 12 columnas', icono: 'grid-outline', ruta: '/rejilla' },
    { id: '27', nombre: '27. Actualizador por desplazamiento', desc: 'Gesto de arrastrar para recargar (Pull-to-refresh)', icono: 'sync-outline', ruta: '/actualizador-desplazamiento' },
    { id: '28', nombre: '28. Desplazamiento infinito', desc: 'Carga automática de más datos al hacer scroll', icono: 'infinite-outline', ruta: '/desplazamiento-infinito' },
    { id: '29', nombre: '29. Alerta emergente', desc: 'Diálogo modal de confirmación y opciones', icono: 'alert-circle-outline', ruta: '/alerta-emergente' },
    { id: '30', nombre: '30. Ventana flotante', desc: 'Ventana emergente anclada (Popover)', icono: 'chatbubbles-outline', ruta: '/ventana-flotante' }
  ];

  constructor() {}
}