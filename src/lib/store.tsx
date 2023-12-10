import { create } from "zustand";
import { UserState, userSlice } from "./slices/user-slices";
import { AdminState, adminSlice } from "./slices/admin-slices";

type storeState = UserState & AdminState;

export const useAppStore = create<storeState>()((...a) => ({
  ...userSlice(...a),
  ...adminSlice(...a),
}));
