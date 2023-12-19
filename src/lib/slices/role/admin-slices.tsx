import { StateCreator } from "zustand";
import axios from "axios";
import { nextAPIUrl } from "@/constant/env";

export interface adminType {
  id: string;
  role: string;
  iat: number;
  email: string;
}

export interface adminProfileType {
  adminDoc: {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    dob: string;
    address: string;
    wallet: number;
    subdistrict: string;
    city: string;
    role: string;
  };
}
export interface AdminState {
  admins: adminType | null;
  adminProfile: adminProfileType | null;
  getAdminInfo: () => Promise<void>;
  getAdminProfile: () => Promise<void>;
  isLoading: boolean;
}

export const adminSlice: StateCreator<AdminState> = (set, get) => ({
  admins: null,
  adminProfile: null,
  getAdminInfo: async () => {
    try {
      const adminInfo = await axios.get(`${nextAPIUrl}/admin`);
      set({ admins: adminInfo.data });
    } catch (err) {
      throw err;
    }
  },
  getAdminProfile: async () => {
    try {
      set({ isLoading: true });
      const adminInfo = await axios.get(`${nextAPIUrl}/auth/admin/profile`);
      set({ adminProfile: adminInfo.data });
    } catch (err) {
      console.log(err);
    } finally {
      set({ isLoading: false });
    }
  },
  isLoading: false,
});
