import { Component } from '@angular/core';
import { IonAlert, IonButton, IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular';

@Component({
  selector: 'app-alerta-emergente',
  templateUrl: './alerta-emergente.page.html',
  styleUrls: ['./alerta-emergente.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonAlert],
})
export class AlertaEmergentePage {
  mostrar = false;

  botones = [
    { text: 'Cancelar', role: 'cancel' },
    { text: 'Aceptar', role: 'confirm' }
  ];
}
