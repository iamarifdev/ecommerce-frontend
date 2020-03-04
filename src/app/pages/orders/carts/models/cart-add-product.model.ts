export interface ICartAddProduct {
  cartId?: string;
  customerId?: string;
  productId: string;
  quantity: number;
  color: string;
  size: number;
}
