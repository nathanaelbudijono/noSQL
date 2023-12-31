import { create } from "zustand";
import { UserState, userSlice } from "./slices/role/user-slices";
import { AdminState, adminSlice } from "./slices/role/admin-slices";
import { ProductState, productSlice } from "./slices/product-slice";
import { CartState, cartSlice } from "./slices/cart/cart-slices";
import { TransactionState, transactionSlice } from "./slices/transaction-slice";

type storeState = UserState &
  AdminState &
  ProductState &
  CartState &
  TransactionState;

export const useAppStore = create<storeState>()((...a) => ({
  ...userSlice(...a),
  ...adminSlice(...a),
  ...productSlice(...a),
  ...cartSlice(...a),
  ...transactionSlice(...a),
}));

// export const useAppStore = create<storeState>()(
//   persist(
//     (...a) => ({
//       ...productSlice(...a),
//       ...cartSlice(...a),
//       ...userSlice(...a),
//       ...adminSlice(...a),
//     }),
//     {
//       name: "store",
//     }
//   )
// );

export const useCart = () => useAppStore((state) => state.cart);
export const useProducts = () => useAppStore((state) => state.productItem);
export const useCount = () => useAppStore((state) => state.count);
