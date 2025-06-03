// src/features/cart/cartSlice.ts
import { createSlice } from "@reduxjs/toolkit";
import { createCart } from "./cartThunks";

/**
 * Represents a shopping cart in the system.
 * 
 * @interface Cart
 * @property {number} id - The unique identifier for the cart
 * @property {string} uid - The unique string identifier for the cart
 * @property {number} author - The ID of the user who created the cart
 * @property {string} created - The timestamp when the cart was created
 * @property {string} modified - The timestamp when the cart was last modified
 */
export interface Cart {
  id: number;
  uid: string;
  author: number;
  created: string;
  modified: string;
}

/**
 * Represents the state of the shopping cart in the application.
 * @interface CartState
 * @property {Cart | null} cart - The current cart object or null if empty
 * @property {boolean} loading - Indicates if cart data is being loaded
 * @property {string | null} error - Error message if any, null otherwise
 */
interface CartState {
  cart: Cart | null;
  loading: boolean;
  error: string | null;
}

/**
 * Initial state for the cart slice.
 * @type {CartState}
 * @property {Cart | null} cart - The current cart object or null if empty
 * @property {boolean} loading - Flag indicating whether cart operations are in progress
 * @property {string | null} error - Error message if any cart operation failed, null otherwise
 */
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
 * @property {string} name - The name identifier for the slice
 * @property {object} initialState - The initial state of the cart
 * @property {object} reducers - Empty object for standard reducers
 * @property {function} extraReducers - Builder callback for handling async thunk actions
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
