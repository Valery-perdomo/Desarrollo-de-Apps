import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton } from '@ionic/angular';

@Component({
  selector: 'app-boton',
  templateUrl: './boton.page.html',
  styleUrls: ['./boton.page.scss'],

  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton],
})
export class BotonPage {}

