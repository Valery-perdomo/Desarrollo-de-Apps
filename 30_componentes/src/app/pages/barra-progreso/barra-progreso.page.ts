import { Component } from '@angular/core';
import { IonContent, IonHeader, IonProgressBar, IonTitle, IonToolbar } from '@ionic/angular';

@Component({
  selector: 'app-barra-progreso',
  templateUrl: './barra-progreso.page.html',
  styleUrls: ['./barra-progreso.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonProgressBar],
})
export class BarraProgresoPage {
  progreso = 0.65;
}

