import { Component } from '@angular/core';
import {
  IonContent,
  IonHeader,
  IonItem,
  IonItemOption,
  IonItemOptions,
  IonItemSliding,
  IonLabel,
  IonList,
  IonTitle,
  IonToolbar,
} from '@ionic/angular';

@Component({
  selector: 'app-elemento-deslizable',
  templateUrl: './elemento-deslizable.page.html',
  styleUrls: ['./elemento-deslizable.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent,
    IonList, IonItemSliding, IonItem, IonLabel, IonItemOptions, IonItemOption],
})
export class ElementoDeslizablePage {}
