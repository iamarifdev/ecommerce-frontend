import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

import { CartsService } from './orders/carts/carts.service';
import { AsyncService } from '../shared/services/async.service';

@Component({
  selector: 'pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {
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
