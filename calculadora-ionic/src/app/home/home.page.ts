import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  IonHeader, IonToolbar, IonTitle, IonContent,
  IonCard, IonCardContent,
  IonList, IonItem, IonInput, IonSelect, IonSelectOption,
  IonButton, IonLabel, IonListHeader, IonNote,
} from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    FormsModule,
    IonHeader, IonToolbar, IonTitle, IonContent,
    IonCard, IonCardContent,
    IonList, IonItem, IonInput, IonSelect, IonSelectOption,
    IonButton, IonLabel, IonListHeader, IonNote,
  ],
})
export class HomePage {
  numero1: number | null = null;
  numero2: number | null = null;
  operacion: string = 'sumar';

  resultado: number | string | null = null;

  historial: string[] = [];

  calcular(): void {
    // ion-input devuelve '' cuando el campo queda vacío
    if (this.numero1 === null || this.numero2 === null ||
        String(this.numero1) === '' || String(this.numero2) === '') {
      this.resultado = 'Completa ambos números';
      return;
    }

    const n1 = Number(this.numero1);
    const n2 = Number(this.numero2);
    let res: number | string;
    let simbolo: string;

    switch (this.operacion) {
      case 'sumar':
        res = n1 + n2;
        simbolo = '+';
        break;
      case 'restar':
        res = n1 - n2;
        simbolo = '-';
        break;
      case 'multiplicar':
        res = n1 * n2;
        simbolo = '×';
        break;
      case 'dividir':
        res = n2 === 0 ? 'Error: no se puede dividir por 0' : n1 / n2;
        simbolo = '÷';
        break;
      default:
        res = 'Operación inválida';
        simbolo = '?';
    }

    this.resultado = res;

    this.historial.unshift(`${n1} ${simbolo} ${n2} = ${res}`);
  }

  limpiarHistorial(): void {
    this.historial = [];
  }
}