import { ShippingMethod } from './shipping-method.model';
import { PaymentMethod } from './payment-method.model';

export interface Checkout {
  shippingMethod: ShippingMethod;
  paymentMethod: PaymentMethod;
}
