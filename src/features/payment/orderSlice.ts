import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api_root from "@/api/api_root";

// Interface for the payload
interface orderPayload {
  is_confirm: boolean;
}

// Interface for the response  
interface Order {
  id: number;
  author: number;
  cart_id: number;
  order_num: number;
  order_note: string;
  ord_status: string;
  total_amount: string;
  payment_status: string;
  shipping_status: string;
  is_confirmed: boolean;
  uid: string;
  created: string;
  modified: string;
}

// Redux state
interface OrderState {
  loading: boolean;
  error: string | null;
  order: Order | null;
}

const api_path = "/order/";

export const createOrder = createAsyncThunk(
  "order/createOrder",
  async (payload: orderPayload, { rejectWithValue }) => {
    try {
      const response = await api_root.post(api_path, payload);
      return response.data as Order;
    } catch (error: any) {
      return rejectWithValue(error.response?.data || "Server Error");
    }
  }
);

// Initial state
const initialState: OrderState = {
  loading: false,
  error: null,
  order: null,
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createOrder.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.order = null;
      })
      .addCase(createOrder.fulfilled, (state, action) => {
        state.loading = false;
        state.order = action.payload;
      })
      .addCase(createOrder.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default orderSlice.reducer;
