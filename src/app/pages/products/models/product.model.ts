export interface IProduct {
  id: string;
  sku: string;
  inStock: number;
  availibility: boolean;
  title: string;
  description: string;
  manufactureDetail: IManufactureDetail;
  shippingDetail: IShippingDetail;
  pricing: IPricing;
  colors: string[];
  featureImageUrl: string;
  images: string[];
  isEnabled: boolean;
  isDeleted: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface IManufactureDetail {
  modelNo: string;
  releaseDate: Date;
}

export interface IPricing {
  price: number;
}

export interface IShippingDetail {
  weight?: number;
  width?: number;
  height?: number;
  depth?: number;
  sizes: number[];
}
