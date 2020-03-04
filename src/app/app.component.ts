import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

import { CartsService } from './pages/orders/carts/carts.service';
import { AsyncService } from './shared/services/async.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  isCollapsed = false;

  constructor(private router: Router, private asyncService: AsyncService, private cartsService: CartsService) {}

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.asyncService.finish();
      }
    });
    this.cartsService.getCart();
  }

  get openCart() {
    return this.cartsService.cartOpened;
  }

  toggleCartContainer() {
    this.cartsService.toggleCart();
  }
}
