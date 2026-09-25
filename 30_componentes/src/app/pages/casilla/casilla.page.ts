import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCheckbox } from '@ionic/angular';

@Component({
  selector: 'app-casilla-seleccion',
  templateUrl: './casilla.page.html',
  styleUrls: ['./casilla.page.scss'],
  standalone: true,
  imports: [FormsModule, IonHeader, IonToolbar, IonTitle, IonContent, IonCheckbox],
})
export class CasillaPage {
  aceptado = false;
}
