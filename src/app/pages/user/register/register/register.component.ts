import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class RegisterComponent {
  index = 0;
  disable = false;
  onIndexChange(index: number): void {
    this.index = index;
  }
}
