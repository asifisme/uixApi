import { Heart, ShoppingCart } from "lucide-react";



const ProductGridViews = () => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6 bg-gray-50">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <h2 className="text-gray-700 font-semibold px-4 pt-2 text-sm">
            Laptops
          </h2>
          <img
            src="https://placehold.co/300x200"
            alt="Tablet White EliteBook"
            className="w-full h-auto object-contain p-4"
          />
          <div className="p-4">
            <h3 className="text-sm font-semibold text-gray-800 mb-2">
              Tablet White EliteBook
              <br />
              Revolve 810 G2
            </h3>
            <div className="flex items-center mb-2">
              <span className="text-gray-500 line-through mr-2">$2 299,00</span>
              <span className="text-green-600 font-bold text-lg">
                $1 999,00
              </span>
              <div className="bg-yellow-300 text-white text-xs font-bold py-0.5 px-1.5 rounded-sm ml-2">
                <ShoppingCart className="h-3 w-3 inline-block mr-0.5" />
              </div>
            </div>
            <div className="flex justify-start mt-2 text-xs text-gray-600">
              <button className="flex items-center mr-4 hover:text-blue-500">
                <input type="checkbox" className="mr-1" /> Compare
              </button>
              <button className="flex items-center hover:text-red-500">
                <Heart className="h-4 w-4 mr-1" /> Add to Wishlist
              </button>
            </div>
          </div>
        </div>
      </div>
    );
}

export default ProductGridViews;
