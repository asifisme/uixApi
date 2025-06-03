import api_root from "@/api/api_root";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

/**
 * Represents the structure of a product image in the system.
 * 
 * @interface ProductImage
 * @property {number} id - Unique identifier for the product image
 * @property {number} product - Reference ID to the associated product
 * @property {number} author - Reference ID to the user who uploaded the image
 * @property {boolean} is_primary - Indicates if this is the main image for the product
 * @property {string} alt_text - Alternative text description for accessibility
 */
interface ProductImage {
  id: number;
  product: number;
  author: number;
  is_primary: boolean;
  alt_text: string;
}

/**
 * Represents a product entity in the system.
 * @interface Product
 * @property {number} id - Unique identifier for the product
 * @property {ProductImage[]} images - Array of product images
 * @property {string} name - Name of the product
 * @property {string} title - Title of the product
 * @property {string} slug - URL-friendly version of the product name
 * @property {string} description - Detailed description of the product
 * @property {number} weight - Weight of the product
 * @property {string} sku - Stock Keeping Unit identifier
 * @property {string} price - Price of the product
 * @property {number} stock - Current stock quantity
 * @property {number} discount_percent - Discount percentage applied to the product
 * @property {string} warranty_information - Warranty details
 * @property {string} shipping_information - Shipping details and policies
 * @property {string} return_policy - Return and refund policies
 * @property {number} min_order_quantity - Minimum quantity required for order
 * @property {string} unq_num - Unique number identifier
 * @property {string} pro_uuid - Product UUID
 * @property {boolean} is_available - Product availability status
 * @property {boolean} is_approved - Product approval status
 * @property {number} rating - Product rating
 * @property {number} views_count - Number of product views
 * @property {number} sold_count - Number of units sold
 * @property {string} uid - User identifier
 * @property {number} category - Category identifier
 * @property {number} author - Author/seller identifier
 * @property {number[]} meta_tag - Array of meta tag identifiers
 */
interface Product {
  id: number;
  images: ProductImage[];
  name: string;
  title: string;
  slug: string;
  description: string;
  weight: number;
  sku: string;
  price: string;
  stock: number;
  discount_percent: number;
  warranty_information: string;
  shipping_information: string;
  return_policy: string;
  min_order_quantity: number;
  unq_num: string;
  pro_uuid: string;
  is_available: boolean;
  is_approved: boolean;
  rating: number;
  views_count: number;
  sold_count: number;
  uid: string;
  category: number;
  author: number;
  meta_tag: number[];
}

/**
 * Represents the state of products in the application.
 * @interface ProductState
 * @property {Product[]} productsList - Array of products currently in the state
 * @property {boolean} isLoading - Flag indicating if products are being loaded
 * @property {string | null} fetchError - Error message if fetch fails, null otherwise
 */
interface ProductState {
  productsList: Product[];
  isLoading: boolean;
  fetchError: string | null;
}

/**
 * Initial state for the product detail slice.
 * @type {ProductState}
 * @property {Array<Product>} productsList - Array containing the list of products
 * @property {boolean} isLoading - Flag indicating whether data is being fetched
 * @property {string | null} fetchError - Error message if fetch fails, null otherwise
 */
const initialState: ProductState = {
  productsList: [],
  isLoading: false,
  fetchError: null,
};

/**
 * Async thunk action creator that fetches product details by slug/uid.
 * 
 * @param uid - The unique identifier or slug to search for the product
 * @returns A Promise that resolves to the product details array or rejects with an error message
 * 
 * @throws Will reject with value containing error message if the API call fails
 * 
 * @example
 * ```ts
 * dispatch(productDetailApi("product-slug"))
 * ```
 */
export const productDetailApi = createAsyncThunk(
  "products/fetchBySlug",
  async (uid: string, { rejectWithValue }) => {
    try {
      const response = await api_root.get(`product/?search=${uid}`);
      return response.data.results || [];
    } catch (error: any) {
      return rejectWithValue(
        error?.message?.data.message || "Failed to fetch product details"
      );
    }
  }
);

/**
 * Redux slice for managing product detail state
 * @remarks
 * This slice handles the state management for product details including loading states and error handling
 * 
 * @property {string} name - The name identifier for the slice
 * @property {object} initialState - The initial state containing isLoading, fetchError, and productsList
 * @property {object} reducers - Empty object for regular reducers
 * @property {function} extraReducers - Builder callback handling async thunk actions:
 * - pending: Sets loading state
 * - fulfilled: Updates products list with payload
 * - rejected: Handles error state
 */
const productDetailSlice = createSlice({
  name: "productDetail",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(productDetailApi.pending, (state) => {
        state.isLoading = true;
        state.fetchError = null;
      })
      .addCase(productDetailApi.fulfilled, (state, action) => {
        state.isLoading = false;
        state.productsList = action.payload;
      })
      .addCase(productDetailApi.rejected, (state, action) => {
        state.isLoading = false;
        state.fetchError = action.payload as string;
      });
  },
});

export default productDetailSlice.reducer;
