import { Component } from '@angular/core';
import { IonCol, IonContent, IonGrid, IonHeader, IonRow, IonTitle, IonToolbar } from '@ionic/angular';

@Component({
  selector: 'app-rejilla',
  templateUrl: './rejilla.page.html',
  styleUrls: ['./rejilla.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonGrid, IonRow, IonCol],
})
export class RejillaPage {}
