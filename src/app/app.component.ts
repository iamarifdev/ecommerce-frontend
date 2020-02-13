import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isCollapsed = false;

  openCart = true;

  toggleCartContainer(isOpened: boolean) {
    this.openCart = isOpened;
  }
}
