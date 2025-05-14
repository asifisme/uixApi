import { ShoppingCart, X, Trash2, Plus, Minus } from "lucide-react";
import { useState } from "react";

const PostMardem = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Wireless Headphones",
      price: 120,
      color: "Black",
      image: "https://placehold.co/400x400?text=Headphones",
      quantity: 1,
    },
    {
      id: 2,
      name: "Smart Watch",
      price: 142,
      color: "Silver",
      image: "https://placehold.co/400x400?text=Watch",
      quantity: 1,
    },
  ]);

  const handleIncrease = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleDecrease = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="w-full">
      <div className="fixed inset-0 z-50 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
            <div className="pointer-events-auto w-screen max-w-md">
              <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                {/* Header */}
                <div className="flex items-center justify-between px-4 py-6 sm:px-6 border-b">
                  <div className="flex items-center gap-2 text-lg font-semibold text-gray-900">
                    <ShoppingCart className="w-5 h-5" />
                    Shopping Cart
                  </div>
                  <button
                    type="button"
                    className="text-gray-400 hover:text-gray-500"
                  >
                    <X className="w-6 h-6" />
                    <span className="sr-only">Close panel</span>
                  </button>
                </div>

                {/* Cart Items */}
                <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                  <ul role="list" className="-my-6 divide-y divide-gray-200">
                    {cartItems.map((item) => (
                      <li key={item.id} className="flex py-6">
                        <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="ml-4 flex flex-1 flex-col">
                          <div className="flex justify-between text-base font-medium text-gray-900">
                            <h3>{item.name}</h3>
                            <p className="ml-4">${item.price.toFixed(2)}</p>
                          </div>
                          <p className="mt-1 text-sm text-gray-500">
                            Color: {item.color}
                          </p>
                          <div className="flex flex-1 items-end justify-between text-sm">
                            <div className="flex items-center gap-2 text-gray-500">
                              <button
                                onClick={() => handleDecrease(item.id)}
                                className="p-1 border rounded hover:bg-gray-100"
                              >
                                <Minus className="w-4 h-4" />
                              </button>
                              <span>{item.quantity}</span>
                              <button
                                onClick={() => handleIncrease(item.id)}
                                className="p-1 border rounded hover:bg-gray-100"
                              >
                                <Plus className="w-4 h-4" />
                              </button>
                            </div>
                            <div className="flex items-center gap-1">
                              <Trash2 className="w-4 h-4 text-red-500 hover:text-red-700 cursor-pointer" />
                              <button className="text-sm font-medium text-red-600 hover:text-red-800">
                                Remove
                              </button>
                            </div>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Footer */}
                <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                  <div className="flex justify-between text-base font-medium text-gray-900">
                    <p>Subtotal</p>
                    <p>${subtotal.toFixed(2)}</p>
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostMardem;
