import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar,IonToggle } from '@ionic/angular';

@Component({
  selector: 'app-interruptor',
  templateUrl: './interruptor.page.html',
  styleUrls: ['./interruptor.page.scss'],
  standalone: true,
  imports: [FormsModule, IonHeader, IonToolbar, IonTitle, IonContent, IonToggle],
})
export class InterruptorPage {
  activo = false;
}