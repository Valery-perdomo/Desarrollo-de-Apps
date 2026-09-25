import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar,IonFab, IonFabButton, IonIcon} from '@ionic/angular';
import { add } from 'ionicons/icons';

@Component({
  selector: 'app-boton-flotante',
  templateUrl: './boton-flotante.page.html',
  styleUrls: ['./boton-flotante.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonFab, IonFabButton, IonIcon],
})
export class BotonFlotantePage {
  constructor() {}
  add = add;
}