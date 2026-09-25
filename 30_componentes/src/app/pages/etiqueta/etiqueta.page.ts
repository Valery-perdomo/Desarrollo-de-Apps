import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonChip } from '@ionic/angular';

@Component({
  selector: 'app-etiqueta',
  templateUrl: './etiqueta.page.html',
  styleUrls: ['./etiqueta.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonChip],
})
export class EtiquetaPage {}