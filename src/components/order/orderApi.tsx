import type { AppDispatch, RootState } from "@/app/store";
import { fetchOrders } from "@/features/payment/orderSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import OrderListApiViews from "./oderApiViews";

const OrderListApi = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { order } = useSelector((state: RootState) => state.order);

  useEffect(() => {
    dispatch(fetchOrders());
  }, [dispatch]);

  return (
    <section>
      <OrderListApiViews views={order} />
    </section>
  );
};

export default OrderListApi;
