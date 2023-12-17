import { StateCreator } from "zustand";
import axios from "axios";
import { nextAPIUrl } from "@/constant/env";

export interface Admin {
  adminToken: {
    user: string;
    role: string;
    iat: number;
  };
}

export interface AdminState {
  admins: Admin | null;
  registerAdmin: (username: string, password: string) => Promise<void>;
  getAdminInfo: () => Promise<void>;
  errorMessageAdmin: string;
}

export const adminSlice: StateCreator<AdminState> = (set, get) => ({
  admins: null,
  registerAdmin: async (username: string, password: string) => {
    try {
      set({ errorMessageAdmin: "" });
      await axios.post(`${nextAPIUrl}/admin`, { username, password });
    } catch (err: any) {
      set({ errorMessageAdmin: err.response.data.message });
    }
  },
  getAdminInfo: async () => {
    try {
      const adminInfo = await axios.get(`${nextAPIUrl}/admin`);
      set({ admins: adminInfo.data });
    } catch (err) {
      throw err;
    }
  },
  errorMessageAdmin: "",
});
