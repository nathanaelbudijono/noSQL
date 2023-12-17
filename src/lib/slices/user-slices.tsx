import { StateCreator } from "zustand";
import axios from "axios";
import { nextAPIUrl } from "@/constant/env";

export interface User {
  userToken: {
    user: string;
    role: string;
    iat: number;
  };
}

export interface UserState {
  users: User | null;
  logout: () => Promise<void>;
  registerUser: (username: string, password: string) => Promise<void>;
  getUserInfo: () => Promise<void>;
  errorMessage: string;
}

export const userSlice: StateCreator<UserState> = (set, get) => ({
  users: null,
  registerUser: async (username: string, password: string) => {
    try {
      set({ errorMessage: "" });
      await axios.post(`${nextAPIUrl}/user`, { username, password });
    } catch (err: any) {
      set({ errorMessage: err.response.data.message });
    }
  },
  logout: async () => {
    try {
      await axios.post(`${nextAPIUrl}/logout`);
    } catch (err: any) {
      set({ errorMessage: err.response.data.message });
    }
  },
  getUserInfo: async () => {
    try {
      const userInfo = await axios.get(`${nextAPIUrl}/login/user`);
      set({ users: userInfo.data });
    } catch (err) {
      throw err;
    }
  },
  errorMessage: "",
});
