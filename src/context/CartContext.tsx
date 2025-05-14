

import React, { createContext, useContext, useState } from "react";

interface CartItem {
  uid: string;
  name: string;
  title: string;
  price: string;
  images: { image: string }[];
  quantity: number;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (item: Omit<CartItem, "quantity">) => void;
  removeFromCart: (uid: string) => void;
  updateQuantity: (uid: string, quantity: number) => void;
  isCartExist: boolean;
}

const CartContext = createContext<CartContextType | null>(null);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (item: Omit<CartItem, "quantity">) => {
    setCart((prevCart) => {
      const exists = prevCart.find((cartItem) => cartItem.uid === item.uid);
      if (exists) {
        return prevCart.map((cartItem) =>
          cartItem.uid === item.uid
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        return [...prevCart, { ...item, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (uid: string) => {
    setCart((prevCart) => prevCart.filter((item) => item.uid !== uid));
  };

  const updateQuantity = (uid: string, quantity: number) => {
    if (quantity <= 0) return removeFromCart(uid);
    setCart((prevCart) =>
      prevCart.map((item) => (item.uid === uid ? { ...item, quantity } : item))
    );
  };

  const isCartExist = cart.length > 0;

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, updateQuantity, isCartExist }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCartContext must be used within a CartProvider");
  }
  return context;
};
