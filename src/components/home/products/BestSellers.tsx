import { Heart, ShoppingCart } from "lucide-react";

const Bestsellers = () => {
  return (
    <div className="bg-gray-50 py-6">
      <div className="container mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-gray-800">Bestsellers</h2>
          <nav className="text-sm text-gray-700">
            <ul className="flex space-x-4">
              <li className="bg-yellow-400 text-white font-semibold py-2 px-4 rounded-full">
                Top 20
              </li>
              <li>Phones & Tablets</li>
              <li>Laptops & Computers</li>
              <li>Video Cameras</li>
            </ul>
          </nav>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Tablet */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-4">
              <h3 className="text-sm text-gray-700 mb-0.5">Tablets</h3>
              <h2 className="text-sm font-semibold text-blue-500">
                Tablet Air 3 Wifi 64GB Gold
              </h2>
            </div>
            <img
              src="https://placehold.co/150x150"
              alt="Tablet Air 3"
              className="w-full h-auto object-contain p-4"
            />
            <div className="p-4 flex items-center justify-between">
              <p className="text-gray-800 font-bold">$629,00</p>
              <button className="text-gray-400 hover:text-blue-500">
                <ShoppingCart className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Laptop */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-4">
              <h3 className="text-sm text-gray-700 mb-0.5">
                Laptops & Computers
              </h3>
              <h2 className="text-sm font-semibold text-blue-500">
                Tablet White EliteBook Revolve 810 G2
              </h2>
            </div>
            <img
              src="https://placehold.co/150x150"
              alt="Tablet EliteBook"
              className="w-full h-auto object-contain p-4"
            />
            <div className="p-4 flex items-center justify-between">
              <p className="text-gray-800 font-bold">$1 299,00</p>
              <button className="text-gray-400 hover:text-blue-500">
                <ShoppingCart className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Pendrive */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-4">
              <h3 className="text-sm text-gray-700 mb-0.5">Accesories</h3>
              <h2 className="text-sm font-semibold text-blue-500">
                Pendrive USB 3.0 Flash 64 GB
              </h2>
            </div>
            <img
              src="https://placehold.co/150x150"
              alt="Pendrive"
              className="w-full h-auto object-contain p-4"
            />
            <div className="p-4 flex items-center justify-between">
              <p className="text-gray-800 font-bold">$110,00</p>
              <button className="text-gray-400 hover:text-blue-500">
                <ShoppingCart className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Smartwatch */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden relative">
            {/* Image Carousel (Simplified) */}
            <div className="relative">
              <img
                src="https://placehold.co/150x150"
                alt="Smartwatch 2.0"
                className="w-full h-auto object-contain p-4"
              />
              <div className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-200 rounded-full p-1 text-gray-600 cursor-pointer">
                &lt;
              </div>
              <div className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-200 rounded-full p-1 text-gray-600 cursor-pointer">
                &gt;
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-sm text-gray-700 mb-0.5">Smartwatches</h3>
              <h2 className="text-sm font-semibold text-blue-500">
                Smartwatch 2.0 LTE Wifi
              </h2>
              <div className="flex items-center mb-2">
                <p className="text-red-600 font-bold text-lg mr-2">$129,00</p>
                <p className="text-gray-500 line-through">$449,00</p>
              </div>
              {/* Thumbnail Images (Simplified) */}
              <div className="flex space-x-2 mb-2">
                <img
                  src="https://placehold.co/30x30/cccccc"
                  alt="Thumbnail 1"
                  className="rounded-sm cursor-pointer"
                />
                <img
                  src="https://placehold.co/30x30/dddddd"
                  alt="Thumbnail 2"
                  className="rounded-sm cursor-pointer"
                />
                <img
                  src="https://placehold.co/30x30/eeeeee"
                  alt="Thumbnail 3"
                  className="rounded-sm cursor-pointer"
                />
              </div>
              <div className="flex items-center justify-between text-sm text-gray-600">
                <button className="flex items-center hover:text-blue-500">
                  <input type="checkbox" className="mr-1" /> Compare
                </button>
                <button className="flex items-center hover:text-red-500">
                  <Heart className="h-4 w-4 mr-1" /> Wishlist
                </button>
                <button className="text-yellow-400 hover:text-yellow-500">
                  <ShoppingCart className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>

          {/* VR Headset */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-4">
              <h3 className="text-sm text-gray-700 mb-0.5">Gadgets</h3>
              <h2 className="text-sm font-semibold text-blue-500">
                Gear Virtual Reality
              </h2>
            </div>
            <img
              src="https://placehold.co/150x150"
              alt="VR Headset"
              className="w-full h-auto object-contain p-4"
            />
            <div className="p-4 flex items-center justify-between">
              <p className="text-gray-800 font-bold">$799,00</p>
              <button className="text-gray-400 hover:text-blue-500">
                <ShoppingCart className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* External SSD */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-4">
              <h3 className="text-sm text-gray-700 mb-0.5">Gadgets</h3>
              <h2 className="text-sm font-semibold text-blue-500">
                External SSD USB 3.1 750 GB
              </h2>
            </div>
            <img
              src="https://placehold.co/150x150"
              alt="External SSD"
              className="w-full h-auto object-contain p-4"
            />
            <div className="p-4 flex items-center justify-between">
              <p className="text-gray-800 font-bold">$385,00</p>
              <button className="text-gray-400 hover:text-blue-500">
                <ShoppingCart className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-6">
          <div className="flex items-center space-x-2">
            <button className="bg-yellow-400 text-white rounded-full w-3 h-3"></button>
            <button className="bg-gray-300 text-gray-700 rounded-full w-3 h-3"></button>
            <button className="bg-gray-300 text-gray-700 rounded-full w-3 h-3"></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bestsellers;
