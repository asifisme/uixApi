import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api_root from "@/api/api_root";

/**
 * Represents an image associated with a product.
 *
 * @interface ProductImage
 * @property {number} id - Unique identifier for the product image
 * @property {number} product - Reference to the associated product's ID
 * @property {number} author - Reference to the user ID who uploaded the image
 * @property {boolean} is_primary - Indicates if this is the main/primary image for the product
 * @property {string} alt_text - Alternative text description of the image for accessibility
 */
interface ProductImage {
  id: number;
  product: number;
  author: number;
  is_primary: boolean;
  alt_text: string;
}

/**
 * Represents a product in the e-commerce system.
 * @interface Product
 * @property {number} id - Unique identifier for the product
 * @property {ProductImage[]} images - Array of product images
 * @property {string} name - Name of the product
 * @property {string} title - Title/headline of the product
 * @property {string} slug - URL-friendly version of the product name
 * @property {string} description - Detailed description of the product
 * @property {number} weight - Weight of the product
 * @property {string} sku - Stock Keeping Unit identifier
 * @property {string} price - Price of the product
 * @property {number} discount_percent - Discount percentage applied to the product
 * @property {string} warranty_information - Warranty details for the product
 * @property {string} shipping_information - Shipping details for the product
 * @property {string} return_policy - Return policy information
 * @property {number} min_order_quantity - Minimum quantity required for order
 * @property {string} unq_num - Unique number identifier
 * @property {string} pro_uuid - Product UUID
 * @property {boolean} is_available - Indicates if product is in stock
 * @property {boolean} is_approved - Indicates if product is approved for sale
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

//
/**
 * Represents the state structure for products in the Redux store
 * @interface
 * @property {Product[]} productsList - Array containing the list of products
 * @property {boolean} isLoading - Flag indicating if products are being loaded
 * @property {string | null} fetchError - Error message if fetch fails, null otherwise
 */
interface ProductState {
  productsList: Product[];
  isLoading: boolean;
  fetchError: string | null;
}

//
/**
 * Initial state for the products feature slice.
 * @type {ProductState}
 * @property {Array<Product>} productsList - Array containing the list of products
 * @property {boolean} isLoading - Flag indicating whether products are being loaded
 * @property {Error | null} fetchError - Error object if fetch fails, null otherwise
 */
const initialState: ProductState = {
  productsList: [],
  isLoading: false,
  fetchError: null,
};

// api get request
/**
 * Async thunk action creator that fetches all products from the API.
 *
 * @returns A Promise that resolves to an array of products.
 * If the API response contains a 'results' property, it will use that;
 * otherwise, it uses the response data directly if it's an array.
 *
 * @throws {RejectWithValue} Returns "Failed to fetch products" if the API call fails
 *
 * @example
 * ```typescript
 * dispatch(fetchProdcutApi())
 * ```
 */
export const fetchProdcutApi = createAsyncThunk(
  "products/fetchAll",
  async (_, { rejectWithValue }) => {
    try {
      const res = await api_root.get("product");
      const payload = Array.isArray(res.data)
        ? res.data
        : res.data.results || [];
      return payload;
    } catch (error) {
      return rejectWithValue("Failed to fetch products");
    }
  }
);

//
/**
 * Redux slice for managing products state
 * @remarks
 * This slice handles the state management for products, including loading states and error handling
 *
 * @property name - The name identifier for the slice
 * @property initialState - The initial state object for products
 * @property reducers - Empty object for synchronous reducers
 * @property extraReducers - Handles async actions for fetching products:
 * - pending: Sets loading state and clears errors
 * - fulfilled: Updates products list with API response
 * - rejected: Stores error message from failed request
 *
 * @see {@link fetchProdcutApi} for the associated API thunk action
 */
const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProdcutApi.pending, (state) => {
        state.isLoading = true;
        state.fetchError = null;
      })
      .addCase(fetchProdcutApi.fulfilled, (state, action) => {
        state.isLoading = false;
        state.productsList = action.payload;
      })
      .addCase(fetchProdcutApi.rejected, (state, action) => {
        state.isLoading = false;
        state.fetchError = action.payload as string;
      });
  },
});

export default productsSlice.reducer;
