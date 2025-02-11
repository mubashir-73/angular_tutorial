import { Component, signal, inject } from '@angular/core';
import { Product } from '../../models/productsmodel';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductsService } from '../../services/products.service';
import { SelectComponent } from '../../components/select/select.component';

@Component({
  selector: 'app-products-list',
  imports: [ProductCardComponent, SelectComponent],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.scss',
})
export class ProductsListComponent {
  productsService = inject(ProductsService);
  products = signal<Product[]>([]);
  category = signal<string[]>([]);
  async Categories() {
    const res = await fetch('https://fakestoreapi.com/categories');
    const data = await res.json();
    this.category.set(data);
  }
  async ngOnInit() {
    this.productsService.fetchProducts(this.productsService.category);
  }
}
