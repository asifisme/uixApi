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

/**
 * Redux slice for managing the shopping cart state.
 *
 * @remarks
 * This slice handles cart operations including adding, removing, updating quantities, and clearing items.
 *
 * @reducers
 * - addToCart: Adds an item to the cart. If the item already exists, increments its quantity.
 * - removeFromCart: Removes a specific item from the cart based on its uid.
 * - updateQuantity: Updates the quantity of a specific item. Removes item if quantity <= 0.
 * - clearCart: Removes all items from the cart.
 *
 * @param name - The name of the slice ("cart")
 * @param initialState - The initial state of the cart
 * @param reducers - Object containing the reducer functions
 *
 * @returns A configured Redux slice for cart operations
 * Redux slice for managing shopping cart state.
 * @property {string} name - The name of the slice ('cart')
 * @property {object} initialState - The initial state of the cart
 * @property {object} reducers - Cart action reducers
 * @property {function} reducers.addToCart - Adds an item to cart or increments quantity if exists
 * @property {function} reducers.removeFromCart - Removes an item from cart by uid
 * @property {function} reducers.updateQuantity - Updates item quantity, removes if quantity <= 0
 * @property {function} reducers.clearCart - Removes all items from cart
 */
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // Add an item to the cart
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
    // Remove an item from the cart
    removeFromCart: (state, action: PayloadAction<string>) => {
      state.cart = state.cart.filter((item) => item.uid !== action.payload);
    },
    // Update the quantity of an item in the cart
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
    // Clear the cart
    clearCart: (state) => {
      state.cart = [];
    },
  },
});

/**
 * Export cart action creators from the cart slice
 * @exports
 * @property {Function} addToCart - Action creator to add an item to the cart
 * @property {Function} removeFromCart - Action creator to remove an item from the cart
 * @property {Function} updateQuantity - Action creator to update the quantity of an item in the cart
 * @property {Function} clearCart - Action creator to remove all items from the cart
 */
export const { addToCart, removeFromCart, updateQuantity, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;
