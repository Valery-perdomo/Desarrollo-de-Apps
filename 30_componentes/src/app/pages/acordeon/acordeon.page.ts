import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar,IonAccordion, IonItem, IonLabel, IonAccordionGroup } from '@ionic/angular';

@Component({
  selector: 'app-acordeon',
  templateUrl: './acordeon.page.html',
  styleUrls: ['./acordeon.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent,
    IonAccordionGroup, IonAccordion, IonItem, IonLabel],
})
export class AcordeonPage {}
