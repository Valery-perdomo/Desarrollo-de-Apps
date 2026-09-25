import { Component, inject, Injectable, signal, OnInit, OnDestroy, computed } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { Observable } from 'rxjs';

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

@Injectable({ providedIn: 'root' })
export class StoreService {
  private http = inject(HttpClient);
  private apiUrl = 'https://fakestoreapi.com';
  cart = signal<Product[]>([]);

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiUrl}/products`);
  }

  getProductsByCategory(category: string): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiUrl}/products/category/${category}`);
  }

  getCategories(): Observable<string[]> {
    return this.http.get<string[]>(`${this.apiUrl}/products/categories`);
  }

  getProductById(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.apiUrl}/products/${id}`);
  }

  addToCart(product: Product) {
    this.cart.update(list => [...list, product]);
  }

  clearCart() {
    this.cart.set([]);
  }
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.html'
})
export class AppComponent implements OnInit, OnDestroy {
  store = inject(StoreService);
  router = inject(Router);

  productsSignal = signal<Product[]>([]);
  categories = toSignal(this.store.getCategories(), { initialValue: [] });

  // Lógica de carrusel automático para 3 productos
  currentIndex = signal(0);
  private carouselInterval: any;

  // Calcula los 3 productos visibles dinámicamente
  visibleProducts = computed(() => {
    const list = this.productsSignal();
    if (list.length === 0) return [];
    
    const count = list.length;
    const start = this.currentIndex();
    
    return [
      list[start % count],
      list[(start + 1) % count],
      list[(start + 2) % count]
    ];
  });

  constructor() {
    this.store.getProducts().subscribe(res => this.productsSignal.set(res));
  }

  ngOnInit() {
    // Cambio automático cada 4 segundos
    this.carouselInterval = setInterval(() => {
      this.nextSlide();
    }, 1000);
  }

  ngOnDestroy() {
    if (this.carouselInterval) {
      clearInterval(this.carouselInterval);
    }
  }

  nextSlide() {
    if (this.productsSignal().length > 0) {
      this.currentIndex.update(curr => (curr + 1) % this.productsSignal().length);
    }
  }

  prevSlide() {
    if (this.productsSignal().length > 0) {
      this.currentIndex.update(curr => (curr - 1 + this.productsSignal().length) % this.productsSignal().length);
    }
  }

  filterCategory(event: Event) {
    const cat = (event.target as HTMLSelectElement).value;
    if (cat) {
      this.store.getProductsByCategory(cat).subscribe(res => this.productsSignal.set(res));
    } else {
      this.store.getProducts().subscribe(res => this.productsSignal.set(res));
    }
  }
}