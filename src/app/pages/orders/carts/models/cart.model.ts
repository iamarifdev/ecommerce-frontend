export interface ICart {
  id?: string;
  quantity: number;
  products: ICartProduct[];
  status: 'active' | 'inactive';
  total: number;
}

export interface ICartProduct {
  id?: string;
  title: string;
  unit: number;
  unitPrice: number;
  totalPrice: number;
  color?: string;
  size?: number;
}
