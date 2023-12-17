import { StateCreator } from "zustand";
import axios from "axios";
import { nextAPIUrl } from "@/constant/env";

export interface productType {
  product: {
    id: string;
    name: string;
    description: string;
    price: number;
    rating: number;
    imageURL: string;
    quantity: number;
  }[];
}

export interface ProductState {
  product: productType;
  getProduct: () => Promise<void>;
  errorMessage: string;
}

export const productSlice: StateCreator<ProductState> = (set, get) => ({
  product: { product: [] },
  getProduct: async () => {
    try {
      const productInfo = await axios.get(`${nextAPIUrl}/auth/admin/product`);
      set({ product: productInfo.data });
    } catch (err: any) {
      set({ errorMessage: err.response.data.message });
    }
  },
  errorMessage: "",
});
