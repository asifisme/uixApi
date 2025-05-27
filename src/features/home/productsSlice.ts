import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api_root from "@/api/api_root";

interface Product {
  id: number;
  name: string;
  title: string;
  desc: string;
  price: string;
  stock: number;
  uid: string;
  images: { image: string }[];
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

// api get request 
export const fetchProdcutApi = createAsyncThunk(
  "products/fetchAll",
  async (_, { rejectWithValue }) => {
    try {
      const res = await api_root.get("product");
      const payload = Array.isArray(res.data) ? res.data : res.data.results || [];
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
