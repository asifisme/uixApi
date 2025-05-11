import { ArrowRight } from "lucide-react";

const BannerArea = () => {
  return (
    <div className="flex flex-col md:flex-row gap-4 px-4 md:px-0">
      {/* Banner 1 */}
      <div className="bg-gray-100 rounded-md shadow-md overflow-hidden flex flex-col sm:flex-row items-center p-4 w-full md:w-1/3">
        <img
          src="https://placehold.co/600x400" // Placeholder image
          alt="Camera"
          className="w-1/2 sm:w-1/3 object-contain mr-0 sm:mr-4 mb-4 sm:mb-0"
        />
        <div className="flex flex-col text-center sm:text-left">
          <p className="text-gray-600 text-xs sm:text-sm">CATCH BIG</p>
          <p className="text-gray-800 text-base sm:text-lg font-semibold">
            DEALS <span className="font-normal">ON THE</span>
          </p>
          <p className="text-gray-800 text-base sm:text-lg font-semibold">
            CAMERAS
          </p>
          <button className="flex items-center mt-2 text-xs sm:text-sm text-yellow-500 font-semibold mx-auto sm:mx-0">
            Shop now
            <ArrowRight className="ml-2 h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Banner 2 */}
      <div className="bg-gray-100 rounded-md shadow-md overflow-hidden flex flex-col sm:flex-row items-center p-4 w-full md:w-1/3">
        <img
          src="https://placehold.co/600x400" // Placeholder image
          alt="Tablet and Laptop"
          className="w-1/2 sm:w-1/2 object-contain mr-0 sm:mr-4 mb-4 sm:mb-0"
        />
        <div className="flex flex-col text-center sm:text-left">
          <p className="text-gray-600 text-xs sm:text-sm">TABLETS,</p>
          <p className="text-gray-800 text-base sm:text-lg font-semibold">
            SMARTPHONES
          </p>
          <p className="text-gray-800 text-base sm:text-lg font-semibold">
            AND MORE
          </p>
          <div className="flex items-center mt-2 justify-center sm:justify-start">
            <p className="text-gray-600 text-xs sm:text-sm uppercase mr-1">
              UP
            </p>
            <p className="text-yellow-500 text-lg sm:text-xl font-semibold">
              TO
            </p>
            <p className="text-yellow-500 text-xl sm:text-2xl font-bold ml-1">
              70<span className="text-base sm:text-lg">%</span>
            </p>
            <ArrowRight className="ml-2 h-4 sm:h-5 w-4 sm:w-5 text-yellow-500" />
          </div>
        </div>
      </div>

      {/* Banner 3 */}
      <div className="bg-gray-100 rounded-md shadow-md overflow-hidden flex flex-col sm:flex-row items-center p-4 w-full md:w-1/3">
        <img
          src="https://placehold.co/600x400" // Placeholder image
          alt="Computer"
          className="w-1/2 sm:w-1/2 object-contain mr-0 sm:mr-4 mb-4 sm:mb-0"
        />
        <div className="flex flex-col text-center sm:text-left">
          <p className="text-gray-600 text-xs sm:text-sm">SHOP THE</p>
          <p className="text-gray-800 text-base sm:text-lg font-semibold">
            HOTTEST
          </p>
          <p className="text-gray-800 text-base sm:text-lg font-semibold">
            PRODUCTS
          </p>
          <button className="flex items-center mt-2 text-xs sm:text-sm text-yellow-500 font-semibold mx-auto sm:mx-0">
            Shop now
            <ArrowRight className="ml-2 h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BannerArea;
