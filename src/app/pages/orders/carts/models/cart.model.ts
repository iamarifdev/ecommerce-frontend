export interface ICart {
  id?: string;
  customerId?: string;
  quantity: number;
  products: ICartProduct[];
  status: 'active' | 'inactive';
  totalPrice: number;
}

export interface ICartProduct {
  productId: string;
  sku: string;
  title: string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
  color?: string;
  size?: number;
  imageUrl?: string;
}
