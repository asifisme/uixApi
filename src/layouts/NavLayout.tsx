import { Input } from "@/components/ui/input";
import { IceCream, Search } from "lucide-react";
import { IoPerson } from "react-icons/io5";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

function NavLayout() {
  const [isSignIn, setIsSignIn] = useState<boolean>(false);

  const checkAuthStatus = () => {
    const token = localStorage.getItem("access");
    setIsSignIn(!!token);
  };

  useEffect(() => {
    checkAuthStatus();
  }, []);

  const handleSignOut = () => {
    localStorage.removeItem("access");
    setIsSignIn(false);
  };

  return (
    <nav className="bg-[#1c2841] h-16 text-white ">
      <div className="flex ">
        <div className="basis-1/4 bg-amber-300">
          <IceCream />
        </div>
        <div className="basis-1/2">
          <ul className=" flex justify-center gap-x-15 pt-2">
            <li>
              <Link to="/" className="">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="">
                About
              </Link>
            </li>
            <li>
              <Link to="/services" className="">
                Services
              </Link>
            </li>
            <li>
              <Link to="/pricing" className="">
                Pricing
              </Link>
            </li>
            <li>
              <Link to="/contact" className="">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="basis-1/3">
          <div className="flex ">
            {/* search area */}
            <div className="basis-2/3">
              <div className="flex items-center bg-white rounded  mt-2">
                <Input
                  className="bg-white text-black border-none focus:outline-none focus:ring-0"
                  placeholder="Search"
                />
                <button className="p-2">
                  <Search className="text-gray-500" />
                </button>
              </div>
            </div>
            {/* Search area end  */}
            {/* authentication area */}
            <div className="basis-">
              <div className="mt-3 ml-5">
                <ul>
                  {isSignIn ? (
                    <>
                      <button
                        onClick={handleSignOut}
                        className="hidden hover:text-amber-300"
                      >
                        Sign Out
                      </button>
                      <IoPerson className="text-3xl ml-2 mt-1" />
                    </>
                  ) : (
                    <>
                      <Link to="/signin" className="">
                        <Button className="px-10 bg-[#0143f8]">Sign In</Button>
                      </Link>
                    </>
                  )}
                </ul>
              </div>
            </div>
            {/* authentication areas end  */}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavLayout;

// <Link to="/signup" className="hover:text-amber-300">
//   Sign Up
// </Link>;
