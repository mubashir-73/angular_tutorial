import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../models/productsmodel';
import { ProductsService } from '../../services/products.service';
import { CartService } from '../../services/cart.service';
import { PrimaryButtonComponent } from '../../components/primary-button/primary-button.component';

@Component({
  selector: 'app-product',
  imports: [PrimaryButtonComponent],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
})
export class ProductComponent {
  cartService = inject(CartService);
  productsService = inject(ProductsService);
  product: any;
  constructor(private route: ActivatedRoute) {}
  ngOnInit(): void {
    const productId = Number(this.route.snapshot.paramMap.get('id'));
    if (productId) {
      this.product = this.productsService.getProduct(productId);
      console.log(this.product);
    }
  }
}
