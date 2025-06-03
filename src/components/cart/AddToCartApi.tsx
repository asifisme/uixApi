import type { AppDispatch, RootState } from "@/app/store";
import { createCart } from "@/features/cart/cartThunks";
import { useDispatch, useSelector } from "react-redux";

const AddToCartApi = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { data, loading, error } = useSelector(
    (state: RootState) => state.cart
  );

  const handleCreateCart = () => {
    dispatch(createCart());
  };

  console.log(data);

  return (
    <section className="text-white">
      {/* <AddToCartViews
        key={"abc"}
        cart={cart}
        totalPrice={totalPrice}
        handleUpdateQunatity={handleUpdateQuantity}
        removeFromCart={handleRemoveFromCart}
        handleClearCart={handleClearCart}
      /> */}
      <h1>Hello</h1>
    </section>
  );
};

export default AddToCartApi;
