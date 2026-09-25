import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonContent, IonHeader, IonInfiniteScroll, IonInfiniteScrollContent, IonItem, IonLabel, IonList, IonTitle, IonToolbar } from '@ionic/angular';

@Component({
  selector: 'app-desplazamiento-infinito',
  templateUrl: './desplazamiento-infinito.page.html',
  styleUrls: ['./desplazamiento-infinito.page.scss'],
  standalone: true,
  imports: [CommonModule, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonLabel,
    IonInfiniteScroll, IonInfiniteScrollContent],
})
export class DesplazamientoInfinitoPage {
  items = Array.from({ length: 12 }, (_, i) => `Elemento ${i + 1}`);

  cargarMas(event: any) {
    setTimeout(() => {
      const n = this.items.length;
      this.items = [...this.items, ...Array.from({ length: 8 }, (_, i) => `Elemento ${n + i + 1}`)];
      event.target.complete();
    }, 800);
  }
}

