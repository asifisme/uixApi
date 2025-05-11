import { Star } from "lucide-react";

const ProductShowcaseTabs = () => {
  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <Star
          key={i}
          fill={i < rating ? "#ffc107" : "none"}
          color="#ffc107"
          size={16}
        />
      );
    }
    return <div className="flex">{stars}</div>;
  };

  return (
    <div className="bg-gray-50 py-6">
      <div className="container mx-auto">
        {/* Tabs */}
        <div className="flex justify-around mb-6">
          <div className="relative">
            <h2 className="text-lg font-semibold text-gray-800">
              Featured Products
            </h2>
            <div className="absolute left-0 bottom-0 w-full h-1 bg-yellow-400"></div>
          </div>
          <div className="relative">
            <h2 className="text-lg font-semibold text-gray-800">
              Onsale Products
            </h2>
            <div className="absolute left-0 bottom-0 w-full h-1 bg-yellow-400"></div>
          </div>
          <div className="relative">
            <h2 className="text-lg font-semibold text-gray-800">
              Top Rated Products
            </h2>
            <div className="absolute left-0 bottom-0 w-full h-1 bg-yellow-400"></div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Featured Products */}
          <div>
            {/* Product 1 */}
            <div className="bg-white rounded-lg shadow-md p-4 flex items-center space-x-4">
              <img
                src="https://placehold.co/80x80"
                alt="Headphones"
                className="w-20 h-20 object-contain"
              />
              <div>
                <h3 className="text-sm font-semibold text-blue-500">
                  Purple Wireless Headphones Solo 2 HD
                </h3>
                <p className="text-gray-800 font-bold">$1149,00</p>
              </div>
            </div>
            {/* Product 2 */}
            <div className="bg-white rounded-lg shadow-md p-4 flex items-center space-x-4 mt-4">
              <img
                src="https://placehold.co/80x80"
                alt="Powerbank"
                className="w-20 h-20 object-contain"
              />
              <div>
                <h3 className="text-sm font-semibold text-blue-500">
                  Powerbank 1130 mAh Blue
                </h3>
                <p className="text-gray-800 font-bold">$210,00</p>
              </div>
            </div>
            {/* Product 3 */}
            <div className="bg-white rounded-lg shadow-md p-4 flex items-center space-x-4 mt-4">
              <img
                src="https://placehold.co/80x80"
                alt="Gaming Case"
                className="w-20 h-20 object-contain"
              />
              <div>
                <h3 className="text-sm font-semibold text-blue-500">
                  Nerecool EN52377 Dead Silence Gaming Cube Case
                </h3>
                <p className="text-gray-800 font-bold">$180,00</p>
              </div>
            </div>
          </div>

          {/* Onsale Products */}
          <div>
            {/* Product 1 */}
            <div className="bg-white rounded-lg shadow-md p-4 flex items-center space-x-4">
              <img
                src="https://placehold.co/80x80"
                alt="Earphones"
                className="w-20 h-20 object-contain"
              />
              <div>
                <h3 className="text-sm font-semibold text-blue-500">
                  Yellow Earphones Waterproof with Bluetooth
                </h3>
                <div className="flex items-center">
                  <p className="text-gray-800 font-bold mr-2">$110,00</p>
                  <p className="text-gray-500 line-through text-sm">$250,00</p>
                </div>
              </div>
            </div>
            {/* Product 2 */}
            <div className="bg-white rounded-lg shadow-md p-4 flex items-center space-x-4 mt-4">
              <img
                src="https://placehold.co/80x80"
                alt="Camera"
                className="w-20 h-20 object-contain"
              />
              <div>
                <h3 className="text-sm font-semibold text-blue-500">
                  Camera C430w 4K Waterproof
                </h3>
                <div className="flex items-center">
                  <p className="text-gray-800 font-bold mr-2">$899,00</p>
                  <p className="text-gray-500 line-through text-sm">$1200,00</p>
                </div>
              </div>
            </div>
            {/* Product 3 */}
            <div className="bg-white rounded-lg shadow-md p-4 flex items-center space-x-4 mt-4">
              <img
                src="https://placehold.co/80x80"
                alt="Smartphone"
                className="w-20 h-20 object-contain"
              />
              <div>
                <h3 className="text-sm font-semibold text-blue-500">
                  Smartphone 6S 32GB LTE
                </h3>
                <div className="flex items-center">
                  <p className="text-gray-800 font-bold mr-2">$2100,00</p>
                  <p className="text-gray-500 line-through text-sm">$3299,00</p>
                </div>
              </div>
            </div>
          </div>

          {/* Top Rated Products */}
          <div>
            {/* Product 1 */}
            <div className="bg-white rounded-lg shadow-md p-4 flex items-center space-x-4">
              <img
                src="https://placehold.co/80x80"
                alt="Smartwatch"
                className="w-20 h-20 object-contain"
              />
              <div>
                <h3 className="text-sm font-semibold text-blue-500">
                  Smartwatch 2.0 LTE Wifi Waterproof
                </h3>
                {renderStars(4)}
                <p className="text-gray-800 font-bold">$725,00</p>
              </div>
            </div>
            {/* Product 2 */}
            <div className="bg-white rounded-lg shadow-md p-4 flex items-center space-x-4 mt-4">
              <img
                src="https://placehold.co/80x80"
                alt="Camera"
                className="w-20 h-20 object-contain"
              />
              <div>
                <h3 className="text-sm font-semibold text-blue-500">
                  22Mps Camera 6200U with 500GB SDcard
                </h3>
                {renderStars(3)}
                <p className="text-gray-800 font-bold">$2999,00</p>
              </div>
            </div>
            {/* Product 3 */}
            <div className="bg-white rounded-lg shadow-md p-4 flex items-center space-x-4 mt-4">
              <img
                src="https://placehold.co/80x80"
                alt="Printer"
                className="w-20 h-20 object-contain"
              />
              <div>
                <h3 className="text-sm font-semibold text-blue-500">
                  Full Color LaserJet Pro M452dn
                </h3>
                {renderStars(4)}
                <p className="text-gray-800 font-bold">$439,00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductShowcaseTabs;
