import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { StoreService } from '../../app';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="max-w-4xl mx-auto space-y-6">
      <h2 class="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">Tu Carrito de Compras</h2>

      @if (store.cart().length === 0) {
        <div class="bg-slate-900 border border-slate-800 rounded-3xl p-12 text-center space-y-5">
          <div class="text-6xl">🛒</div>
          <p class="text-slate-400 text-base">Tu carrito está vacío en este momento.</p>
          <a routerLink="/" class="inline-block bg-indigo-600 hover:bg-indigo-500 text-white font-bold px-6 py-3 rounded-xl transition shadow-lg shadow-indigo-600/30 text-sm">
            Seguir comprando
          </a>
        </div>
      } @else {
        <div class="space-y-4">
          @for (item of store.cart(); track item.id; let i = $index) {
            <div class="bg-slate-900/80 border border-slate-800 rounded-2xl p-4 sm:p-5 flex items-center justify-between gap-4 transition hover:border-slate-700">
              <div class="flex items-center gap-4">
                <div class="w-16 h-16 bg-slate-950 rounded-xl p-2 flex justify-center items-center border border-slate-800">
                  <img [src]="item.image" [alt]="item.title" class="max-h-full max-w-full object-contain">
                </div>
                <div>
                  <h4 class="font-bold text-white text-sm sm:text-base line-clamp-1">{{ item.title }}</h4>
                  <p class="text-indigo-400 font-extrabold mt-0.5">\${{ item.price }}</p>
                </div>
              </div>
              <button (click)="removeItem(i)" class="bg-rose-500/10 hover:bg-rose-500/20 text-rose-400 border border-rose-500/20 text-xs font-bold px-3.5 py-2 rounded-xl transition">
                Eliminar
              </button>
            </div>
          }

          <!-- Panel de Totales con botones "Seguir comprando" y "PAGAR" al lado -->
          <div class="bg-slate-900 border border-slate-800 rounded-2xl p-6 flex flex-col sm:flex-row justify-between items-center gap-4 shadow-xl">
            <div>
              <span class="text-xs font-semibold text-slate-400 uppercase tracking-wider">Total a pagar</span>
              <p class="text-3xl font-black text-white">\${{ getTotal() }}</p>
            </div>

            <!-- Botones alineados juntos -->
            <div class="flex items-center gap-3 w-full sm:w-auto">
              <a routerLink="/" class="flex-1 sm:flex-initial text-center bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold px-5 py-3 rounded-xl transition border border-slate-700/60 text-sm">
                Seguir comprando
              </a>
              <a routerLink="/checkout" class="flex-1 sm:flex-initial text-center bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white font-extrabold px-8 py-3 rounded-xl transition shadow-lg shadow-indigo-600/30 text-sm tracking-wide">
                PAGAR
              </a>
            </div>
          </div>
        </div>
      }
    </div>
  `
})
export class CartComponent {
  store = inject(StoreService);

  removeItem(index: number) {
    this.store.cart.update(items => items.filter((_, i) => i !== index));
  }

  getTotal(): number {
    return Number(this.store.cart().reduce((acc, item) => acc + item.price, 0).toFixed(2));
  }
}
