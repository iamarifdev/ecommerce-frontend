import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'item-counter',
  template: `
    <nz-input-group nzCompact [nzSize]="size">
      <button nz-button [nzSize]="size" nzType="default" (click)="handleDecrement()">
        <i nz-icon nzType="minus" nzTheme="outline"></i>
      </button>
      <input nz-input [ngModel]="counter" type="text" class="counter-value" [value]="counter" readonly="readonly" />
      <button nz-button [nzSize]="size" nzType="default" (click)="handleIncrement()">
        <i nz-icon nzType="plus" nzTheme="outline"></i>
      </button>
    </nz-input-group>
  `,
  styles: [
    `
      .counter-value {
        width: 35px;
        text-align: center;
      }
    `
  ]
})
export class ItemCounterComponent {
  public counter = 1;
  @Input() max?: number;
  @Input() size = 'medium';
  @Output() increment: EventEmitter<number> = new EventEmitter();
  @Output() decrement: EventEmitter<number> = new EventEmitter();
  @Output() count: EventEmitter<number> = new EventEmitter();

  handleIncrement() {
    if (this.max && this.counter === this.max) {
      this.increment.emit(this.counter);
    } else {
      ++this.counter;
      this.increment.emit(this.counter);
    }
    this.count.emit(this.counter);
  }

  handleDecrement() {
    const counter = this.counter - 1;
    if (counter < 1) {
      this.decrement.emit(this.counter);
    } else {
      this.counter = counter;
      this.decrement.emit(this.counter);
    }
    this.count.emit(this.counter);
  }
}
