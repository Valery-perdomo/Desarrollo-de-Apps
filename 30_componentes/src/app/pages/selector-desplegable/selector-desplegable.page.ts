import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonItem, IonSelect, IonSelectOption, IonTitle, IonToolbar } from '@ionic/angular';

@Component({
  selector: 'app-selector-desplegable',
  templateUrl: './selector-desplegable.page.html',
  styleUrls: ['./selector-desplegable.page.scss'],
  standalone: true,
  imports: [FormsModule, IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonSelect, IonSelectOption],
})
export class SelectorDesplegablePage {
  color = '';
}

