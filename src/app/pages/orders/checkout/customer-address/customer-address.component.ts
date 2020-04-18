import { Component, OnInit, Input } from '@angular/core';

import { CustomerAddress } from '../../../../models';

@Component({
  selector: 'customer-address',
  templateUrl: './customer-address.component.html',
  styleUrls: ['./customer-address.component.scss']
})
export class CustomerAddressComponent implements OnInit {
  @Input()
  public title: string;

  @Input()
  public address: CustomerAddress;

  constructor() {}

  ngOnInit() {}
}
