import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonSegment, IonSegmentButton, IonTitle, IonToolbar } from '@ionic/angular';

@Component({
  selector: 'app-segmento',
  templateUrl: './segmento.page.html',
  styleUrls: ['./segmento.page.scss'],
  standalone: true,
  imports: [FormsModule, IonHeader, IonToolbar, IonTitle, IonContent, IonSegment, IonSegmentButton],
})
export class SegmentoPage {
  vista = 'todos';
}
