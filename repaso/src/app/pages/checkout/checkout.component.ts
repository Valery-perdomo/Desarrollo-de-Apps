import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { StoreService } from '../../app';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [RouterLink, FormsModule],
  template: `
    <h2>Finalizar Compra</h2>

    @if (purchased) {
      <div style="background: #dcfce7; color: #166534; padding: 20px; border-radius: 8px; text-align: center; margin-top: 20px;">
        <h3>¡Gracias por tu compra! 🎉</h3>
        <p>Tu pago con <strong>{{ paymentMethod }}</strong> ha sido procesado exitosamente y tu carrito ha sido vaciado.</p>
        <a routerLink="/" style="display: inline-block; background: #16a34a; color: white; padding: 8px 16px; border-radius: 4px; text-decoration: none; margin-top: 10px;">
          Volver a la tienda
        </a>
      </div>
    } @else if (store.cart().length === 0) {
      <p>No tienes productos en el carrito para pagar.</p>
      <a routerLink="/" style="color: #2563eb; text-decoration: none;">Ir a ver productos</a>
    } @else {
      <div style="max-width: 500px; margin-top: 20px;">
        <p style="font-size: 1.1rem; font-weight: bold; color: #2563eb;">Total a pagar: \${{ getTotal() }}</p>
        
        <form (ngSubmit)="processPayment()" style="display: flex; flex-direction: column; gap: 12px;">
          <!-- Datos personales -->
          <div>
            <label style="display: block; margin-bottom: 4px;">Nombre completo:</label>
            <input type="text" [(ngModel)]="name" name="name" required style="width: 100%; padding: 8px; border: 1px solid #ccc; border-radius: 4px; font-weight: bold; color: #000000;">
          </div>
          <div>
            <label style="display: block; margin-bottom: 4px;">Dirección de envío:</label>
            <input type="text" [(ngModel)]="address" name="address" required style="width: 100%; padding: 8px; border: 1px solid #ccc; border-radius: 4px; font-weight: bold; color: #000000;">
          </div>

          <!-- Selección de Medio de Pago -->
          <div>
            <label style="display: block; margin-bottom: 4px;"><strong>Medio de Pago:</strong></label>
            <select [(ngModel)]="paymentMethod" name="paymentMethod" style="width: 100%; padding: 8px; border: 1px solid #ccc; border-radius: 4px; font-weight: bold; color: #000000;">
              <option value="Tarjeta">Tarjeta de Crédito / Débito</option>
              <option value="Nequi/Daviplata">Nequi / Daviplata</option>
              <option value="Efectivo">Efectivo contra entrega</option>
            </select>
          </div>

          <!-- Campos dinámicos según el método de pago -->
          @if (paymentMethod === 'Tarjeta') {
            <div style="border: 1px solid #e2e8f0; padding: 12px; border-radius: 6px; background: #f8fafc;">
              <div style="margin-bottom: 8px;">
                <label style="display: block; font-size: 0.85rem;">Número de tarjeta:</label>
                <input type="text" [(ngModel)]="cardNumber" name="cardNumber" placeholder="1234 5678 9012 3456" required style="width: 100%; padding: 6px; border: 1px solid #ccc; border-radius: 4px; font-weight: bold; color: #000000;">
              </div>
              <div style="display: flex; gap: 10px;">
                <div style="flex: 1;">
                  <label style="display: block; font-size: 0.85rem;">Vencimiento:</label>
                  <input type="text" [(ngModel)]="cardExpiry" name="cardExpiry" placeholder="MM/AA" required style="width: 100%; padding: 6px; border: 1px solid #ccc; border-radius: 4px; font-weight: bold; color: #000000;">
                </div>
                <div style="flex: 1;">
                  <label style="display: block; font-size: 0.85rem;">CVV:</label>
                  <input type="password" [(ngModel)]="cardCvv" name="cardCvv" placeholder="123" maxlength="4" required style="width: 100%; padding: 6px; border: 1px solid #ccc; border-radius: 4px; font-weight: bold; color: #000000;">
                </div>
              </div>
            </div>
          } @else if (paymentMethod === 'Nequi/Daviplata') {
            <div style="border: 1px solid #e2e8f0; padding: 12px; border-radius: 6px; background: #f8fafc;">
              <label style="display: block; font-size: 0.85rem;">Número de Celular:</label>
              <input type="tel" [(ngModel)]="phoneNumber" name="phoneNumber" placeholder="300 123 4567" required style="width: 100%; padding: 6px; border: 1px solid #ccc; border-radius: 4px; font-weight: bold; color: #000000;">
            </div>
          } @else if (paymentMethod === 'Efectivo') {
            <div style="border: 1px solid #e2e8f0; padding: 12px; border-radius: 6px; background: #f8fafc;">
              <p style="margin: 0; font-size: 0.85rem; color: #475569;">Pagarás en efectivo al momento de recibir tu pedido en la dirección registrada.</p>
            </div>
          }
          
          <button type="submit" style="background: #2563eb; color: white; border: none; padding: 10px; border-radius: 4px; font-weight: bold; cursor: pointer; margin-top: 10px;">
            Pagar Ahora (\${{ getTotal() }})
          </button>
        </form>
      </div>
    }
  `
})
export class CheckoutComponent {
  store = inject(StoreService);
  router = inject(Router);

  name = '';
  address = '';
  paymentMethod = 'Tarjeta';
  
  cardNumber = '';
  cardExpiry = '';
  cardCvv = '';
  phoneNumber = '';

  purchased = false;

  getTotal(): number {
    return Number(this.store.cart().reduce((acc, item) => acc + item.price, 0).toFixed(2));
  }

  processPayment() {
    if (this.name.trim() && this.address.trim()) {
      this.store.clearCart();
      this.purchased = true;
    }
  }
}
