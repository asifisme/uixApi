import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api_root from "@/api/api_root";
import { AxiosError } from "axios";

//
/**
 * Represents a single item in a shopping cart.
 * @interface CartItem
 * @property {number} id - The unique identifier for the cart item.
 * @property {number} cart_id - The identifier of the cart this item belongs to.
 * @property {string} product_uid - The unique identifier of the product.
 * @property {number} quantity - The quantity of the product in the cart.
 * @property {string} price - The price of the item in string format.
 * @property {boolean} is_active - Flag indicating if the cart item is active.
 * @property {string} uid - The unique identifier string for the cart item.
 * @property {string} created - The timestamp when the cart item was created.
 * @property {string} modified - The timestamp when the cart item was last modified.
 */
export interface CartItem {
  id: number;
  cart_id: number;
  product_uid: string;
  quantity: number;
  price: string;
  is_active: boolean;
  uid: string;
  created: string;
  modified: string;
}

//
/**
 * Represents the payload for creating a cart item.
 * @interface CreateCartItemPayload
 * @property {string} product_uid - The unique identifier of the product to be added to cart
 * @property {number} quantity - The quantity of the product to be added to cart
 */
export interface CreateCartItemPayload {
  product_uid: string;
  quantity: number;
}

//
/**
 * Represents the state of shopping cart items in the application.
 * @interface CartItemState
 * @property {CartItem[]} items - Array of items currently in the cart
 * @property {boolean} loading - Indicates whether cart data is being loaded
 * @property {string | null} error - Error message if cart operation fails, null otherwise
 */
interface CartItemState {
  items: CartItem[];
  loading: boolean;
  error: string | null;
}

//
/**
 * Initial state for the cart item slice.
 * @type {CartItemState}
 * @property {CartItem[]} items - Array of items in the cart
 * @property {boolean} loading - Loading state indicator for cart operations
 * @property {string | null} error - Error message if any cart operation fails
 */
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
    } catch (error: AxiosError) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

/**
 * Fetches cart items from the API.
 * 
 * @async
 * @function fetchCartItems
 * @returns {Promise<CartItem[]>} A promise that resolves to an array of cart items
 * @throws {AxiosError} When the API request fails
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
    } catch (error: AxiosError) {
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
