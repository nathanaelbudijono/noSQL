import { StateCreator } from "zustand";
import axios from "axios";
import { nextAPIUrl } from "@/constant/env";

// export interface User {
//   id: string;
//   username: string;
// }

export interface AdminState {
  //   users: User | null;
  //   loginUser: (username: string, password: string) => Promise<void>;
  //   logout: () => Promise<void>;
  registerAdmin: (username: string, password: string) => Promise<void>;
  errorMessage: string;
}

export const adminSlice: StateCreator<AdminState> = (set, get) => ({
  //   users: null,
  //   loginUser: async (username: string, password: string) => {
  //     try {
  //       set({ errorMessage: "" });
  //       await axios.post(`${nextAPIUrl}/user/login`, { username, password });
  //     } catch (err: any) {
  //       set({ errorMessage: err.response.data.message });
  //     }
  //   },
  registerAdmin: async (username: string, password: string) => {
    try {
      set({ errorMessage: "" });
      await axios.post(`${nextAPIUrl}/admin`, { username, password });
    } catch (err: any) {
      set({ errorMessage: err.response.data.message });
    }
  },
  //   logout: async () => {
  //     try {
  //       await axios.post(`${nextAPIUrl}/user/logout`);
  //     } catch (err: any) {
  //       set({ errorMessage: err.response.data.message });
  //     }
  //   },
  errorMessage: "",
});
