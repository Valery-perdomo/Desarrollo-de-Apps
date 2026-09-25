import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar,IonInput } from '@ionic/angular';

@Component({
  selector: 'app-campo-entrada',
  templateUrl: './campo-entrada.page.html',
  styleUrls: ['./campo-entrada.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonInput],
})
export class CampoEntradaPage {}
