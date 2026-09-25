import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonItem, IonLabel, IonList, IonSearchbar, IonTitle, IonToolbar } from '@ionic/angular';

@Component({
  selector: 'app-barra-busqueda',
  templateUrl: './barra-busqueda.page.html',
  styleUrls: ['./barra-busqueda.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonHeader, IonToolbar, IonTitle, IonContent, IonSearchbar, IonList, IonItem, IonLabel],
})
export class BarraBusquedaPage {
  termino = '';
  ropa = ['Camisa', 'Pantalón', 'Zapatos', 'Chaqueta'];
  filtrar() {
    return this.ropa.filter(x => x.toLowerCase().includes(this.termino.toLowerCase()));
  }
}
