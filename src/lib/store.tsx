import { create } from "zustand";
import { UserState, userSlice } from "./slices/user-slices";
import { AdminState, adminSlice } from "./slices/admin-slices";
import { ProductState, productSlice } from "./slices/product-slice";

type storeState = UserState & AdminState & ProductState;

export const useAppStore = create<storeState>()((...a) => ({
  ...userSlice(...a),
  ...adminSlice(...a),
  ...productSlice(...a),
}));
