import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonContent, IonHeader, IonItem, IonLabel, IonList, IonRefresher, IonRefresherContent, IonTitle, IonToolbar } from '@ionic/angular';

@Component({
  selector: 'app-actualizador-desplazamiento',
  templateUrl: './actualizador-desplazamiento.page.html',
  styleUrls: ['./actualizador-desplazamiento.page.scss'],
  standalone: true,
  imports: [CommonModule, IonHeader, IonToolbar, IonTitle, IonContent, IonRefresher, IonRefresherContent, IonList, IonItem, IonLabel],
})
export class ActualizadorDesplazamientoPage {
  items = ['Elemento 1', 'Elemento 2', 'Elemento 3'];

  refrescar(event: any) {
    setTimeout(() => {
      this.items = [...this.items, 'Elemento actualizado'];
      event.target.complete();
    }, 1000);
  }
}

