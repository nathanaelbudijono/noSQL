import { StateCreator } from "zustand";

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  rating: number;
  imageURL: string;
  quantity: number;
  admin: string;
}
export interface ProductSlice {
  products: Product[];
}
export const createProductSlice: StateCreator<ProductSlice> = (set) => ({
  products: [],
});
