import { Component, Input, Output, EventEmitter, OnDestroy, OnInit } from '@angular/core';
import { CartsService } from './carts.service';
import { Subscription } from 'rxjs';
import { ICart } from './models/cart.model';

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

  constructor(private cartsService: CartsService) {}

  ngOnInit(): void {
    this.cartSub = this.cartsService.cart.subscribe(cart => {
      this.cart = cart;
    });
  }

  close(): void {
    this.visible = false;
    this.closed.emit(this.visible);
  }

  ngOnDestroy(): void {
    if (this.cartSub) {
      this.cartSub.unsubscribe();
    }
  }
}
