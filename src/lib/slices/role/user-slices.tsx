import { StateCreator } from "zustand";
import axios from "axios";
import { nextAPIUrl } from "@/constant/env";

export interface userType {
  email: string;
  role: string;
  id: string;
  iat: number;
  image: string;
}

export interface userCompleteType {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  dob: string;
  wallet: number;
  imageURL: string;
  address: string;
  subdistrict: string;
  city: string;
  role: string;
  createdAt: string;
}

export interface UserState {
  users: userType | null;
  userComplete: userCompleteType | null;
  getUserInfo: () => Promise<void>;
  getUserComplete: (id: string) => Promise<void>;
  isLoading: boolean;
  errorMessage: string;
}

export const userSlice: StateCreator<UserState> = (set, get) => ({
  users: null,
  userComplete: null,
  getUserInfo: async () => {
    try {
      const userInfo = await axios.get(`${nextAPIUrl}/auth/user`);
      set({ users: userInfo.data });
    } catch (err) {
      throw err;
    }
  },
  getUserComplete: async (id: string) => {
    try {
      set({ isLoading: true });
      const res = await fetch(`${nextAPIUrl}/auth/user/complete/${id}`);
      set({ userComplete: await res.json() });
    } catch (err) {
      console.log(err);
    } finally {
      set({ isLoading: false });
    }
  },
  errorMessage: "",
  isLoading: false,
});
