import { Injectable, signal } from '@angular/core';
import { Product } from '../models/productsmodel';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cart = signal<Product[]>([]);

  addToCart(product: Product) {
    this.cart.set([...this.cart(), product]);
    if (product.stock) {
      product.stock--;
    }
  }

  removeFromCart(product: Product) {
    this.cart.set(this.cart().filter((p) => p.id !== product.id));
    if (product.stock) {
      product.stock++;
    }
  }

  constructor() {}
}
