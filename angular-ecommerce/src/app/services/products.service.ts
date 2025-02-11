import { Injectable, signal } from '@angular/core';
import { Product } from '../models/productsmodel';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  products = signal<Product[]>([]);
  category = 'electronics';
  async fetchProducts(category: string) {
    const res = await fetch(
      `https://fakestoreapi.com/products/category/${category}`,
    );
    const data = await res.json();
    this.products.set(data);
    console.log(data);
  }
  constructor() {}
  getProduct(id: Number): Product | undefined {
    return this.products().find((product: Product) => product.id === id);
  }
}
