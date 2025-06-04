import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api_root from "@/api/api_root";

interface PaymentPayload {
  confirm: boolean;
}

interface PaymentState {
  loading: boolean;
  error: string | null;
  session: any;
}

const api_path = "/payments/create-checkout-session/";

export const createPaymentSession = createAsyncThunk(
  "payment/createSession",
  async (payload: PaymentPayload, { rejectWithValue }) => {
    try {
      const response = await api_root.post(api_path, payload);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data || "Something went wrong");
    }
  }
);

const initialState: PaymentState = {
  loading: false,
  error: null,
  session: null,
};

const paymentSlice = createSlice({
  name: "payment",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createPaymentSession.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createPaymentSession.fulfilled, (state, action) => {
        state.loading = false;
        state.session = action.payload;
      })
      .addCase(createPaymentSession.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default paymentSlice.reducer;
