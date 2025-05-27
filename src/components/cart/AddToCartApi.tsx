import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import AddToCartViews from "./AddToCartViews";
import api from "@/api/api_root";
import { updateQuantity, removeFromCart } from "@/features/cart/cartSlice"; // Adjust path as needed
import type { AppDispatch, RootState } from "@/app/store";

const api_path_cart: string = "cart/";
const api_path_cart_item: string = "cartitem/";

const AddToCartApi = () => {
  const token: string | null = localStorage.getItem("access");

  const dispatch = useDispatch<AppDispatch>();
  const cart = useSelector((state: RootState) => state.cart.cart);

  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [uidArray, setUidArray] = useState<string[]>([]);

  // 🔹 1. Create new cart (POST)
  const fetchCart = async () => {
    try {
      let res = await api.post(
        api_path_cart,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("Cart created:", res.data);
      return res.data 
    } catch (error) {
      console.error("Error creating cart:", error);
    }
  };

  // 🔹 2. Fetch cart items (GET)


  const handleUpdateQuantity = (uid: string, quantity: number) => {
    dispatch(updateQuantity({ uid, quantity }));
  };

  const handleRemoveFromCart = (uid: string) => {
    dispatch(removeFromCart(uid));
  };

  useEffect(() => {
    if (token) {
      fetchCart();
    }
  }, [token]);

  useEffect(() => {
    const total = cart.reduce(
      (acc, item) => acc + parseFloat(item.price) * item.quantity,
      0
    );
    setTotalPrice(total);
  }, [cart]);

  return (
    <section>
      <AddToCartViews
        key={"abc"}
        cart={cart}
        totalPrice={totalPrice}
        handleUpdateQunatity={handleUpdateQuantity}
        removeFromCart={handleRemoveFromCart}
      />
    </section>
  );
};

export default AddToCartApi;
