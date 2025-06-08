import api_root from "@/api/api_root";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface PaymentPayload {
  confirm: boolean;
}

interface PaymentState {
  loading: boolean;
  error: string | null;
  session: any;
}

const api_path = "paypal/create-checkout-session/";

export const createPayPalPaymentSession = createAsyncThunk(
  "payment/createSession",
  async (payload: PaymentPayload, { rejectWithValue }) => {
    try {
      const response = await api_root.post(api_path, payload);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(
        error.response?.data?.detail || "Something went wrong"
      );
    }
  }
);

const initialState: PaymentState = {
  loading: false,
  error: null,
  session: null,
};

const PayPalSlice = createSlice({
  name: "payment",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createPayPalPaymentSession.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createPayPalPaymentSession.fulfilled, (state, action) => {
        state.loading = false;
        state.session = action.payload;
      })
      .addCase(createPayPalPaymentSession.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default PayPalSlice.reducer;
