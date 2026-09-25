import { Routes } from '@angular/router';
import { DetailComponent } from './pages/detail/detail.component';
import { CartComponent } from './pages/cart/cart.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';

export const routes: Routes = [
  { path: 'producto/:id', component: DetailComponent },
  { path: 'carrito', component: CartComponent },
  { path: 'checkout', component: CheckoutComponent }
];