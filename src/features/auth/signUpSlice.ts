import { createSlice } from "@reduxjs/toolkit";
import { registerUser } from "./authThunks";

interface AuthState {
  loading: boolean;
  error: string | null;
  access: string | null;
  refresh: string | null;
}

const initialState: AuthState = {
  loading: false,
  error: null,
  access: null,
  refresh: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.access = null;
      state.refresh = null;
      localStorage.removeItem("access");
      localStorage.removeItem("refresh");
    },
  },
  
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.access = action.payload.access;
        state.refresh = action.payload.refresh;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
