// src/features/cart/cartThunks.ts
import api_root from "@/api/api_root";
import { createAsyncThunk } from "@reduxjs/toolkit";

const api_path = "cart/";

/**
 * Creates a new cart using Redux Toolkit's createAsyncThunk.
 *
 * @async
 * @returns {Promise<any>} The created cart data from the API response
 * @throws {RejectWithValue} If the API call fails, returns the error message or default message
 */
export const createCart = createAsyncThunk(
  "cart/createCart",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api_root.post(api_path, {});
      return response.data;
    } catch (error: any) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to create cart"
      );
    }
  }
);
