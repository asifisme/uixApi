import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counterSlice";
import siginInReducer from "../features/auth/signInSlice";
import singUpReducar from "../features/auth/signUpSlice";
import productReducer from "../features/home/productsSlice";
import productDetailReducer from "../features/home/productDetailSlice";
import cartReducer from "../features/cart/cartSlice";
import cartItemReducer from "../features/cart/item/cartItemSlice";
import orderReducer from "../features/payment/orderSlice";
import paymentReducer from "../features/payment/paymentSlice";
import payPalReducer from "../features/payment/paypalSlice";
import isSignIn from "../features/nav/navSlice";

//
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth_signin: siginInReducer,
    auth_signup: singUpReducar,
    product: productReducer,
    productDetail: productDetailReducer,
    cart: cartReducer,
    order: orderReducer,
    cartItem: cartItemReducer,
    payment: paymentReducer,
    paypal: payPalReducer,
    sign: isSignIn,
  },
});

//
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
