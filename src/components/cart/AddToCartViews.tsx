import { Card } from "../ui/card";
import { X, ShoppingCart, Minus, Plus, Trash2 } from "lucide-react";

interface cart {
  uid: string;
  name: string;
  price: number;
  quantity: number;
  images: { image: string }[];
}

interface AddToCartViewsProps {
  cart: cart[];
  totalPrice: number;
  handleUpdateQunatity: (uid: string, quantity: number) => void;
  removeFromCart: (uid: string) => void;
}

const AddToCartViews = ({
  cart,
  totalPrice,
  handleUpdateQunatity,
  removeFromCart,
}: AddToCartViewsProps) => {
  return (
    <section>
      <Card className={"   bg-[#cbd5e1] mt-4 mr-3"}>
        {/* header  */}
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
        {/* Body */}
        <div className="flex-1  px-4 ">
          <ul role="list" className=" ">
            {cart.map((views) => (
              <li key={views.uid} className="flex py-2">
                <div className="  rounded-md border border-gray-200">
                  <img
                    src={"https://placehold.co/600x400"}
                    className="h-16 w- object-cover object-center"
                  />
                  <p className="text-center font-bold mt-2">
                    {" "}
                    {views.quantity}
                  </p>
                </div>
                <div className="ml-4 flex flex-1 flex-col ">
                  <div className="flex justify-between text-base  text-gray-900">
                    <p className="font">{views.name}</p>
                    <p className="ml-4">${views.price}</p>
                  </div>
                  <div className="flex flex-1 items-end justify-between text-sm">
                    <div className="flex items-center gap-2 text-gray-500">
                      <button
                        onClick={() =>
                          handleUpdateQunatity(views.uid, views.quantity - 1)
                        }
                        className="p-1 border rounded hover:bg-gray-100"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span>|</span>
                      <button
                        onClick={() =>
                          handleUpdateQunatity(views.uid, views.quantity + 1)
                        }
                        className="p-1 border rounded hover:bg-gray-100"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                    <div className="flex items-center gap-1">
                      <div
                        onClick={() => removeFromCart(views.uid)}
                        className="flex gap-2"
                      >
                        <Trash2 className="w-4 h-6 text-red-500 hover:text-red-700 cursor-pointer" />
                        <button className="text-sm font-medium text-red-600 hover:text-red-800">
                          delete
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        {/* Footer  */}
        <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
          <div className="flex justify-between text-base font-medium text-gray-900">
            <p>Subtotal</p>
            <p>${totalPrice.toFixed(2)}</p>
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

export default AddToCartViews;
