import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "@/app/store";
import { signout } from "@/features/auth/signInSlice";
import { setIsSignedIn } from "@/features/nav/navSlice";
import { toggleCart } from "@/features/nav/navSlice";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { ShoppingCartIcon } from "lucide-react";

function NavLayout() {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const isSignedIn = useSelector((state: RootState) => state.sign.isSignedIn);

  useEffect(() => {
    const hasAccess = !!localStorage.getItem("access");
    dispatch(setIsSignedIn(hasAccess));
  });

  const { items } = useSelector((state: RootState) => state.cartItem);
  const handleCartCount: number = items.length;

  return (
    <section className="bg-[#94a3b8] ">
      <div className="flex">
        {/* 1. Home Navigation */}
        <div className="basis-1/4 relative">
          <div className="absolute right-1">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className=" font-medium">
                    Home
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className=" rounded-lg shadow-md">
                    <NavigationMenuLink asChild>
                      <Link to="/" className="hover:underline">
                        Home
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link to="/categories" className="hover:underline">
                        Categories
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link to="/products" className="hover:underline">
                        Products
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link to="/offers" className="hover:underline">
                        Offers
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link to="/new" className="hover:underline">
                        New Arrivals
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link to="/flash-sale" className="hover:underline">
                        Flash Sale
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>

        {/* 2. Search Bar */}
        <div className="basis-1/2">
          <div className="">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-blue-200"
            />
          </div>
        </div>

        {/* 3. Cart & account*/}
        <div className="basis-1/4">
          <div className="flex justify-center gap-x-10 ">
            {/* Account */}
            <div className="mt-2">
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <div
                      className="relative w-fit cursor-pointer"
                      onClick={() => dispatch(toggleCart())}
                    >
                      <ShoppingCartIcon fontSize="small" />

                      {handleCartCount > 0 && (
                        <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs font-bold px-1.5 py-0.5 rounded-full">
                          {handleCartCount}
                        </span>
                      )}
                    </div>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>
            <div>
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="">
                      {isSignedIn ? "account" : "signin"}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="">
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
}

export default NavLayout;

//  <div>
//    <NavigationMenu>
//      <NavigationMenuList>
//        <NavigationMenuItem>
//          <NavigationMenuTrigger className="">Cart</NavigationMenuTrigger>
//          <NavigationMenuContent className="">
//            <NavigationMenuLink asChild>
//              <Link to="/cart" className="hover:underline">
//                Cart
//              </Link>
//            </NavigationMenuLink>
//            <NavigationMenuLink asChild>
//              <Link to="/checkout" className="hover:underline">
//                Checkout
//              </Link>
//            </NavigationMenuLink>
//            <NavigationMenuLink asChild>
//              <Link to="/track" className="hover:underline">
//                Track Order
//              </Link>
//            </NavigationMenuLink>
//            <NavigationMenuLink asChild>
//              <Link to="/returns" className="hover:underline">
//                Returns
//              </Link>
//            </NavigationMenuLink>
//          </NavigationMenuContent>
//        </NavigationMenuItem>
//      </NavigationMenuList>
//    </NavigationMenu>
//  </div>;

//  <NavigationMenu>
//    <NavigationMenuList>
//      <NavigationMenuItem>
//        <NavigationMenuTrigger className="">More</NavigationMenuTrigger>
//        <NavigationMenuContent className="">
//          <NavigationMenuLink asChild>
//            <Link to="/blog" className="hover:underline">
//              Blog
//            </Link>
//          </NavigationMenuLink>
//          <NavigationMenuLink asChild>
//            <Link to="/about" className="hover:underline">
//              About Us
//            </Link>
//          </NavigationMenuLink>
//          <NavigationMenuLink asChild>
//            <Link to="/privacy" className="hover:underline">
//              Privacy Policy
//            </Link>
//          </NavigationMenuLink>
//          <NavigationMenuLink asChild>
//            <Link to="/terms" className="hover:underline">
//              Terms & Conditions
//            </Link>
//          </NavigationMenuLink>
//        </NavigationMenuContent>
//      </NavigationMenuItem>
//    </NavigationMenuList>
//  </NavigationMenu>;

// <NavigationMenu>
//   {/* first  */}
//   <NavigationMenuList>
//     <NavigationMenuItem>
//       <NavigationMenuTrigger>Name</NavigationMenuTrigger>
//       <NavigationMenuContent>
//         <NavigationMenuLink>Asif</NavigationMenuLink>
//         <NavigationMenuLink>Amy</NavigationMenuLink>
//         <NavigationMenuLink>Asif</NavigationMenuLink>
//       </NavigationMenuContent>
//     </NavigationMenuItem>
//     {/* second  */}
//     <NavigationMenuItem>
//       <NavigationMenuLink asChild>
//         <Link to={"bac"}>Dummy</Link>
//       </NavigationMenuLink>
//     </NavigationMenuItem>
//     {/* Third  */}
//     <NavigationMenuItem>World</NavigationMenuItem>
//   </NavigationMenuList>
// </NavigationMenu>;

{
  /* <nav className="bg-[#1c2841] h-16 text-white "></nav>; */
}

//  <div className="flex ">
//    <div className="basis-1/4 ">
//      <div className="flex justify-center">
//        <Link to={"/"}>
//          <Home className=" mt-4 cursor-pointer text-white" />
//        </Link>
//      </div>
//    </div>
//    <div className="basis-1/2 ">
//      <div className="flex gap-x-4 pt-">
//        <div className="flex items-center bg-white rounded mt-2 px-3 py- w-full shadow-sm">
//          <Input
//            className="flex-grow bg-white text-black border-none focus:outline-none focus:ring-0"
//            placeholder="Search"
//          />
//          <button className="p-2">
//            <Search className="text-gray-500" />
//          </button>
//        </div>
//      </div>
//    </div>
//    <div className="basis-1/3">
//      <div className="flex justify-center gap-5 ">
//        <div className="">
//          <div className="mt-4">
//            {/* shopping cart badge */}
//            <div
//              className="relative w-fit cursor-pointer"
//              onClick={() => dispatch(toggleCart())}
//            >
//              <ShoppingCartIcon fontSize="small" />

//              {handleCartCount > 0 && (
//                <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs font-bold px-1.5 py-0.5 rounded-full">
//                  {handleCartCount}
//                </span>
//              )}
//            </div>
//          </div>
//        </div>
//        {/* authentication area */}
//        <div className="">
//          <div className="mt-3 ml-5">
//            <ul>
//              {isSignedIn ? (
//                <>
//                  <div className="flex gap-3 items-center">
//                    <div>
//                      <IoPerson className="text-3xl ml-2 mt-1 cursor-pointer text-white hover:text-amber-300 transition-colors duration-200" />
//                    </div>
//                    <div>
//                      <LogOutIcon
//                        onClick={() => {
//                          dispatch(signout());
//                          dispatch(setIsSignedIn(false));
//                          navigate("/signin");
//                        }}
//                        className="text-3xl ml-2 mt-1 cursor-pointer text-white hover:text-red-400 transition-all duration-200 hover:scale-110"
//                      />
//                    </div>
//                    <div>
//                      <Link to="user">
//                        <h1>Admin</h1>
//                      </Link>
//                    </div>
//                  </div>
//                </>
//              ) : (
//                <>
//                  <Link to="/signin" className="">
//                    <Button className="px-10 bg-[#0143f8]">Sign In</Button>
//                  </Link>
//                </>
//              )}
//            </ul>
//          </div>
//        </div>
//        {/* authentication areas end  */}
//      </div>
//    </div>
//  </div>;
