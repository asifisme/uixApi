import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "@/app/store";
import { useEffect } from "react";
import { fetchProdcutApi } from "@/features/home/productsSlice";
import NewArrivalProductViews from "./NewArrivalProductViews";
import ProductViews from "./ProductsViews";
import { createCart } from "@/features/cart/cartThunks";
import {
  createCartItem,
  fetchCartItems,
} from "@/features/cart/item/cartItemSlice";


/**
 * Component that fetches and displays product information.
 *
 * This component handles the main product display functionality by:
 * - Dispatching a product fetch action on mount
 * - Displaying loading and error states
 * - Rendering products in two different grid layouts:
 *   1. New Arrival products section
 *   2. Regular products section
 *
 * @component
 * @returns {JSX.Element} A section containing product grids with loading/error states
 *
 * @example
 * ```tsx
 * <HomePageApi />
 * ```
 */
const HomePageApi = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { productsList } = useSelector((state: RootState) => state.product);

  useEffect(() => {
    dispatch(fetchProdcutApi() as any);
  }, [dispatch]);

  /**
   * Handles adding an item to the shopping cart.
   * If the cart doesn't exist or is empty, creates a new cart first.
   * Then adds the specified item to the cart.
   *
   * @param uid - The unique identifier of the product to add
   * @param quantity - The quantity of the product to add
   * @returns A Promise that resolves when the item has been added to the cart
   */
  const { cart } = useSelector((state: RootState) => state.cart);
  const token = localStorage.getItem("access");
  const handleAddItem = async (uid: string, quantity: number) => {
    if (!token) {
      alert("Please log in to add items to your cart.");
      return;
    }
    if (!cart || Object.keys(cart).length === 0) {
      await dispatch(createCart());
    }
    await dispatch(createCartItem({ product_uid: uid, quantity: quantity }));
    dispatch(fetchCartItems());
  };

  return (
    <section>
      {/* New Arival  product start */}
      <div className="grid lg:grid-cols-4 gap-5 m-4 ">
        {productsList.map((views) => (
          <NewArrivalProductViews
            key={views.uid}
            views={views}
            handleAddItem={handleAddItem}
          />
        ))}
      </div>
      {/* New Arival  product start */}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-4">
        {productsList.map((views) => (
          <ProductViews
            key={views.uid}
            views={views}
            handleAddItem={handleAddItem}
          />
        ))}
      </div>
    </section>
  );
};

export default HomePageApi;
