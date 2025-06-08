import type { AppDispatch } from "@/app/store";
import { createPaymentSession } from "@/features/payment/paymentSlice";
import { createPayPalPaymentSession } from "@/features/payment/paypalSlice";
import {
  DollarSign,
  User,
  ShoppingCart,
  Hash,
  ClipboardList,
  CreditCard,
  Truck,
  CheckCircle,
  XCircle,
  Calendar,
  StickyNote,
} from "lucide-react";
import { useDispatch } from "react-redux";

interface Order {
  id: number;
  author: number;
  cart_id: number;
  order_num: number;
  order_note: string;
  ord_status: string;
  total_amount: string;
  payment_status: string;
  shipping_status: string;
  is_confirmed: boolean;
  uid: string;
  created: string;
  modified: string;
}

interface ViewsOrder {
  views: Order[];
}

const OrderListApiViews = ({ views }: ViewsOrder) => {
  const dispatch = useDispatch<AppDispatch>();

  const token = localStorage.getItem("access");

  const handlePayment = async (is_confirm: boolean) => {
    if (!token) {
      alert("Please log in to create an order.");
      return;
    }
    const paymentResult = await dispatch(
      createPaymentSession({ confirm: is_confirm })
    );
    const paymentUrl = paymentResult?.payload?.checkout_url;
    if (paymentUrl) {
      window.location.href = paymentUrl;
    } else {
      alert("Failed to initiate payment session.");
    }
  };

  const handlePayPalPayment = async (is_confirm: boolean) => {
    if (!token) {
      alert("Please log in to create an order.");
      return;
    }

    const payPalpalResult = await dispatch(
      createPayPalPaymentSession({ confirm: is_confirm })
    );
    const payPalPaymentUrl = payPalpalResult?.payload?.checkout_url;
    if (payPalPaymentUrl) {
      window.location.href = payPalPaymentUrl;
    } else {
      alert("Failed to initiate payment session.");
    }
  };
  return (
    <section className="p-6 max-w-6xl mx-auto space-y-8">
      {views.map((order) => (
        <div
          key={order.id}
          className="bg-white dark:bg-gray-900 shadow-lg rounded-2xl p-8 transition hover:shadow-2xl border border-gray-100 dark:border-gray-800"
        >
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white flex items-center gap-2">
              <ClipboardList className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              Order #{order.order_num}
            </h2>
            <span
              className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${
                order.ord_status === "completed"
                  ? "bg-green-100 text-green-800"
                  : "bg-yellow-100 text-yellow-800"
              }`}
            >
              {order.ord_status}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-base text-gray-700 dark:text-gray-300">
            <div className="flex items-center gap-2">
              <User className="w-5 h-5 text-gray-400" />
              <span className="font-semibold">Author ID:</span> {order.author}
            </div>
            <div className="flex items-center gap-2">
              <ShoppingCart className="w-5 h-5 text-gray-400" />
              <span className="font-semibold">Cart ID:</span> {order.cart_id}
            </div>
            <div className="flex items-center gap-2">
              <Hash className="w-5 h-5 text-gray-400" />
              <span className="font-semibold">UID:</span> {order.uid}
            </div>
            <div className="flex items-center gap-2">
              <CreditCard className="w-5 h-5 text-gray-400" />
              <span className="font-semibold">Payment:</span>{" "}
              {order.payment_status}
            </div>
            <div className="flex items-center gap-2">
              <Truck className="w-5 h-5 text-gray-400" />
              <span className="font-semibold">Shipping:</span>{" "}
              {order.shipping_status}
            </div>
            <div className="flex items-center gap-2">
              {order.is_confirmed ? (
                <CheckCircle className="w-5 h-5 text-green-500" />
              ) : (
                <XCircle className="w-5 h-5 text-red-500" />
              )}
              <span className="font-semibold">Confirmed:</span>{" "}
              {order.is_confirmed ? "Yes" : "No"}
            </div>
            <div className="flex items-center gap-2">
              <DollarSign className="w-5 h-5 text-gray-400" />
              <span className="font-semibold">Total:</span> $
              {order.total_amount}
            </div>
            <div className="flex items-center gap-2">
              <StickyNote className="w-5 h-5 text-gray-400" />
              <span className="font-semibold">Note:</span>{" "}
              {order.order_note || "N/A"}
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-gray-400" />
              <span className="font-semibold">Created:</span>{" "}
              {new Date(order.created).toLocaleString()}
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-gray-400" />
              <span className="font-semibold">Modified:</span>{" "}
              {new Date(order.modified).toLocaleString()}
            </div>
          </div>
          {order.payment_status === "unpaid" && (
            <button
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold shadow-md hover:from-blue-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 transition-all duration-200"
              onClick={() => handlePayment(true)}
            >
              <CreditCard className="w-5 h-5" />
              Pay Now strip
            </button>
          )}
          {order.payment_status === "unpaid" && (
            <button
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold shadow-md hover:from-blue-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 transition-all duration-200"
              onClick={() => handlePayPalPayment(true)}
            >
              <CreditCard className="w-5 h-5" />
              Pay Now PayPal
            </button>
          )}
        </div>
      ))}
    </section>
  );
};

export default OrderListApiViews;
