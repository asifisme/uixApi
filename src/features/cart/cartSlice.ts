import { createSlice } from "@reduxjs/toolkit";
import { createCart } from "./cartThunks";

//
export interface Cart {
  id: number;
  uid: string;
  author: number;
  created: string;
  modified: string;
}

//
interface CartState {
  cart: Cart | null;
  loading: boolean;
  error: string | null;
}


//
const initialState: CartState = {
  cart: null,
  loading: false,
  error: null,
};

/**
 * Redux slice for managing shopping cart state
 * @remarks
 * This slice handles the cart creation process with loading states and error handling
 * 
 * @action createCart.pending - Sets loading to true and clears errors
 * @action createCart.fulfilled - Updates cart data with API response
 * @action createCart.rejected - Stores error message from failed request
 */
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createCart.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createCart.fulfilled, (state, action) => {
        state.loading = false;
        state.cart = action.payload;
      })
      .addCase(createCart.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default cartSlice.reducer;
