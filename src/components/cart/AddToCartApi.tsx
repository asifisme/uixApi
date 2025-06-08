import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "@/app/store";
import {
  createCartItem,
  deleteCartItem,
  fetchCartItems,
} from "@/features/cart/item/cartItemSlice";
import { fetchProdcutApi } from "@/features/home/productsSlice";
import { closeCart } from "@/features/nav/navSlice";

import { Button } from "../ui/button";
import { X, ShoppingCart, Minus, Plus, Trash2 } from "lucide-react";
import { createOrder } from "@/features/payment/orderSlice";
import { createPaymentSession } from "@/features/payment/paymentSlice";
import { createPayPalPaymentSession } from "@/features/payment/paypalSlice";

// Interfaces
interface ProductImage {
  id: number;
  product: number;
  product_image: string;
  alt_text: string;
}

interface Product {
  id: number;
  images: ProductImage[];
  name: string;
  title: string;
  price: string;
  discount_percent: number;
  min_order_quantity: number;
  uid: string;
}

const AddToCartApi = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { items } = useSelector((state: RootState) => state.cartItem);
  const { productsList } = useSelector((state: RootState) => state.product);
  const [paymentMethod, setPaymentMethod] = useState<"stripe" | "paypal">(
    "stripe"
  );

  useEffect(() => {
    dispatch(fetchCartItems());
    dispatch(fetchProdcutApi() as any);
  }, [dispatch]);

  const token = localStorage.getItem("access");

  const handleCartQuantitychange = async (uid: string, quantity: number) => {
    if (!token) {
      alert("Please log in to modify items in your cart.");
      return;
    }
    await dispatch(createCartItem({ product_uid: uid, quantity }));
    await dispatch(fetchCartItems());
  };

  const handleDeleteItem = async (id: number) => {
    if (!token) {
      alert("Please log in to delete items from your cart.");
      return;
    }
    await dispatch(deleteCartItem(id));
    // alert("Item deleted successfully!");
    await dispatch(fetchCartItems());
  };

  const totalPrice = items.reduce((sum, item) => {
    const product = productsList.find((p) => p.id === item.product_id);

    if (!product) return sum;

    const price = parseFloat(product.price) || 0;
    const discount = (price * product.discount_percent) / 100;
    const finalPrice = price - discount;

    return sum + finalPrice * item.quantity;
  }, 0);

  // if (!token) {
  //   alert("Please log in to create an order.");
  //   return;
  // }

  // const payPalpalResult = await dispatch(
  //   createPayPalPaymentSession({ confirm: is_confirm })
  // );
  // const payPalPaymentUrl = payPalpalResult?.payload?.checkout_url;
  // if (payPalPaymentUrl) {
  //   window.location.href = payPalPaymentUrl;
  // } else {
  //   alert("Failed to initiate payment session.");
  // }

  const handlePayPalPayment = async (is_confirm: boolean) => {
    if (!token) {
      alert("Please Sign in to create an order");
      return;
    }
    const orderResult = await dispatch(createOrder({ is_confirm: is_confirm }));
    if (orderResult?.meta?.requestStatus === "fulfilled") {
      const paymentResult = await dispatch(
        createPayPalPaymentSession({ confirm: is_confirm })
      );
      const paymentUrl = paymentResult?.payload?.checkout_url;

      if (paymentUrl) {
        console.log("Redirecting to payment gateway:", paymentUrl);
        window.location.href = paymentUrl;
      } else {
        console.error("Payment URL not found in response:", paymentResult);
        alert("Failed to initiate payment session.");
      }
    } else {
      alert("Order creation failed. Please try again.");
      console.error("Order creation failed:", orderResult);
    }
  };

  const handleStripePayment = async (is_confirm: boolean) => {
    if (!token) {
      alert("Please Sign in to create an order.");
      return;
    }
    const orderResult = await dispatch(createOrder({ is_confirm: is_confirm }));

    if (orderResult?.meta?.requestStatus === "fulfilled") {
      const paymentResult = await dispatch(
        createPaymentSession({ confirm: is_confirm })
      );

      const paymentUrl = paymentResult?.payload?.checkout_url;

      if (paymentUrl) {
        console.log("Redirecting to payment gateway:", paymentUrl);
        window.location.href = paymentUrl;
      } else {
        console.error("Payment URL not found in response:", paymentResult);
        alert("Failed to initiate payment session.");
      }
    } else {
      alert("Order creation failed. Please try again.");
      console.error("Order creation failed:", orderResult);
    }
  };

  const handleCheckout = async (is_confirm: boolean) => {
    if (paymentMethod === "paypal") {
      await handlePayPalPayment(is_confirm);
    } else {
      await handleStripePayment(is_confirm);
    }
  };

  return (
    <section>
      <div className="  mr-3">
        {/* Header */}
        <div className="flex items-center justify-between border-b">
          <div className="flex items-center gap-2 text-lg font-semibold text-gray-900">
            <ShoppingCart className="w-5 h-5" />
            Shopping Cart
          </div>
          <button
            type="button"
            className="hover:text-gray-500"
            onClick={() => dispatch(closeCart())}
          >
            <X className="w-6 h-6" />
            <span className="sr-only">Close panel</span>
          </button>
        </div>

        {/* Body */}
        <div className="flex-1 px-4">
          <ul role="list">
            {items.map((views) => {
              const product: Product = productsList.find(
                (p) => p.id === views.product_id
              );

              return (
                <li key={views.id} className="flex py-2">
                  <div className="rounded-md border border-gray-200">
                    <img
                      src={
                        product?.images?.[0]?.product_image ||
                        "https://placehold.co/600x400"
                      }
                      alt={product?.name || "Product image"}
                      className="h-16 w-24 object-cover object-center"
                    />
                    <p className="text-center font-bold mt-2">
                      {views.quantity}
                    </p>
                  </div>

                  <div className="ml-4 flex flex-1 flex-col">
                    <div className="flex justify-between text-base text-gray-900">
                      <p className="font">{product?.name || "Name"}</p>
                      <p className="ml-4">${views.price}</p>
                    </div>

                    <div className="flex flex-1 items-end justify-between text-sm">
                      <div className="flex items-center gap-2 text-gray-500">
                        <button className="p-1 border rounded hover:bg-gray-100">
                          <Minus
                            onClick={() =>
                              handleCartQuantitychange(product.uid, -1)
                            }
                            className="w-4 h-4"
                          />
                        </button>
                        <span>|</span>
                        <button
                          className="p-1 border rounded hover:bg-gray-100"
                          onClick={() =>
                            handleCartQuantitychange(product.uid, 1)
                          }
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>

                      <div className="flex items-center gap-1">
                        <div
                          onClick={() => handleDeleteItem(views.id)}
                          className="flex gap-2 bg-amber-200"
                        >
                          <Button>
                            <Trash2 className="w-4 h-6 text-red-500 hover:text-red-700 cursor-pointer" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Footer */}
        <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
          <div className="flex justify-between text-base font-medium text-gray-900">
            <p>Subtotal</p>
            <p>$ {totalPrice.toFixed(2)}</p>
          </div>
          <p className="mt-0.5 text-sm text-gray-500">
            Shipping and taxes calculated at checkout.
          </p>
          {/* Payment method selection */}
          <div className="mt-4 flex gap-4">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="paymentMethod"
                value="stripe"
                checked={paymentMethod === "stripe"}
                onChange={() => setPaymentMethod("stripe")}
              />
              Stripe
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="paymentMethod"
                value="paypal"
                checked={paymentMethod === "paypal"}
                onChange={() => setPaymentMethod("paypal")}
              />
              PayPal
            </label>
          </div>
          <div className="mt-6">
            <p
              onClick={() => handleCheckout(true)}
              className="flex items-center justify-center gap-2 rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 cursor-pointer transition duration-200"
            >
              Checkout
            </p>
          </div>

          <div className="mt-6 text-center text-sm text-gray-500">
            or{" "}
            <button className="font-medium text-indigo-600 hover:text-indigo-500">
              Continue Shopping<span aria-hidden="true"> &rarr;</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddToCartApi;
