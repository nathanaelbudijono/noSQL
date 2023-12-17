import { create } from "zustand";
import { UserState, userSlice } from "./slices/user-slices";
import { AdminState, adminSlice } from "./slices/admin-slices";
import { CartSlice, createCartSlice } from "./slices/createCartSlice";
import { createProductSlice, ProductSlice } from "./slices/createProductSlice";

type storeState = UserState & AdminState & ProductSlice & CartSlice;

export const useAppStore = create<storeState>()((...a) => ({
  ...userSlice(...a),
  ...adminSlice(...a),
  ...createProductSlice(...a),
  ...createCartSlice(...a),
}));
