import type { AppDispatch, RootState } from "@/app/store";
import { Button } from "@/components/ui/button";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { CarIcon, Eye, Heart, ShoppingCart, Star } from "lucide-react";
import { IoPricetag } from "react-icons/io5";
import { createCart } from "@/features/cart/cartThunks";


/**
 * Represents an image associated with a product.
 * @interface ProductImage
 * @property {number} id - The unique identifier for the product image.
 * @property {number} product - The identifier of the product this image belongs to.
 * @property {number} author - The identifier of the author who uploaded the image (Future implementation).
 * @property {string} product_image - The URL or path to the product image.
 * @property {boolean} is_primary - Indicates if this is the main/primary image for the product.
 * @property {string} alt_text - Alternative text description of the image for accessibility.
 */

interface ProductImage {
  id: number;
  product: number;
  author: number; // TODO for fute update and need to show
  product_image: string;
  is_primary: boolean;
  alt_text: string;
}

/**
 * Interface representing the props for a new product view component.
 * @interface
 * @property {Object} views - The product view data object
 * @property {string} views.name - The name of the product
 * @property {string} views.title - The title/headline for the product
 * @property {string} views.description - The detailed description of the product
 * @property {string} views.price - The price of the product
 * @property {number} views.stock - The available stock quantity
 * @property {string} views.uid - Unique identifier for the product
 * @property {string} views.slug - URL-friendly version of the product name
 * @property {ProductImage[]} views.images - Array of product images
 */

interface newProductgProps {
  views: {
    name: string;
    title: string;
    description: string;
    price: string;
    stock: number;
    uid: string;
    slug: string;
    images: ProductImage[];
  };
}

const NewArrivalProductViews = ({ views }: newProductgProps) => {
  const dispatch = useDispatch<AppDispatch>();
  const { data } = useSelector((state: RootState) => state.cart);
  /**
   * Handles the creation of a new cart.
   * If a cart already exists (data is not empty), the function returns without action.
   * Otherwise, it dispatches a createCart action.
   * @function
   * @returns {void}  
   */
  const handleCreateCart = () => {
    if (data && Object.keys(data).length > 0) {
      // alert("Have Already...");
      return;
    }

    dispatch(createCart());
  };

  return (
    <section>
      <div className="rounded-lg border border-gray-200 bg-[#fafaf9]   p-3 shadow-sm">
        <div className="h-56 w-full">
          <h1 className="text-right mb-1">New</h1>
          <Link to={`/product/${views.slug}/`}>
            <img
              className="mx-auto h-full dark:hidden"
              src={
                views.images &&
                views.images.length > 0 &&
                views.images[0]?.product_image
                  ? views.images[0].product_image
                  : "https://placehrold.co/300x200"
              }
              alt={views.name}
            />
          </Link>
        </div>
        <div className="pt-6 ">
          <div className="mb-4 flex items-center justify-between gap-4">
            <span className="me-2 rounded bg-primary-100 px-2.5 py-0.5 text-xs font-medium text-primary-800 ">
              {" "}
              Up to 35% off{" "}
            </span>

            <div className="flex items-center justify-end gap-1">
              <button
                type="button"
                className="rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900"
              >
                <Eye className="h-5 w-5" />
              </button>

              <button
                type="button"
                className="rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900"
              >
                <Heart className="h-5 w-5" />
              </button>
            </div>
          </div>
          <Link
            to={`/product/${views.slug}/`}
            className="text-lg font-semibold leading-tight  hover:underline d"
          >
            {views.name}
          </Link>
          <div className="mt-2 flex items-center gap-2">
            <div className="flex items-center">
              <Star className="h-4 w-4 text-yellow-400" />
              <Star className="h-4 w-4 text-yellow-400" />
              <Star className="h-4 w-4 text-yellow-400" />
            </div>

            <p className="text-sm font-medium text-gray-900 dark:text-white">
              5.0
            </p>
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
              (455)
            </p>
          </div>

          <ul className="mt-2 flex items-center gap-4">
            <li className="flex items-center gap-2">
              <CarIcon className="h-4 w-4  " />
              <p className="text-sm font-medium  dark:text-gray-400">
                Fast Delivery
              </p>
            </li>

            <li className="flex items-center gap-2">
              <IoPricetag className="h-4 w-4  dark:text-gray-400" />
              <p className="text-sm font-medium  dark:text-gray-400">
                Best Price
              </p>
            </li>
          </ul>

          <div className="mt-4 flex items-center justify-between gap-4">
            <p className="text-2xl font-extrabold leading-tight  dark:text-white">
              {views.price}
            </p>

            <Button
              className="bg-blue-500 font-bold  px-10 "
              onClick={handleCreateCart}
            >
              <ShoppingCart className="-ms-2 me-2 h-5 w-5" />
              Add to cart
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewArrivalProductViews;
