import { Product } from './product.model';

export interface ShoppingState {
    products: Product[];
    cartItems: Product[];
  }
