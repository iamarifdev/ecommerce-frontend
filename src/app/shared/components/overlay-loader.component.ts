import { Component, Input } from '@angular/core';

@Component({
  selector: 'overlay-loader',
  template: `
    <div class="overlay" *ngIf="loading">
      <nz-spin nzSimple [nzSize]="size" [nzSpinning]="loading"></nz-spin>
    </div>
  `,
  styles: [
    `
      .overlay {
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 10;
        background-color: rgba(239, 235, 235, 0.5);
      }
    `
  ]
})
export class OverlayLoaderComponent {
  @Input() loading: boolean;
  @Input() size: 'large' | 'small' = 'large';
}
