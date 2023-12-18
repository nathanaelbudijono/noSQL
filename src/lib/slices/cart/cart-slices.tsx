import { nextAPIUrl } from "@/constant/env";
import { StateCreator } from "zustand";

export interface cartType {
  id: string;
  name: string;
  description: string;
  price: number;
  rating: number;
  imageURL: string;
  quantity: number;
}

export interface productItemType {
  id: string;
  name: string;
  description: string;
  price: number;
  rating: number;
  imageURL: string;
  quantity: number;
}
export interface CartState {
  cart: cartType[];
  count: number;
  productItem: productItemType[];
  getItem: () => Promise<void>;
  addToCart: (product: cartType) => void;
  removeFromCart: () => void;
  updateQuantity: (id: string, action: "increase" | "decrease") => void;
  showCart: boolean;
  toggleCart: () => void;
}

export const cartSlice: StateCreator<CartState> = (set, get) => ({
  cart: [],
  productItem: [],
  count: 0,
  getItem: async () => {
    try {
      const res = await fetch(`${nextAPIUrl}/public/user/product`);
      set({ productItem: await res.json() });
    } catch (err) {}
  },
  addToCart: (product: cartType) => {
    const cart = get().cart;
    const findProduct = cart.find((p) => p.id === product.id);
    if (findProduct) {
      findProduct.quantity! += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }
    set({ cart, count: get().count + 1 });
  },
  removeFromCart: () => {
    set({ cart: [], count: (get().count = 0) });
  },
  updateQuantity: (id: string, action: "increase" | "decrease") => {
    const cart = get().cart;
    const findProduct = cart.find((item) => item.id === id);
    if (findProduct) {
      if (action === "decrease") {
        if (findProduct.quantity === 1) {
          set({
            cart: cart.filter((item) => item.id !== id),
            count: get().count - 1,
          });
        } else {
          findProduct.quantity! -= 1;
          set({ count: get().count - 1 });
        }
      } else {
        findProduct.quantity! += 1;
      }
    }
  },
  showCart: false,
  toggleCart: () => {
    set({ showCart: !get().showCart });
  },
});
