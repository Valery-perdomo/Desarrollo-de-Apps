import { Component, inject, signal, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { StoreService, Product } from '../../app';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="max-w-4xl mx-auto">
      @if (product()) {
        <div class="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl space-y-8">
          <!-- Sección Superior: Imagen e Información -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div class="bg-slate-950 border border-slate-800/80 rounded-2xl p-6 flex justify-center items-center h-80">
              <img [src]="product()?.image" [alt]="product()?.title" class="max-h-full max-w-full object-contain filter drop-shadow-xl">
            </div>

            <div class="space-y-5">
              <span class="inline-block text-xs font-bold uppercase tracking-wider text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 px-3 py-1 rounded-md">
                {{ product()?.category }}
              </span>
              <h2 class="text-2xl sm:text-3xl font-extrabold text-white leading-snug">{{ product()?.title }}</h2>
              <p class="text-3xl font-black text-indigo-400">\${{ product()?.price }}</p>

              <!-- Botones principales -->
              <div class="flex flex-col sm:flex-row gap-3 pt-2">
                <button (click)="store.addToCart(product()!)" class="flex-1 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold py-3 px-5 rounded-xl transition shadow-lg shadow-emerald-600/20 text-sm">
                  Añadir al Carrito
                </button>
                <a routerLink="/" class="flex-1 text-center bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold py-3 px-5 rounded-xl transition border border-slate-700/60 text-sm">
                  Seguir comprando
                </a>
              </div>
            </div>
          </div>

          <!-- Descripción del producto abajo -->
          <div class="border-t border-slate-800/80 pt-8 space-y-3">
            <h3 class="text-lg font-bold text-white flex items-center gap-2">
              <span>📋</span> Descripción del Producto
            </h3>
            <p class="text-slate-300 text-sm leading-relaxed">{{ product()?.description }}</p>
          </div>
        </div>
      } @else {
        <div class="text-center py-20 text-slate-500 animate-pulse">
          Cargando detalles del producto...
        </div>
      }
    </div>
  `
})
export class DetailComponent implements OnInit {
  private route = inject(ActivatedRoute);
  store = inject(StoreService);
  product = signal<Product | undefined>(undefined);

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.store.getProductById(id).subscribe(res => this.product.set(res));
    }
  }
}