import { Component, Input, Output, EventEmitter, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

import { ICart } from './models/cart.model';
import { CartsService } from './carts.service';

@Component({
  selector: 'cart-container',
  templateUrl: './cart-container.component.html',
  styleUrls: ['./cart-container.component.scss']
})
export class CartContainerComponent implements OnInit, OnDestroy {
  @Input() visible = false;
  @Output() closed: EventEmitter<boolean> = new EventEmitter();

  public cart: ICart = null;
  public cartSub: Subscription;

  constructor(private router: Router, private cartsService: CartsService) {}

  ngOnInit(): void {
    this.cartSub = this.cartsService.cart.subscribe(cart => {
      this.cart = cart;
    });
  }

  public close(): void {
    this.visible = false;
    this.closed.emit(this.visible);
  }

  public navigateToCheckoutPage(): void {
    this.close();
    this.router.navigate(['/orders/checkout']);
  }

  ngOnDestroy(): void {
    if (this.cartSub) {
      this.cartSub.unsubscribe();
    }
  }
}
