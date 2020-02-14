import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'cart-container',
  templateUrl: './cart-container.component.html',
  styleUrls: ['./cart-container.component.scss']
})
export class CartContainerComponent {
  @Input() visible = false;
  @Output() closed: EventEmitter<boolean> = new EventEmitter();

  grandTotalPrice = 0;

  close(): void {
    this.visible = false;
    this.closed.emit(this.visible);
  }

  updateTotalPrice(cartItemPrice: number) {
    this.grandTotalPrice += cartItemPrice;
  }
}
