import { StateCreator } from "zustand";
import axios from "axios";
import { nextAPIUrl } from "@/constant/env";

export interface User {
  userToken: {
    email: string;
    role: string;
    id: string;
    iat: number;
  };
}

export interface UserState {
  users: User | null;
  getUserInfo: () => Promise<void>;
  errorMessage: string;
}

export const userSlice: StateCreator<UserState> = (set, get) => ({
  users: null,
  getUserInfo: async () => {
    try {
      const userInfo = await axios.get(`${nextAPIUrl}/auth/user`);
      set({ users: userInfo.data });
    } catch (err) {
      throw err;
    }
  },
  errorMessage: "",
});
