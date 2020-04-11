import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent implements OnInit {
  public selectedIndex = 0;

  public log(args: any[]): void {
    console.log(args);
  }

  constructor() {}

  ngOnInit() {}
}
