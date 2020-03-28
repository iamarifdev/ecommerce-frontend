export interface ICustomer {
  id: string;
  phoneNo: string;
  email: string;
  firstName: string;
  lastName: string;
  billingAddress: ICustomerAddress;
  shippingAddress: ICustomerAddress;
  avatarUrl: string;
  profileCompleteness: number;
  isEnabled: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface ICustomerAddress {
  phoneNo: string;
  email: string;
  firstName: string;
  lastName: string;
  country: string;
  state: string;
  address: string;
  city: string;
  postalCode: string;
  sameToBillingAddress?: boolean;
}
