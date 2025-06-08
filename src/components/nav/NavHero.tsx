
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "@/app/store";
import { setIsSignedIn } from "@/features/nav/navSlice";
import { toggleCart } from "@/features/nav/navSlice";

import { Menu, Search, Heart, RefreshCw, ShoppingCart } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const NavHero = () => {
  const dispatch = useDispatch<AppDispatch>();


  useEffect(() => {
    const hasAccess = !!localStorage.getItem("access");
    dispatch(setIsSignedIn(hasAccess));
  });

  const { items } = useSelector((state: RootState) => state.cartItem);
  const handleCartCount: number = items.length;

  return (
    <section>
      <header className="shadow-sm">
        {/* Top Header */}
        <div className="flex justify-between items-center px-6 py-4 bg-white">
          {/* Left: Logo & Menu */}
          <div className="flex items-center gap-4">
            {/* Hamburger Menu Icon */}
            <Menu className="w-6 h-6 text-gray-700" />

            {/* Logo */}
            <h1 className="text-2xl font-bold text-gray-800">
              xApi<span className="text-yellow-400">.</span>
            </h1>
          </div>

          {/* Center: Search + Category */}
          <div className="flex items-center w-1/2 max-w-3xl border border-yellow-400 rounded-full overflow-hidden">
            {/* Search Input */}
            <input
              type="text"
              placeholder="Search for products"
              className="flex-1 px-4 py-2 text-sm outline-none"
            />

            {/* Category Dropdown */}
            <select className="text-sm border-l border-yellow-400 px-3 py-2 outline-none">
              <option>All Categories</option>
              <option>TV & Audio</option>
              <option>Computers</option>
              <option>Phones</option>
            </select>

            {/* Search Icon Button */}
            <button className="bg-yellow-400 px-4 py-2">
              <Search className="w-4 h-4 text-white" />
            </button>
          </div>

          {/* Right: Icons */}
          <div className="flex items-center gap-6 text-gray-700">
            <RefreshCw className="w-5 h-5 cursor-pointer" />
            <Heart className="w-5 h-5 cursor-pointer" />

            {/* Cart with item count and price */}
            <div
              className="relative flex items-center gap-2 cursor-pointer"
              onClick={() => dispatch(toggleCart())}
            >
              <ShoppingCart className="w-5 h-5" />
              <span className="text-sm font-semibold"></span>

              {/* Cart item count */}
              <span className="absolute -top-2 -right-2 bg-yellow-400 text-xs text-white font-bold w-5 h-5 flex items-center justify-center rounded-full">
                {handleCartCount}
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Navbar: Categories */}
        <nav className=" flex justify-between text-sm font-medium text-gray-900">
          <NavigationMenu>
            <NavigationMenuList className="">
              <NavigationMenuItem>
                <NavigationMenuTrigger>TV & Audio</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <NavigationMenuLink asChild>
                    <a href="#">Dummy Child 1</a>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <a href="#">Dummy Child 2</a>
                  </NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <NavigationMenu>
            <NavigationMenuList className="">
              <NavigationMenuItem>
                <NavigationMenuTrigger>RTV</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <NavigationMenuLink asChild>
                    <a href="#">Dummy Child 1</a>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <a href="#">Dummy Child 2</a>
                  </NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <NavigationMenu>
            <NavigationMenuList className="">
              <NavigationMenuItem>
                <NavigationMenuTrigger>Computer</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <NavigationMenuLink asChild>
                    <a href="#">Dummy Child 1</a>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <a href="#">Dummy Child 2</a>
                  </NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <NavigationMenu>
            <NavigationMenuList className="">
              <NavigationMenuItem>
                <NavigationMenuTrigger>Game & Console</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <NavigationMenuLink asChild>
                    <a href="#">Dummy Child 1</a>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <a href="#">Dummy Child 2</a>
                  </NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <NavigationMenu>
            <NavigationMenuList className="">
              <NavigationMenuItem>
                <NavigationMenuTrigger>Gedgets</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <NavigationMenuLink asChild>
                    <a href="#">Dummy Child 1</a>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <a href="#">Dummy Child 2</a>
                  </NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <NavigationMenu>
            <NavigationMenuList className="">
              <NavigationMenuItem>
                <NavigationMenuTrigger>Phone & Tablets</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <NavigationMenuLink asChild>
                    <a href="#">Dummy Child 1</a>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <a href="#">Dummy Child 2</a>
                  </NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <NavigationMenu>
            <NavigationMenuList className="">
              <NavigationMenuItem>
                <NavigationMenuTrigger>GPS & Car Audio</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <NavigationMenuLink asChild>
                    <a href="#">Dummy Child 1</a>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <a href="#">Dummy Child 2</a>
                  </NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <NavigationMenu>
            <NavigationMenuList className="">
              <NavigationMenuItem>
                <NavigationMenuTrigger>Accessories</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <NavigationMenuLink asChild>
                    <a href="#">Dummy Child 1</a>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <a href="#">Dummy Child 2</a>
                  </NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </nav>
      </header>
    </section>
  );
};

export default NavHero;
