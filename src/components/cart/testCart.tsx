import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "@/app/store";
import { useEffect } from "react";
import { fetchCartItems } from "@/features/cart/item/cartItemSlice";

const TestCart = () =>{
  const dispatch = useDispatch<AppDispatch>()
  const { items, loading, error } = useSelector(
    (state: RootState) => state.cartItem
  );

  useEffect(() => {
    dispatch(fetchCartItems())
  }, [dispatch])

  


  return (
    <div className="bg-white text-gray-800">
      <h2 className="">Your Cart Items</h2>

      {items.map((item) => (
        <div key={item.uid}>
          <p>Product UID: {item.product_uid}</p>
          <p>Quantity: {item.quantity}</p>
          <p>Price: {item.price}</p>
          <p>Active: {item.is_active ? "Yes" : "No"}</p>
          <p>Created At: {item.created}</p>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default TestCart;
