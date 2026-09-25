import { Component } from '@angular/core';
import { IonContent, IonHeader, IonTextarea, IonTitle, IonToolbar } from '@ionic/angular';

@Component({
  selector: 'app-area-texto',
  templateUrl: './area-texto.page.html',
  styleUrls: ['./area-texto.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonTextarea],
})
export class AreaTextoPage {}

