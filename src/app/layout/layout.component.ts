import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

import { AsyncService } from '../shared/services/async.service';
import { CartsService } from '../pages/orders/carts/carts.service';

@Component({
  selector: 'layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  isCollapsed = false;

  constructor(private router: Router, private asyncService: AsyncService, private cartsService: CartsService) {}

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
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
