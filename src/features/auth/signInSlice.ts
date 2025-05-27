import api_root from "@/api/api_root";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

interface AuthState {
  access: string | null;
  refresh: string | null;
  loading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  access: null,
  refresh: null,
  loading: false,
  error: null,
};

export const signin = createAsyncThunk(
  "auth/signin",
  async (
    {
      username_or_email,
      password,
    }: { username_or_email: string; password: string },
    { rejectWithValue }
  ) => {
    try {
      const res = await api_root.post("/signin/", { username_or_email, password });
      const { access, refresh } = res.data;

      localStorage.setItem("access", access);
      localStorage.setItem("refresh", refresh);

      return { access, refresh };
    } catch (err: any) {
      return rejectWithValue(err.response?.data?.detail || err.message);
    }
  }
);

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
      .addCase(signin.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signin.fulfilled, (state, action) => {
        state.loading = false;
        state.access = action.payload.access;
        state.refresh = action.payload.refresh;
      })
      .addCase(signin.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
