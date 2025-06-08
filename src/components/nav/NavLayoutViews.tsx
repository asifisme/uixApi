import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "@/app/store";
import { signout } from "@/features/auth/signInSlice";
import { setIsSignedIn } from "@/features/nav/navSlice";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { CarFront, LocationEditIcon, MailIcon } from "lucide-react";
import { IoCall } from "react-icons/io5";

const NavLayoutViews = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const isSignedIn = useSelector((state: RootState) => state.sign.isSignedIn);

  useEffect(() => {
    const hasAccess = !!localStorage.getItem("access");
    dispatch(setIsSignedIn(hasAccess));
  });
  return (
    <section className="bg-white shadow-sm rounded-lg p-2 md:p-4">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 md:gap-0">
        {/* nav left  */}
        <div className="basis-1/2">
          <div className="flex gap-4 items-center">
            <div>
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <ul className="flex items-center gap-2 text-gray-700 text-sm">
                      <li>
                        <IoCall className="w-4 h-4 text-yellow-500" />
                      </li>
                      <li className="font-medium">+8801516373037</li>
                    </ul>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>
            <div>
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <ul className="flex items-center gap-2 text-gray-700 text-sm">
                      <li>
                        <MailIcon className="w-4 h-4 text-yellow-500" />
                      </li>
                      <li className="font-medium">info@gmail.com</li>
                    </ul>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>
          </div>
        </div>
        {/* nav right */}
        <div className="basis-1/2">
          <div className="flex gap-4 items-center justify-end">
            <div>
              <ul className="flex items-center gap-2 text-gray-700 text-sm cursor-pointer hover:text-yellow-600 transition-colors">
                <li>
                  <LocationEditIcon className="w-4 h-4 text-yellow-500" />
                </li>
                <li className="font-medium">Store Locator</li>
              </ul>
            </div>
            <div>
              <ul className="flex items-center gap-2 text-gray-700 text-sm cursor-pointer hover:text-yellow-600 transition-colors">
                <li>
                  <CarFront className="w-4 h-4 text-yellow-500" />
                </li>
                <li className="font-medium">Track Your Order</li>
              </ul>
            </div>
            <div>
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="text-gray-700 font-medium hover:text-yellow-600 transition-colors">
                      Currency
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="w-64 bg-white rounded-lg shadow-lg p-2">
                        <NavigationMenuLink asChild>
                          <Link to="">US Dollar (USD)</Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                          <Link to="">Euro (EUR)</Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                          <Link to="">Japanese Yen (JPY)</Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                          <Link to="">British Pound (GBP)</Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                          <Link to="">Australian Dollar (AUD)</Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                          <Link to="">Canadian Dollar (CAD)</Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                          <Link to="">Swiss Franc (CHF)</Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                          <Link to="">Chinese Yuan (CNY)</Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                          <Link to="">Hong Kong Dollar (HKD)</Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                          <Link to="">Singapore Dollar (SGD)</Link>
                        </NavigationMenuLink>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>
            <div>
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="text-gray-700 font-medium hover:text-yellow-600 transition-colors">
                      {isSignedIn ? "account" : "signin"}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="bg-white rounded-lg shadow-lg p-2">
                      <div className="">
                        {isSignedIn ? (
                          <>
                            <div className="w-24">
                              <NavigationMenuLink asChild>
                                <Link to="/profile" className="">
                                  Profile
                                </Link>
                              </NavigationMenuLink>
                              <NavigationMenuLink asChild>
                                <Link to="/orders" className="">
                                  Orders
                                </Link>
                              </NavigationMenuLink>
                              <NavigationMenuLink asChild>
                                <Link to="/wishlist" className="">
                                  Wishlist
                                </Link>
                              </NavigationMenuLink>
                              <NavigationMenuLink asChild>
                                <p
                                  className=""
                                  onClick={() => {
                                    dispatch(signout());
                                    dispatch(setIsSignedIn(false));
                                    navigate("/signin");
                                  }}
                                >
                                  Sign Out
                                </p>
                              </NavigationMenuLink>
                            </div>
                          </>
                        ) : (
                          <>
                            <div className="w-24">
                              <NavigationMenuLink asChild>
                                <Link to="/signin" className="">
                                  Sign In
                                </Link>
                              </NavigationMenuLink>
                              <NavigationMenuLink asChild>
                                <Link to="/signup" className="">
                                  Sign Up
                                </Link>
                              </NavigationMenuLink>
                            </div>
                          </>
                        )}
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NavLayoutViews;
