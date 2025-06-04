import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "@/app/store";
import { useEffect } from "react";
import { fetchCartItems } from "@/features/cart/item/cartItemSlice";
import { Card } from "../ui/card";
import { X, ShoppingCart, Minus, Plus, Trash2 } from "lucide-react";
import { fetchProdcutApi } from "@/features/home/productsSlice";

const TestCart = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { items } = useSelector((state: RootState) => state.cartItem);
  const { productsList } = useSelector((state: RootState) => state.product);

  useEffect(() => {
    dispatch(fetchCartItems());
    dispatch(fetchProdcutApi() as any);
  }, [dispatch]);

  return (
    <section>
      <Card className={"   bg-[#cbd5e1] mt-4 mr-3"}>
        <div className="flex items-center justify-between   border-b">
          <div className="flex items-center gap-2 text-lg font-semibold text-gray-900">
            <ShoppingCart className="w-5 h-5" />
            Shopping Cart
          </div>
          <button type="button" className=" hover:text-gray-500">
            <X className="w-6 h-6" />
            <span className="sr-only">Close panel</span>
          </button>
        </div>
        {/* header end  */}

        <div className="flex-1  px-4 ">
          <ul role="list" className=" ">
            {items.map((views) => {
              // Match by product_id (cart) === id (product)
              const product = productsList.find(
                (p) => p.id === views.product_id
              );
              // Debug: log product and cart item
              // console.log('cart item', views, 'matched product', product);
              return (
                <li key={views.id} className="flex py-2">
                  <div className="rounded-md border border-gray-200">
                    <img
                      src={
                        product?.images &&
                        product.images.length > 0 &&
                        product.images[0].product_image
                          ? product.images[0].product_image
                          : "https://placehold.co/600x400"
                      }
                      alt={product?.name || "Product image"}
                      className="h-16 w-24 object-cover object-center"
                    />
                    <p className="text-center font-bold mt-2">
                      {views.quantity}
                    </p>
                  </div>
                  <div className="ml-4 flex flex-1 flex-col ">
                    <div className="flex justify-between text-base  text-gray-900">
                      <p className="font">{product?.name || "Name"}</p>
                      <p className="ml-4">${views.price}</p>
                    </div>
                    <div className="flex flex-1 items-end justify-between text-sm">
                      <div className="flex items-center gap-2 text-gray-500">
                        <button className="p-1 border rounded hover:bg-gray-100">
                          <Minus className="w-4 h-4" />
                        </button>
                        <span>|</span>
                        <button className="p-1 border rounded hover:bg-gray-100">
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                      <div className="flex items-center gap-1">
                        <div className="flex gap-2">
                          <Trash2 className="w-4 h-6 text-red-500 hover:text-red-700 cursor-pointer" />
                          <button className="text-sm font-medium text-red-600 hover:text-red-800">
                            delete
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
        {/* footer  */}
        <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
          <div className="flex justify-between text-base font-medium text-gray-900">
            <p>Subtotal</p>
            <p>Total Price $</p>
          </div>
          <p className="mt-0.5 text-sm text-gray-500">
            Shipping and taxes calculated at checkout.
          </p>
          <div className="mt-6">
            <a
              href="#"
              className="flex items-center justify-center gap-2 rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
            >
              Checkout
            </a>
          </div>
          <div className="mt-6 text-center text-sm text-gray-500">
            or{" "}
            <button className="font-medium text-indigo-600 hover:text-indigo-500">
              Continue Shopping
              <span aria-hidden="true"> &rarr;</span>
            </button>
          </div>
        </div>
      </Card>
    </section>
  );
};

export default TestCart;
