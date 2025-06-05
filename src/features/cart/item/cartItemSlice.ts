import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api_root from "@/api/api_root";

//

export interface CartItem {
  id: number;
  cart_id: number;
  product_uid: string;
  product_id?: number;
  quantity: number;
  price: string;
  is_active: boolean;
  uid: string;
  created: string;
  modified: string;
}

//

export interface CreateCartItemPayload {
  product_uid: string;
  quantity: number;
}

//

interface CartItemState {
  items: CartItem[];
  loading: boolean;
  error: string | null;
}

//

const initialState: CartItemState = {
  items: [],
  loading: false,
  error: null,
};

//
const api_path = "/cartitem/";

//
/**
 * Creates a new cart item using Redux Toolkit's createAsyncThunk.
 * Makes a POST request to add an item to the cart.
 *
 * @param payload - The data required to create a new cart item
 * @param rejectWithValue - Redux Toolkit's utility for handling rejected actions
 * @returns A Promise that resolves to the created CartItem on success
 * @throws Will reject with axios error response data or error message on failure
 */
export const createCartItem = createAsyncThunk(
  "cartItem/create",
  async (payload: CreateCartItemPayload, { rejectWithValue }) => {
    try {
      const response = await api_root.post<CartItem>(api_path, payload);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const deleteCartItem = createAsyncThunk(
  "cartItem/delete",
  async (id: number, { rejectWithValue }) => {
    try {
      await api_root.delete(`${api_path}${id}/`);
    } catch (error: any) {
      return rejectWithValue(error.data);
    }
  }
);

/**
 * Fetches cart items from the API.
 * @async
 * @function fetchCartItems
 * @returns {Promise<CartItem[]>} A promise that resolves to an array of cart items
 * @throws {any} When the API request fails
 *
 * @example
 * // Dispatch the fetch action
 * dispatch(fetchCartItems())
 */
export const fetchCartItems = createAsyncThunk(
  "cartItem/fetch",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api_root.get<CartItem[]>(api_path);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data);
    }
  }
);

/**
 * Redux slice for managing cart items in the application.
 *
 * This slice handles the state management for cart items including:
 * - Creating new cart items
 * - Fetching existing cart items
 *
 * The slice maintains the following state:
 * - loading: Boolean indicating if an operation is in progress
 * - error: String containing any error messages
 * - items: Array of cart items
 *
 * @remarks
 * The slice uses Redux Toolkit's createSlice and handles async actions
 * through extraReducers for creating and fetching cart items.
 *
 * @see {@link createCartItem} For creating new cart items
 * @see {@link fetchCartItems} For fetching existing cart items
 */
const cartItemSlice = createSlice({
  name: "CartItem",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Create
    builder
      .addCase(createCartItem.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createCartItem.fulfilled, (state, action) => {
        state.loading = false;
        state.items.push(action.payload);
      })
      .addCase(createCartItem.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      // Delete
      .addCase(deleteCartItem.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteCartItem.fulfilled, (state, action) => {
        state.loading = false;
        state.items = state.items.filter((item) => item.id !== action.payload);
      })
      .addCase(deleteCartItem.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      // Fetch
      .addCase(fetchCartItems.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCartItems.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchCartItems.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

//
export default cartItemSlice.reducer;
