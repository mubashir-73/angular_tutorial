import { Component, signal } from '@angular/core';
import { Product } from '../../models/productsmodel';
import { ProductCardComponent } from './product-card/product-card.component';

@Component({
  selector: 'app-products-list',
  imports: [ProductCardComponent],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.scss',
})
export class ProductsListComponent {
  products = signal<Product[]>([]);
  async ngOnInit() {
    const res = await fetch(
      'https://fakestoreapi.com/products/category/electronics',
    );
    const data = await res.json();
    this.products.set(data);
  }
}
