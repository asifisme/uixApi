// src/components/PayPalButton.tsx

import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createPaymentSession } from "@/features/payment/paymentSlice";
import type { AppDispatch, RootState } from "@/app/store";

declare global {
  interface Window {
    paypal: any;
  }
}

const PayPalButton = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { approvalUrl, status, error } = useSelector(
    (state: RootState) => state.payment
  );

  useEffect(() => {
    dispatch(createPaymentSession({ confirm: true }));
  }, [dispatch]);


  return (
    <div>
      <h2>Pay with PayPal</h2>
      {status === "loading" && <p>Loading PayPal Button...</p>}
      {error && (
        <p className="text-red-500">
          {typeof error === "string"
            ? error
            : (error as any)?.message || "Unknown error occurred"}
        </p>
      )}
      <div id="paypal-button-container"></div>
    </div>
  );
};

export default PayPalButton;
