import { Component } from '@angular/core';
import { 
  IonHeader, 
  IonToolbar, 
  IonTitle, 
  IonContent, 
  IonList, 
  IonItem, 
  IonLabel, 
  IonBadge 
} from '@ionic/angular';

@Component({
  selector: 'app-insignia',
  templateUrl: './insignia.page.html',
  styleUrls: ['./insignia.page.scss'],
  standalone: true,
  imports: [
    IonHeader, 
    IonToolbar, 
    IonTitle, 
    IonContent, 
    IonList, 
    IonItem, 
    IonLabel, 
    IonBadge
  ],
})
export class InsigniaPage {}