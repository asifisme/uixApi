import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CarIcon, Eye, Heart, ShoppingCart, Star } from "lucide-react";
import { IoPricetag } from "react-icons/io5";



interface ProductImage {
  id: number;
  product: number;
  author: number; // TODO for fute update and need to show
  product_image: string;
  is_primary: boolean;
  alt_text: string;
}



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
  handleAddItem: (uid: string, quantity: number) => Promise<void> | void; 
}

const NewArrivalProductViews = ({ views, handleAddItem }: newProductgProps) => {
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
              className="bg-blue-500 font-bold  px-10 cursor-pointer  "
              onClick={()=>handleAddItem(views.uid, 1)}
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
