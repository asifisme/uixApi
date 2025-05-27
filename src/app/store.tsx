import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counterSlice";
import siginInReducer from "../features/auth/signInSlice";
import singUpReducar from "../features/auth/signUpSlice";
import productReducer from "../features/home/productsSlice";
import cartReducer from "../features/cart/cartSlice"

// 
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth_signin: siginInReducer,
    auth_signup: singUpReducar,
    product: productReducer,
    cart: cartReducer, 
  },
});

// 
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
