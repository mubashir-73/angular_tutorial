import { Component, inject } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { CartCardComponent } from './cart-card/cart-card.component';
import { OrderSummaryComponent } from './order-summary/order-summary.component';

@Component({
  selector: 'app-cart',
  imports: [CartCardComponent, OrderSummaryComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
})
export class CartComponent {
  cartService = inject(CartService);
}
