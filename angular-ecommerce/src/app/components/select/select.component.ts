import { Component, signal, inject } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-select',
  imports: [ReactiveFormsModule],
  templateUrl: './select.component.html',
  styleUrl: './select.component.scss',
})
export class SelectComponent {
  productsService = inject(ProductsService);
  changeCategory(category: string) {
    this.selectedCategory = category;
    this.productsService.fetchProducts(category);
  }
  categories = signal<string[]>([]);
  async ngOnInit() {
    const res = await fetch('https://fakestoreapi.com/products/categories');
    const data = await res.json();
    console.log(data);
    this.categories.set(data);
  }
  selectedCategory?: string;
  form = new FormGroup({
    category: new FormControl('electronics'),
  });
}
