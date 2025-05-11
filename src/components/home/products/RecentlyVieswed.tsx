import { Heart, ShoppingCart } from "lucide-react";

const RecentlyViewed = () => {
  return (
    <div className="bg-gray-50 py-6">
      <div className="container mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-gray-800">
            Recently Viewed
          </h2>
          <button className="text-gray-500 hover:text-gray-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path
                fillRule="evenodd"
                d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 5.29a.75.75 0 011.04-1.08l4.5 4.5a.75.75 0 010 1.06l-4.5 4.5a.75.75 0 01-1.06-.02z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>

        {/* Product Carousel */}
        <div className="relative">
          <div className="overflow-x-auto scroll-smooth">
            <div className="flex space-x-6 pb-4">
              {/* Game Console */}
              <div className="bg-white rounded-lg shadow-md w-64 flex-shrink-0">
                <div className="p-4">
                  <h3 className="text-sm text-gray-700 mb-0.5">
                    Game Consoles
                  </h3>
                  <h2 className="text-sm font-semibold text-blue-500">
                    GameConsole Destiny Special Edition
                  </h2>
                </div>
                <img
                  src="https://placehold.co/150x150"
                  alt="Game Console"
                  className="w-full h-auto object-contain p-4"
                />
                <div className="p-4 flex items-center justify-between">
                  <p className="text-gray-800 font-bold">$789,00</p>
                  <button className="text-gray-400 hover:text-blue-500">
                    <ShoppingCart className="h-5 w-5" />
                  </button>
                </div>
              </div>

              {/* Powerbank */}
              <div className="bg-white rounded-lg shadow-md w-64 flex-shrink-0">
                <div className="p-4">
                  <h3 className="text-sm text-gray-700 mb-0.5">Accesories</h3>
                  <h2 className="text-sm font-semibold text-blue-500">
                    Powerbank 1130 mAh Blue
                  </h2>
                </div>
                <img
                  src="https://placehold.co/150x150"
                  alt="Powerbank"
                  className="w-full h-auto object-contain p-4"
                />
                <div className="p-4">
                  <p className="text-gray-800 font-bold">$103,00</p>
                  <div className="flex items-center text-sm text-gray-600 mt-2">
                    <button className="flex items-center mr-4 hover:text-blue-500">
                      <input type="checkbox" className="mr-1" /> Compare
                    </button>
                    <button className="flex items-center hover:text-red-500">
                      <Heart className="h-4 w-4 mr-1" /> Wishlist
                    </button>
                  </div>
                </div>
              </div>

              {/* Laptop */}
              <div className="bg-white rounded-lg shadow-md w-64 flex-shrink-0">
                <div className="p-4">
                  <h3 className="text-sm text-gray-700 mb-0.5">Laptops</h3>
                  <h2 className="text-sm font-semibold text-blue-500">
                    Laptop Yoga 500 15.6" 6200U 8GB
                  </h2>
                </div>
                <img
                  src="https://placehold.co/150x150"
                  alt="Laptop Yoga"
                  className="w-full h-auto object-contain p-4"
                />
                <div className="p-4 flex items-center justify-between">
                  <p className="text-gray-800 font-bold">$1 999,00</p>
                  <button className="text-gray-400 hover:text-blue-500">
                    <ShoppingCart className="h-5 w-5" />
                  </button>
                </div>
              </div>

              {/* Smartphone */}
              <div className="bg-white rounded-lg shadow-md w-64 flex-shrink-0">
                <div className="p-4">
                  <h3 className="text-sm text-gray-700 mb-0.5">Smart Phones</h3>
                  <h2 className="text-sm font-semibold text-blue-500">
                    Smartphone 6S 32GB LTE
                  </h2>
                </div>
                <img
                  src="https://placehold.co/150x150"
                  alt="Smartphone 6S"
                  className="w-full h-auto object-contain p-4"
                />
                <div className="p-4 flex items-center justify-between">
                  <p className="text-gray-800 font-bold">$1 300,00</p>
                  <button className="text-gray-400 hover:text-blue-500">
                    <ShoppingCart className="h-5 w-5" />
                  </button>
                </div>
              </div>

              {/* Smartwatch */}
              <div className="bg-white rounded-lg shadow-md w-64 flex-shrink-0">
                <div className="p-4">
                  <h3 className="text-sm text-gray-700 mb-0.5">Smartwatches</h3>
                  <h2 className="text-sm font-semibold text-blue-500">
                    Smartwatch 2.0 LTE Wifi
                  </h2>
                </div>
                <img
                  src="https://placehold.co/150x150"
                  alt="Smartwatch 2.0"
                  className="w-full h-auto object-contain p-4"
                />
                <div className="p-4">
                  <p className="text-red-600 font-bold text-lg">$129,00</p>
                  <p className="text-gray-500 line-through text-sm">$249,00</p>
                  <div className="flex justify-end mt-2">
                    <button className="text-yellow-400 hover:text-yellow-500">
                      <ShoppingCart className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Camera */}
              <div className="bg-white rounded-lg shadow-md w-64 flex-shrink-0">
                <div className="p-4">
                  <h3 className="text-sm text-gray-700 mb-0.5">Cameras</h3>
                  <h2 className="text-sm font-semibold text-blue-500">
                    Camera C430w 4K Waterproof
                  </h2>
                </div>
                <img
                  src="https://placehold.co/150x150"
                  alt="Camera 4K"
                  className="w-full h-auto object-contain p-4"
                />
                <div className="p-4 flex items-center justify-between">
                  <p className="text-gray-800 font-bold">$590,00</p>
                  <button className="text-gray-400 hover:text-blue-500">
                    <ShoppingCart className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* Pagination Dots */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mt-4">
            <div className="flex items-center space-x-2">
              <button className="bg-yellow-400 text-white rounded-full w-3 h-3"></button>
              <button className="bg-gray-300 text-gray-700 rounded-full w-3 h-3"></button>
              <button className="bg-gray-300 text-gray-700 rounded-full w-3 h-3"></button>
            </div>
          </div>
        </div>

        {/* Brands Section */}
        <div className="mt-8 py-4 border-t border-gray-200">
          <div className="relative flex items-center justify-between">
            <button className="text-gray-500 hover:text-gray-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path
                  fillRule="evenodd"
                  d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.69a.75.75 0 01-1.04 1.08l-4.5-4.5a.75.75 0 010-1.06l4.5-4.5a.75.75 0 011.06.02z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <div className="overflow-x-auto scroll-smooth">
              <div className="flex items-center space-x-8 py-2">
                <img
                  src="https://placehold.co/80x30/cccccc?Text=YOKO"
                  alt="YOKO"
                  className="h-8 object-contain"
                />
                <img
                  src="https://placehold.co/80x30/dddddd?Text=KINOVA"
                  alt="KINOVA"
                  className="h-8 object-contain"
                />
                <img
                  src="https://placehold.co/80x30/eeeeee?Text=SPEEDWAY"
                  alt="SPEEDWAY"
                  className="h-8 object-contain"
                />
                <img
                  src="https://placehold.co/80x30/f0f0f0?Text=CONNECT"
                  alt="CONNECT"
                  className="h-8 object-contain"
                />
                <img
                  src="https://placehold.co/80x30/fafafa?Text=GALAXY"
                  alt="GALAXY"
                  className="h-8 object-contain"
                />
              </div>
            </div>
            <button className="text-gray-500 hover:text-gray-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path
                  fillRule="evenodd"
                  d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 5.29a.75.75 0 011.04-1.08l4.5 4.5a.75.75 0 010 1.06l-4.5 4.5a.75.75 0 01-1.06-.02z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentlyViewed;
