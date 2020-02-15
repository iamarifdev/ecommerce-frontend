import { Component, OnInit } from '@angular/core';
import { CartsService } from '../../orders/carts/carts.service';
import { ICartProduct } from '../../orders/carts/models/cart.model';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  public productList = [
    {
      id: 'af67845vbf435d7bdf354ddfsd',
      title: `SPRINT Men's Sneaker`,
      unitPrice: 1200,
      imageUrl: '/assets/images/products/default.jpeg'
    },
    {
      id: 'af67845vbf435d7bdf354ddf6y',
      title: `SPRINT Men's Sneaker`,
      unitPrice: 1000,
      imageUrl: '/assets/images/products/default.jpeg'
    },
    {
      id: 'af67845vbf435d7bdf354ddf6f',
      title: `SPRINT Men's Sneaker`,
      unitPrice: 1000,
      imageUrl: '/assets/images/products/default.jpeg'
    }
  ];
  constructor(private cartsService: CartsService) {}

  ngOnInit() {}

  onAddProductToCart(cartProduct: ICartProduct) {
    this.cartsService.addProduct(cartProduct);
    this.cartsService.toggleCart();
  }
}
