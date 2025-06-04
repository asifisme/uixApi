import { CarIcon, Eye, Heart, ShoppingCart, Star } from "lucide-react";
import { IoPricetag } from "react-icons/io5";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface ProductImage {
  id: number;
  product: number;
  product_image: string;
  is_primary: boolean;
  alt_text: string;
}

/**
 * Props interface for the SpecialOffers component
 * @interface SpecialOffersProps
 * @property {object} views - Product view data object
 * @property {string} views.name - Name of the product
 * @property {string} views.title - Title of the product
 * @property {string} views.description - Description of the product
 * @property {string} views.price - Price of the product as a string
 * @property {number} views.stock - Available stock quantity
 * @property {string} views.uid - Unique identifier for the product
 * @property {string} views.slug - URL-friendly version of the product name
 * @property {ProductImage[]} views.images - Array of product images
 * @property {function} handleAddItem - Function to handle adding items to cart
 * @param {string} handleAddItem.uid - Product unique identifier
 * @param {number} handleAddItem.quantity - Quantity to add
 * @returns {Promise<void> | void} Returns either a Promise or void
 */
interface SpecialOffersProps {
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
  handleAddItem: (uid: string, quantity: number) => Promise<void> | void;
}

const ProductViews = ({ views, handleAddItem }: SpecialOffersProps) => {
  return (
    <section>
      <div className="bg-white rounded-lg shadow-md p-4 relative">
        <Link to={`/product/${views.slug}`}>
          <div className="absolute top-4 left-4 bg-yellow-400 text-white text-sm font-bold py-1 px-2 rounded-full">
            Special Offer
          </div>
          <div className="absolute top-4 right-4 bg-yellow-500 text-white text-xs font-bold py-0.5 px-1.5 rounded-sm">
            Save <span className="ml-0.5">$120</span>
          </div>
          <img
            src={
              views.images &&
              views.images.length > 0 &&
              views.images[0]?.product_image
                ? views.images[0].product_image
                : "https://placehold.co/300x200"
            }
            alt={views.name}
            className="h-96 w-full  p-4"
          />
        </Link>
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
              className="bg-blue-500 font-bold  px-10  cursor-pointer "
              onClick={() => handleAddItem(views.uid, 1)}
            >
              <ShoppingCart className="-ms-2 me-2 h-5 w-5 " />
              Add to cart
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductViews;
