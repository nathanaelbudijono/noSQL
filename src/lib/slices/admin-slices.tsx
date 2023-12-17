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
  getAdminInfo: () => Promise<void>;
  errorMessageAdmin: string;
}

export const adminSlice: StateCreator<AdminState> = (set, get) => ({
  admins: null,
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
