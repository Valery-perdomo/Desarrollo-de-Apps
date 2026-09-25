import { Component } from '@angular/core';
import { IonContent, IonHeader, IonSpinner, IonTitle, IonToolbar } from '@ionic/angular';

@Component({
  selector: 'app-indicador-carga',
  templateUrl: './indicador-carga.page.html',
  styleUrls: ['./indicador-carga.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonSpinner],
})
export class IndicadorCargaPage {}
