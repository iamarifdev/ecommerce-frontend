import { Currency } from './currency.enum';

export interface OrderAdd {
  customerId: string;
  shippingMethodId: string;
  paymentMethodId: string;
  currency: Currency;
}
