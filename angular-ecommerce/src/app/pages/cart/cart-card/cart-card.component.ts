import { Component, inject, input } from '@angular/core';
import { Product } from '../../../models/productsmodel';
import { CartService } from '../../../services/cart.service';
import { ButtonComponent } from '../../../components/button/button.component';

@Component({
  selector: 'app-cart-card',
  imports: [ButtonComponent],
  templateUrl: './cart-card.component.html',
  styleUrl: './cart-card.component.scss',
})
export class CartCardComponent {
  product = input.required<Product>();
  cartService = inject(CartService);
}
