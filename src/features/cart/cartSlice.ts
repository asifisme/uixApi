import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface CartItem {
  uid: string;
  name: string;
  title: string;
  price: string;
  images: { image: string }[];
  quantity: number;
}

interface CartState {
  cart: CartItem[];
}

const initialState: CartState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Omit<CartItem, "quantity">>) => {
      const existing = state.cart.find(
        (item) => item.uid === action.payload.uid
      );
      if (existing) {
        existing.quantity += 1;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      state.cart = state.cart.filter((item) => item.uid !== action.payload);
    },
    updateQuantity: (
      state,
      action: PayloadAction<{ uid: string; quantity: number }>
    ) => {
      const item = state.cart.find((item) => item.uid === action.payload.uid);
      if (item) {
        if (action.payload.quantity <= 0) {
          state.cart = state.cart.filter((i) => i.uid !== item.uid);
        } else {
          item.quantity = action.payload.quantity;
        }
      }
    },
    clearCart: (state) => {
      state.cart = [];
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;
