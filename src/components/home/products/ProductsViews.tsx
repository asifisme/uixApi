import { Button } from "@/components/ui/button";
import { useCartContext } from "@/context/CartContext";
import { Link } from "react-router-dom";

interface SpecialOffersProps {
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

const ProductViews = ({ views }: SpecialOffersProps) => {
  const { addToCart } = useCartContext();

  const handleBuyNow = () => {
    addToCart({
      uid: views.uid,
      name: views.name,
      title: views.title,
      price: views.price,
      images: views.images[0]?.image, 
    });
  };

  return (
    <section>
      <div className="bg-white rounded-lg shadow-md overflow-hidden relative">
        <Link to={`/product/${views.slug}`}>
          <div className="absolute top-4 left-4 bg-yellow-400 text-white text-sm font-bold py-1 px-2 rounded-full">
            Special Offer
          </div>
          <div className="absolute top-4 right-4 bg-yellow-500 text-white text-xs font-bold py-0.5 px-1.5 rounded-sm">
            Save <span className="ml-0.5">$120</span>
          </div>
          <img
            src={views.images[0]?.image || "https://placehold.co/300x200"}
            alt={views.name}
            className="h-96 w-full  p-4"
          />
        </Link>
        <div className="p-4">
          <Link to={`/product/${views.slug}/`}>
            <h3 className="text-sm font-semibold text-blue-500 mb-1">
              {views.name}
            </h3>
            <p className="text-xs text-gray-500 mb-1">{views.title}</p>
          </Link>

          <div className="flex justify-between mb-2">
            <div className="mt-1">
              <span className="text-gray-500 line-through mr-2">$99.00</span>
            </div>
            <div>
              <h1 className="text-red-600 font-bold text-xl ">
                ${views.price}
              </h1>
            </div>
            <div>
              <Button
                onClick={handleBuyNow}
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

export default ProductViews;
