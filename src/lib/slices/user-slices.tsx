import { StateCreator } from "zustand";
import axios from "axios";
import { nextAPIUrl } from "@/constant/env";

export interface UserState {
  loginUser: (username: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  registerUser: (username: string, password: string) => Promise<void>;
  errorMessage: string;
}

export const userSlice: StateCreator<UserState> = (set, get) => ({
  loginUser: async (username: string, password: string) => {
    try {
      set({ errorMessage: "" });
      await axios.post(`${nextAPIUrl}/login/user`, { username, password });
    } catch (err: any) {
      set({ errorMessage: err.response.data.message });
    }
  },
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
      await axios.post(`${nextAPIUrl}/user/logout`);
    } catch (err: any) {
      set({ errorMessage: err.response.data.message });
    }
  },
  errorMessage: "",
});
