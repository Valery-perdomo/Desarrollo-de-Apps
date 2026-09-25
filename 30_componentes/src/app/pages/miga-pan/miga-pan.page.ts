import { Component } from '@angular/core';
import { IonBreadcrumb, IonBreadcrumbs, IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular';

@Component({
  selector: 'app-miga-pan',
  templateUrl: './miga-pan.page.html',
  styleUrls: ['./miga-pan.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonBreadcrumbs, IonBreadcrumb],
})
export class MigaPanPage {}

