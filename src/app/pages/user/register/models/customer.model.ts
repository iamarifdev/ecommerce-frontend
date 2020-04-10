export interface Customer {
  id: string;
  phoneNo: string;
  email: string;
  fullName: string;
  billingAddress: CustomerAddress;
  shippingAddress: CustomerAddress;
  avatarUrl: string;
  profileCompleteness: number;
  isEnabled: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface CustomerAddress {
  phoneNo: string;
  email?: string;
  fullName: string;
  country: string;
  state: string;
  address: string;
  city: string;
  postalCode: string;
  sameToBillingAddress?: boolean;
}
