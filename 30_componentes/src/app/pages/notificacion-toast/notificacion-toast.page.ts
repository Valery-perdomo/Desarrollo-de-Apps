import { Component } from '@angular/core';
import { IonButton, IonContent, IonHeader, IonTitle, IonToast, IonToolbar } from '@ionic/angular';

@Component({
  selector: 'app-notificacion-toast',
  templateUrl: './notificacion-toast.page.html',
  styleUrls: ['./notificacion-toast.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonToast],
})
export class NotificacionToastPage {
  mostrar = false;
}
