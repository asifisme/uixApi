import api_root from "@/api/api_root";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

interface ProductImage {
  id: number;
  product: number;
  author: number;
  is_primary: boolean;
  alt_text: string;
}

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

interface ProductState {
  productsList: Product[];
  isLoading: boolean;
  fetchError: string | null;
}

const initialState: ProductState = {
  productsList: [],
  isLoading: false,
  fetchError: null,
};

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
