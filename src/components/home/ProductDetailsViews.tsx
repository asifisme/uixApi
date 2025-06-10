import type { AppDispatch, RootState } from "@/app/store";
import { createCart } from "@/features/cart/cartThunks";
import {
  createCartItem,
  fetchCartItems,
} from "@/features/cart/item/cartItemSlice";
import { toggleCart } from "@/features/nav/navSlice";
import { useDispatch, useSelector } from "react-redux";

interface ProductImage {
  id: number;
  product: number;
  author: number;
  product_image: string;
  is_primary: boolean;
  alt_text: string;
}

interface ProductProps {
  views: {
    id: number;
    images: ProductImage[];
    name: string;
    title: string;
    slug: string;
    description: string;
    weight: number;
    sku: string;
    price: number;
    stock: number;
    discount_percent: number;
    warranty_information: string;
    shipping_information: string;
    return_policy: string;
    min_order_quantity: number;
    unq_num: string;
    pro_uuid: string;
    is_available: boolean;
    is_approved: boolean;
    rating: number;
    views_count: number;
    sold_count: number;
    uid: string;
    category: number;
    author: number;
    meta_tag: number[];
  };
  isLoading: boolean;
  fetchError: string | null;
}

const ProductDetailsViews = ({ views }: ProductProps) => {
  const dispatch = useDispatch<AppDispatch>();
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
    dispatch(toggleCart());
  };
  return (
    <div className="container mx-auto p-4 md:p-8 font-sans">
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="w-full lg:w-2/5 flex flex-col items-center">
          <div className="w-full max-w-lg overflow-hidden rounded-lg shadow-md">
            <img
              src={
                views.images && views.images.length > 0
                  ? views.images[0].product_image
                  : "https://placehold.co/600x400?text=Product+Image"
              }
              alt={views.name}
              className="w-full h-auto object-cover"
            />
          </div>
          {views.images && views.images.length > 1 && (
            <div className="flex mt-4 gap-2 overflow-x-auto justify-center">
              {views.images.map((img, index) => (
                <div
                  key={index}
                  className="w-20 h-20 flex-shrink-0 border rounded-md overflow-hidden cursor-pointer hover:border-blue-500"
                >
                  <img
                    src={img.product_image}
                    alt={`${views.name} thumbnail ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="w-full lg:w-2/5 pr-0 lg:pr-8">
          <h1 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-2">
            {views.name}
          </h1>

          <div className="flex items-center mb-4">
            {views.rating && (
              <div className="flex items-center text-sm text-yellow-500">
                {"★".repeat(Math.floor(views.rating))}
                {"☆".repeat(5 - Math.floor(views.rating))}
                <span className="ml-1 text-gray-600">
                  {views.rating} out of 5
                </span>
              </div>
            )}
            {views.sold_count && (
              <span className="ml-4 text-sm text-blue-600 hover:text-blue-700 cursor-pointer">
                {views.sold_count.toLocaleString()} ratings
              </span>
            )}
          </div>

          <div className="border-t border-b border-gray-200 py-4 mb-4">
            {views.discount_percent > 0 && (
              <p className="text-xl text-red-600 mb-1">
                -{views.discount_percent}%{" "}
                <span className="font-bold text-gray-900 text-3xl ml-2">
                  $
                  {(
                    views.price -
                    (views.price * views.discount_percent) / 100
                  ).toFixed(2)}
                </span>
              </p>
            )}
            <p
              className={`text-3xl font-bold ${
                views.discount_percent > 0
                  ? "line-through text-gray-500"
                  : "text-gray-900"
              }`}
            >
              ${views.price}
            </p>
            {/* List Price */}
            {views.discount_percent > 0 && (
              <p className="text-sm text-gray-500 mt-1">
                List Price: <span className="line-through">${views.price}</span>
              </p>
            )}
            <p className="text-sm text-gray-600 mt-2">
              <span className="font-medium">Shipping Info:</span>{" "}
              {views.shipping_information || "Calculated at checkout"}
            </p>
          </div>

          <h2 className="text-lg font-semibold text-gray-800 mb-2">
            About this item
          </h2>
          <p className="text-gray-700 text-sm leading-relaxed mb-4">
            {views.description}
          </p>

          <div className="text-sm text-gray-700 mb-4">
            <div className="flex mb-1">
              <span className="w-28 font-medium">Color:</span>
              <span>Black</span>
            </div>
            <div className="flex mb-1">
              <span className="w-28 font-medium">Material:</span>
              <span>Stainless Steel</span>
            </div>
            <div className="flex mb-1">
              <span className="w-28 font-medium">Specific Uses:</span>
              <span>{views.category || "N/A"}</span>{" "}
            </div>
            <div className="flex"></div>
          </div>
        </div>

        <div className="w-full lg:w-1/5">
          <div className="border border-gray-300 rounded-lg p-4 shadow-sm">
            <p className="text-3xl font-bold text-gray-900 mb-2">
              $
              {(
                views.price -
                (views.price * views.discount_percent) / 100
              ).toFixed(2)}
            </p>
            <p className="text-sm text-gray-600 mb-2">
              <span className="font-medium">Deliver to Bangladesh</span>
            </p>

            <p
              className={`text-lg font-bold mb-3 ${
                views.is_available && views.stock > 0
                  ? "text-green-700"
                  : "text-red-700"
              }`}
            >
              {views.is_available && views.stock > 0
                ? "In Stock"
                : "Out of Stock"}
            </p>

            {views.is_available && views.stock > 0 && (
              <>
                <button
                  onClick={() => handleAddItem(views.uid, 1)}
                  className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold py-2 px-4 rounded-full mb-2 shadow"
                >
                  Add to Cart
                </button>
              </>
            )}

            <div className="mt-4 text-sm text-gray-700">
              <p className="mb-1">
                <span className="font-medium">Ships from:</span> TUYU STORE
              </p>
              <p className="mb-1">
                <span className="font-medium">Sold by:</span> TUYU STORE
              </p>
              <p className="mt-2">
                <span className="font-medium">Return Policy:</span>{" "}
                {views.return_policy || "30-day return/replacement"}
              </p>
            </div>

            <div className="mt-4 pt-4 border-t border-gray-200">
              <button className="w-full border border-gray-300 text-blue-700 hover:bg-gray-50 font-semibold py-2 px-4 rounded-md text-sm">
                Add to List
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsViews;
