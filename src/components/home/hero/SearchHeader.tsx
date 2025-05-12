import {
  Menu,
  Heart,
  RefreshCw,
  ShoppingCart,
  Search,
  ChevronDown,
} from "lucide-react";



const SearchHeader = () => {
  return (
    <header className="bg-white border-b border-gray-100 px-4 md:px-10 py-4">
      {/* Container for responsive layout */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Logo and Menu section - visible on mobile */}
        <div className="flex items-center gap-2">
          <Menu className="w-5 h-5 text-gray-700 md:hidden cursor-pointer" />{" "}
          {/* Hamburger menu for mobile */}
          <h1 className="text-3xl font-bold text-gray-800">
            electro<span className="text-yellow-400">.</span>{" "}
            {/* Logo with yellow dot */}
          </h1>
        </div>

        {/* Search bar with category dropdown and submit button */}
        <form
          className="w-full md:w-auto flex items-center"
        >
          <div className="w-full flex items-center border border-yellow-400 rounded-full overflow-hidden">
            <input
              type="text"
              placeholder="Search for products"
              className="w-full md:w-auto flex-1 px-4 py-2 text-sm focus:outline-none bg-transparent" // Search input styling
            />
            <div
              className="flex items-center bg-white border-l border-yellow-400 px-4 text-sm text-gray-600 cursor-pointer"
            
            >
              <ChevronDown className="w-4 h-4 ml-1" />{" "}
              {/* Category dropdown trigger */}
            </div>
            <button type="submit" className="bg-yellow-400 p-2">
              <Search className="w-4 h-4 text-white" />{" "}
              {/* Search button with icon */}
            </button>
          </div>
        </form>

        {/* Icons section for refresh, wishlist, and cart */}
        <div className="flex items-center gap-4 text-gray-700 text-sm mt-4 md:mt-0">
          <RefreshCw
            className="w-5 h-5 cursor-pointer"
          />{" "}
          {/* Refresh icon */}
          <Heart
            className="w-5 h-5 cursor-pointer"
          />{" "}
          {/* Wishlist icon */}
          <div
            className="relative flex items-center gap-1 cursor-pointer"
          >
            <ShoppingCart className="w-5 h-5" /> {/* Cart icon */}
            <span className="absolute -top-1 -right-2 bg-yellow-400 text-xs font-bold px-1.5 rounded-full text-black">
            </span>
            <span className="hidden md:inline font-semibold">
            </span>{" "}
            {/* Cart total price, hidden on mobile */}
          </div>
        </div>
      </div>
    </header>
  );
};

export default SearchHeader;
