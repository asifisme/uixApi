import { Link, useNavigate } from "react-router-dom";
import {
  Phone,
  Mail,
  MapPinCheckInside,
  Bus,
  Menu,
  ShoppingBag,
} from "lucide-react";
import { useEffect, useState } from "react";

const NavLayout = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("access");
    setIsLoggedIn(!!token);
  }, []); // Check token on mount

  const handleLogout = () => {
    localStorage.removeItem("access");
    localStorage.removeItem("refresh");
    setIsLoggedIn(false); 
    navigate("/signin");
  };

  return (
    <div className="w-full bg-[#f7f0f0] text-sm font-medium text-gray-700 shadow-sm">
      {/* Mobile: Visible on small screens */}
      <div className="flex justify-between items-center px-4 py-2 md:hidden">
        <button
          aria-label="Open menu"
          className="focus:outline-none"
          // Add onClick handler for menu toggle if needed
        >
          <Menu className="w-5 h-5" />
        </button>
        <Link to="/" className="flex items-center gap-2">
          <ShoppingBag className="w-5 h-5" aria-hidden="true" />
          <span className="font-semibold">rasCart</span>
        </Link>
      </div>

      {/* Desktop: Visible on medium and larger screens */}
      <div className="hidden md:flex items-center justify-between h-12 px-6">
        {/* Left Section */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4 text-gray-500" aria-hidden="true" />
            <a href="tel:+1234567890" className="hover:text-black">
              +1 (234) 567-890
            </a>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4 text-gray-500" aria-hidden="true" />
            <a href="mailto:support@rascart.com" className="hover:text-black">
              support@rascart.com
            </a>
          </div>
        </div>

        {/* Center Section */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <MapPinCheckInside
              className="w-4 h-4 text-gray-500"
              aria-hidden="true"
            />
            <Link to="/store-locator" className="hover:text-black">
              Store Location
            </Link>
          </div>
          <div className="flex items-center gap-2">
            <Bus className="w-4 h-4 text-gray-500" aria-hidden="true" />
            <Link to="/track-order" className="hover:text-black">
              Track Order
            </Link>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold">$</span>
            <button className="hover:text-black">Dollar (US)</button>
            {/* Replace with a dropdown or context for currency selection */}
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          {!isLoggedIn ? (
            <>
              <Link to="/signup" className="hover:text-black">
                Register
              </Link>
              <span className="text-gray-400">|</span>
              <Link to="/signin" className="hover:text-black">
                Sign In
              </Link>
            </>
          ) : (
            <>
              <Link to="/dashboard" className="hover:text-black">
                My Account
              </Link>
              <button
                onClick={handleLogout}
                className="hover:text-black focus:outline-none"
              >
                Logout
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavLayout;
