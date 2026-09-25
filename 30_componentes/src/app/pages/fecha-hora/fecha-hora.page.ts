import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonDatetime } from '@ionic/angular';

@Component({
  selector: 'app-fecha-hora',
  templateUrl: './fecha-hora.page.html',
  styleUrls: ['./fecha-hora.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonDatetime],
})
export class FechaHoraPage {}
