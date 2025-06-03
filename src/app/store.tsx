import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counterSlice";
import siginInReducer from "../features/auth/signInSlice";
import singUpReducar from "../features/auth/signUpSlice";
import productReducer from "../features/home/productsSlice";
import productDetailReducer from "../features/home/productDetailSlice";
import cartHanderReducer from "../features/cart/handelar/cartHandelar";
import cartReducer from "../features/cart/cartSlice";
import isSignIn from "../features/nav/navSlice";

//
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth_signin: siginInReducer,
    auth_signup: singUpReducar,
    product: productReducer,
    productDetail: productDetailReducer,
    cartHandelar: cartHanderReducer,
    cart: cartReducer,
    sign: isSignIn,
  },
});

//
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
