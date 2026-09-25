import { Component } from '@angular/core';
import { IonButton, IonContent, IonHeader, IonPopover, IonTitle, IonToolbar } from '@ionic/angular';

@Component({
  selector: 'app-ventana-flotante',
  templateUrl: './ventana-flotante.page.html',
  styleUrls: ['./ventana-flotante.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonPopover],
})
export class VentanaFlotantePage {}
