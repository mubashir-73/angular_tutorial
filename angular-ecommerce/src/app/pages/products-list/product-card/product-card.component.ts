import { Component, input, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Product } from '../../../models/productsmodel';
import { PrimaryButtonComponent } from '../../../components/primary-button/primary-button.component';
import { CartService } from '../../../services/cart.service';
@Component({
  selector: 'app-product-card',
  imports: [PrimaryButtonComponent, RouterLink],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss',
})
export class ProductCardComponent {
  product = input.required<Product>();
  cartService = inject(CartService);
}
