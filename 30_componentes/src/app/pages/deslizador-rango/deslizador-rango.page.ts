import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonRange, IonLabel } from '@ionic/angular';

@Component({
  selector: 'app-deslizador-rango',
  templateUrl: './deslizador-rango.page.html',
  styleUrls: ['./deslizador-rango.page.scss'],
  standalone: true,
  imports: [FormsModule, IonHeader, IonToolbar, IonTitle, IonContent, IonRange, IonLabel],
})
export class DeslizadorRangoPage {
  valor = 50;
}
