import { Heart, ShoppingCart } from "lucide-react";

const ProductGridA = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6 bg-gray-50">
      {/* Special Offer Section */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden relative">
        <div className="absolute top-4 left-4 bg-yellow-400 text-white text-sm font-bold py-1 px-2 rounded-full">
          Special Offer
        </div>
        <div className="absolute top-4 right-4 bg-yellow-500 text-white text-xs font-bold py-0.5 px-1.5 rounded-sm">
          Save
          <span className="ml-0.5">$120</span>
        </div>
        <img
          src="https://placehold.co/300x200"
          alt="Game Controller"
          className="w-full h-auto object-contain p-4"
        />
        <div className="p-4">
          <h3 className="text-sm font-semibold text-blue-500 mb-1">
            Game Console Controller
            <br />+ USB 3.0 Cable
          </h3>
          <div className="flex items-center mb-2">
            <span className="text-gray-500 line-through mr-2">$99.00</span>
            <span className="text-red-600 font-bold text-xl">$79.00</span>
          </div>
          <div className="flex justify-between text-xs text-gray-600 mb-2">
            <span>Available: 6</span>
            <span>Already Sold: 28</span>
          </div>
          <div className="bg-yellow-100 rounded-md p-2 text-xs text-gray-700">
            <p className="font-semibold">Hurry Up! Offer ends in:</p>
            <div className="flex gap-1 mt-1">
              <div className="bg-yellow-200 rounded-sm p-1">
                <span className="font-bold">08</span>{" "}
                <span className="text-xxs">HOURS</span>
              </div>
              <span className="font-bold">:</span>
              <div className="bg-yellow-200 rounded-sm p-1">
                <span className="font-bold">19</span>{" "}
                <span className="text-xxs">MINS</span>
              </div>
              <span className="font-bold">:</span>
              <div className="bg-yellow-200 rounded-sm p-1">
                <span className="font-bold">54</span>{" "}
                <span className="text-xxs">SECS</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Speakers Section */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <h2 className="text-gray-700 font-semibold px-4 pt-4 text-sm">
          Speakers
        </h2>
        <img
          src="https://placehold.co/200x150"
          alt="Wireless Speaker"
          className="w-full h-auto object-contain p-4"
        />
        <div className="p-4">
          <h3 className="text-sm font-semibold text-gray-800 mb-2">
            Wireless Audio System Multiroom 360
          </h3>
          <p className="text-gray-600 font-bold text-lg">$685,00</p>
          <div className="flex justify-end mt-2">
            <button className="text-gray-400 hover:text-red-500">
              <Heart className="h-5 w-5" />
            </button>
            <button className="ml-4 text-gray-400 hover:text-blue-500">
              <ShoppingCart className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Laptops Section */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="flex justify-end px-4 pt-2 text-xs text-gray-500">
          <span className="mr-2">Featured</span>
          <span className="mr-2">On Sale</span>
          <span>Top Rated</span>
        </div>
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
            <span className="text-green-600 font-bold text-lg">$1 999,00</span>
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

      {/* Headphones Section */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <h2 className="text-gray-700 font-semibold px-4 pt-4 text-sm">
          Headphones
        </h2>
        <img
          src="https://placehold.co/200x150"
          alt="Purple Solo 2 Wireless"
          className="w-full h-auto object-contain p-4"
        />
        <div className="p-4">
          <h3 className="text-sm font-semibold text-gray-800 mb-2">
            Purple Solo 2 Wireless
          </h3>
          <p className="text-gray-600 font-bold text-lg">$248,99</p>
          <div className="flex justify-end mt-2">
            <button className="text-gray-400 hover:text-red-500">
              <Heart className="h-5 w-5" />
            </button>
            <button className="ml-4 text-gray-400 hover:text-blue-500">
              <ShoppingCart className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Smartphones Section */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <h2 className="text-gray-700 font-semibold px-4 pt-4 text-sm">
          Smartphones
        </h2>
        <img
          src="https://placehold.co/200x150"
          alt="Smartphone 6S 32GB LTE"
          className="w-full h-auto object-contain p-4"
        />
        <div className="p-4">
          <h3 className="text-sm font-semibold text-gray-800 mb-2">
            Smartphone 6S 32GB LTE
          </h3>
          <p className="text-gray-600 font-bold text-lg">$1 215,00</p>
          <div className="flex justify-end mt-2">
            <button className="text-gray-400 hover:text-red-500">
              <Heart className="h-5 w-5" />
            </button>
            <button className="ml-4 text-gray-400 hover:text-blue-500">
              <ShoppingCart className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Cameras Section */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <h2 className="text-gray-700 font-semibold px-4 pt-4 text-sm">
          Cameras
        </h2>
        <img
          src="https://placehold.co/200x150"
          alt="Widescreen NX Mini F1"
          className="w-full h-auto object-contain p-4"
        />
        <div className="p-4">
          <h3 className="text-sm font-semibold text-gray-800 mb-2">
            Widescreen NX Mini F1
            <br />
            SMART NX
          </h3>
          <p className="text-gray-600 font-bold text-lg">$559,00</p>
          <div className="flex justify-end mt-2">
            <button className="text-gray-400 hover:text-red-500">
              <Heart className="h-5 w-5" />
            </button>
            <button className="ml-4 text-gray-400 hover:text-blue-500">
              <ShoppingCart className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Printers Section */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <h2 className="text-gray-700 font-semibold px-4 pt-4 text-sm">
          Printers
        </h2>
        <img
          src="https://placehold.co/200x150"
          alt="Full Color LaserJet Pro"
          className="w-full h-auto object-contain p-4"
        />
        <div className="p-4">
          <h3 className="text-sm font-semibold text-gray-800 mb-2">
            Full Color LaserJet Pro
            <br />
            M452dn
          </h3>
          <p className="text-gray-600 font-bold text-lg">$1 050,00</p>
          <div className="flex justify-end mt-2">
            <button className="text-gray-400 hover:text-red-500">
              <Heart className="h-5 w-5" />
            </button>
            <button className="ml-4 text-gray-400 hover:text-blue-500">
              <ShoppingCart className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductGridA;
