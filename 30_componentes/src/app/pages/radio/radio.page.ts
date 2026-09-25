import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonRadio, IonRadioGroup, IonTitle, IonToolbar } from '@ionic/angular';

@Component({
  selector: 'app-radio',
  templateUrl: './radio.page.html',
  styleUrls: ['./radio.page.scss'],
  standalone: true,
  imports: [FormsModule, IonHeader, IonToolbar, IonTitle, IonContent, IonRadio, IonRadioGroup],
})
export class RadioPage {
  opcion = 'uno';
}
