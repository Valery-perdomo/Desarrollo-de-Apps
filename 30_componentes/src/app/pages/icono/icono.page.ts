import { Component } from '@angular/core';
import { IonContent, IonHeader, IonIcon, IonTitle, IonToolbar } from '@ionic/angular';
import { heart, home, star } from 'ionicons/icons';

@Component({
  selector: 'app-icono',
  templateUrl: './icono.page.html',
  styleUrls: ['./icono.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonIcon],
})
export class IconoPage {
  heart = heart;
  star = star;
  home = home;
}

