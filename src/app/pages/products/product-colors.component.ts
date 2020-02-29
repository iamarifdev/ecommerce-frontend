import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IProductColor } from './models';

@Component({
  selector: 'product-colors',
  template: `
    <div class="colors">
      <div
        *ngFor="let item of productColors"
        class="color-box"
        [class.active]="color?.colorCode === item.colorCode"
        [style.background-color]="item.colorCode"
        [nzTooltipTitle]="item.colorName"
        nzTooltipPlacement="top"
        nz-tooltip
        (click)="colorChange.emit(item)"
      ></div>
    </div>
  `,
  styles: [
    `
      .colors {
        display: flex;
        flex-direction: row;
        flex-wrap: row wrap;
        align-items: flex-start;
        padding: 10px 0px;
      }
      .color-box {
        display: flex;
        width: 25px;
        height: 25px;
        margin: 5px;
        border: 1px solid black;
        cursor: pointer;
      }
      .active {
        border: 3px solid black;
      }
    `
  ]
})
export class ProductColorsComponent {
  @Input() productColors: IProductColor[];
  @Input() color: IProductColor;
  @Output() colorChange = new EventEmitter<IProductColor>();
}
