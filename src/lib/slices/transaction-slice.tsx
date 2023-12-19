import { StateCreator } from "zustand";
import axios from "axios";
import { nextAPIUrl } from "@/constant/env";

export interface transactionType {
  buyer: string;
  email: string;
  purchaseDate: Date;
  totalPrice: number;
  status: string;
  cart: Array<{
    id: string;
    name: string;
    price: number;
    quantity: number;
  }>;
}

export interface TransactionState {
  transaction: transactionType | null;
  getTransaction: () => Promise<void>;
}

export const transactionSlice: StateCreator<TransactionState> = (set, get) => ({
  transaction: null,
  getTransaction: async () => {
    try {
      const response = await axios.get(`${nextAPIUrl}/auth/admin/checkout`);
      set({ transaction: response.data });
    } catch (err) {
      console.log(err);
    }
  },
});
