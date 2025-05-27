import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "@/api/api_root";


export interface SignUpPayload {
  first_name: string;
  last_name: string;
  email: string;
  username: string;
  password: string;
  confirm_password: string;
}

export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (data: SignUpPayload, { rejectWithValue }) => {
    try {
      await api.post("/signup/", data);

      const loginRes = await api.post("/signin/", {
        username_or_email: data.email,
        password: data.password,
      });

      const { access, refresh } = loginRes.data;

      localStorage.setItem("access", access);
      localStorage.setItem("refresh", refresh);
      api.defaults.headers.common["Authorization"] = `Bearer ${access}`;

      return { access, refresh };
    } catch (err: string | any ) {
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);
