import type { AppDispatch } from "@/app/store";
import { Button } from "@/components/ui/button";
import { addToCart } from "@/features/cart/cartSlice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

interface newProductgProps {
  views: {
    name: string;
    title: string;
    desc: string;
    price: string;
    stock: number;
    uid: string;
    slug: string;
    images: { image: string }[];
  };
}

const NewArrivalProductViews = ({ views }: newProductgProps) => {
  const dispatch = useDispatch<AppDispatch>();

  const handleAddtoCart = () => {
    dispatch(
      addToCart({
        uid: views.uid,
        name: views.name,
        title: views.title,
        price: views.price,
        images: views.images,
      })
    );
  };

  return (
    <section>
      <div className=" bg-white rounded-lg  overflow-hidden relative">
        <Link to={`/product/${views.slug}/`}>
          <div className="absolute right-6 mt-5 rounded-2xl  bg-orange-800 px-3">
            <h2 className="">New</h2>
          </div>
          <div>
            <img
              src={
                views.images[0]?.image
                  ? views.images[0]?.image
                  : "https://placehold.co/300x200"
              }
              alt={views.name}
              className="h-96 w-full p-4 "
            />
          </div>
        </Link>
        {/* */}
        <div className="p-4">
          <Link to={`/product/${views.slug}/`}>
            <h3 className="text-sm font-semibold text-blue-500 mb-1">
              {views.name}
            </h3>
            <p className="text-xs text-gray-500 mb-1">{views.title}</p>
          </Link>

          <div className="flex justify-between mb-2">
            <div className="mt-1">
              <ul className="flex gap-3">
                <li>
                  {" "}
                  <span className="text-gray-500 line-through mr-2">
                    $99.00
                  </span>
                </li>
                <li>
                  <h1 className="text-red-600 font-bold text-xl ">
                    ${views.price}
                  </h1>
                </li>
              </ul>
            </div>
            <div>
              <Button
                onClick={handleAddtoCart}
                className="bg-blue-500 font-bold  px-10"
              >
                Buy Now
              </Button>
            </div>
          </div>
          <div className="flex justify-between text-xs text-gray-600 mb-2">
            <span>Available: {views.stock}</span>
            <span>Already Sold: {50 - views.stock}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewArrivalProductViews;
