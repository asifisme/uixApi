import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface NavState {
  isSignedIn: boolean;
  isCartOpen: boolean;
}

const initialState: NavState = {
  isSignedIn: false,
  isCartOpen: false,
};

const navSlice = createSlice({
  name: "nav",
  initialState,
  reducers: {
    setIsSignedIn: (state, action: PayloadAction<boolean>) => {
      state.isSignedIn = action.payload;
    },
    openCart(state) {
      state.isCartOpen = true;
    },
    closeCart(state) {
      state.isCartOpen = false;
    },
    toggleCart(state) {
      state.isCartOpen = !state.isCartOpen;
    },
  },
});

export const { setIsSignedIn, openCart, closeCart, toggleCart } =
  navSlice.actions;
export default navSlice.reducer;
