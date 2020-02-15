import { Component } from '@angular/core';
import { CartsService } from './pages/orders/carts/carts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isCollapsed = false;

  constructor(private cartsService: CartsService) {}

  get openCart() {
    return this.cartsService.cartOpened;
  }

  toggleCartContainer(isOpened: boolean) {
    this.cartsService.toggleCart();
  }
}
