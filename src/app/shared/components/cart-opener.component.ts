import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'cart-opener',
  template: `
    <div class="cart-opener" (click)="handleCartOpenerClick()">
      <i nz-icon nzType="shopping-cart" nzTheme="outline"></i>
    </div>
  `,
  styles: [
    `
      .cart-opener {
        position: fixed;
        right: 0;
        top: calc(100vh - 55%);
        background: #43cea2; /* fallback for old browsers */
        background: -webkit-linear-gradient(to left, #185a9d, #43cea2); /* Chrome 10-25, Safari 5.1-6 */
        background: linear-gradient(
          to left,
          #185a9d,
          #43cea2
        ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
        border-radius: 5px;
        padding: 20px;
      }
      .cart-opener i {
        font-size: 30px;
        color: white;
      }
    `
  ]
})
export class CartOpenerComponent {
  @Output() toggle: EventEmitter<boolean> = new EventEmitter();
  @Input() isOpened = false;
  handleCartOpenerClick() {
    this.isOpened = !this.isOpened;
    this.toggle.emit(this.isOpened);
  }
}
