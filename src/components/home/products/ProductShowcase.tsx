import { ShoppingCart } from "lucide-react";

const ProductShowcase = () => {
  return (
    <div className="bg-gray-50 py-6">
      <div className="container mx-auto">
        {/* Navigation Bar */}
        <nav className="bg-white shadow-md rounded-md p-4 mb-6">
          <ul className="flex space-x-6 text-sm text-gray-700">
            <li className="font-semibold text-blue-500">Best Deals</li>
            <li>TV & Video</li>
            <li>Cameras</li>
            <li>Audio</li>
            <li>Cell Phones</li>
            <li>GPS & Navi</li>
            <li>Computers</li>
            <li>Portable Audio</li>
            <li>Accessoriess</li>
            <li>Laptops</li>
          </ul>
        </nav>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Smartwatches */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-4">
              <h2 className="text-sm font-semibold text-gray-700 mb-1">
                Smartwatches
              </h2>
              <h3 className="text-sm text-blue-500 font-semibold">
                Smartwatch 2.0 LTE Wifi
              </h3>
            </div>
            <img
              src="https://placehold.co/150x150"
              alt="Smartwatch"
              className="w-full h-auto object-contain p-4"
            />
            <div className="p-4 flex items-center justify-between">
              <p className="text-gray-800 font-bold">$399,00</p>
              <button className="text-gray-400 hover:text-blue-500">
                <ShoppingCart className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* TVs */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden col-span-2">
            <div className="p-4">
              <h2 className="text-sm font-semibold text-gray-700 mb-1">TVs</h2>
              <h3 className="text-sm text-blue-500 font-semibold">
                Widescreen 4K SUHD TV
              </h3>
            </div>
            <img
              src="https://placehold.co/400x250"
              alt="Widescreen TV"
              className="w-full h-auto object-contain p-4"
            />
            <div className="p-4 flex items-center justify-between">
              <div>
                <p className="text-gray-800 font-bold text-lg">$2 999,00</p>
                <p className="text-gray-500 line-through text-sm">$3 299,00</p>
              </div>
              <button className="bg-yellow-400 text-white font-semibold rounded-md py-2 px-4 hover:bg-yellow-500">
                Add to Cart
              </button>
            </div>
          </div>

          {/* Tablets */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-4">
              <h2 className="text-sm font-semibold text-gray-700 mb-1">
                Tablets
              </h2>
              <h3 className="text-sm text-blue-500 font-semibold">
                Galaxy Tablet S2 Wifi 62GB LTE Internet
              </h3>
            </div>
            <img
              src="https://placehold.co/150x150"
              alt="Galaxy Tablet"
              className="w-full h-auto object-contain p-4"
            />
            <div className="p-4 flex items-center justify-between">
              <p className="text-gray-800 font-bold">$428,00</p>
              <button className="text-gray-400 hover:text-blue-500">
                <ShoppingCart className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Computer Components */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-4">
              <h2 className="text-sm font-semibold text-gray-700 mb-1">
                Computer Components
              </h2>
              <h3 className="text-sm text-blue-500 font-semibold">
                Nerecool ENS2377 Dead Silence Gaming Cube Case
              </h3>
            </div>
            <img
              src="https://placehold.co/150x150"
              alt="Gaming Cube Case"
              className="w-full h-auto object-contain p-4"
            />
            <div className="p-4 flex items-center justify-between">
              <p className="text-gray-800 font-bold">$180,00</p>
              <button className="text-gray-400 hover:text-blue-500">
                <ShoppingCart className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Cameras */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-4">
              <h2 className="text-sm font-semibold text-gray-700 mb-1">
                Cameras
              </h2>
              <h3 className="text-sm text-blue-500 font-semibold">
                Camera C430w 4k with Waterproof cover
              </h3>
            </div>
            <img
              src="https://placehold.co/150x150"
              alt="Waterproof Camera"
              className="w-full h-auto object-contain p-4"
            />
            <div className="p-4 flex items-center justify-between">
              <p className="text-gray-800 font-bold">$782,00</p>
              <button className="text-gray-400 hover:text-blue-500">
                <ShoppingCart className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-6">
          <div className="flex items-center space-x-2">
            <button className="bg-gray-300 text-gray-700 rounded-full w-3 h-3"></button>
            <button className="bg-yellow-400 text-white rounded-full w-3 h-3"></button>
            <button className="bg-gray-300 text-gray-700 rounded-full w-3 h-3"></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductShowcase;
