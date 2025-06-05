import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api_root from "@/api/api_root";

//
interface ProductImage {
  id: number;
  product: number;
  author: number;
  is_primary: boolean;
  alt_text: string;
}

//
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

interface ProductState {
  productsList: Product[];
  isLoading: boolean;
  fetchError: string | null;
}

//
const initialState: ProductState = {
  productsList: [],
  isLoading: false,
  fetchError: null,
};

const api_path = '/product/'

export const fetchProdcutApi = createAsyncThunk(
  "products/fetchAll",
  async (_, { rejectWithValue }) => {
    try {
      const res = await api_root.get(`${api_path}?page=${1}`);
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
