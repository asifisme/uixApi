import { Input } from "@/components/ui/input";
import { Home,  LogOutIcon, Search, ShoppingCart } from "lucide-react";
import { IoPerson } from "react-icons/io5";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "@/app/store";
import { signout } from "@/features/auth/signInSlice";
import { setIsSignedIn } from "@/features/nav/navSlice";

function NavLayout() {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const isSignedIn = useSelector((state: RootState)=> state.sign.isSignedIn)

  useEffect(() => {
    const hasAccess = !!localStorage.getItem("access")
    dispatch(setIsSignedIn(hasAccess))
  })

  return (
    <nav className="bg-[#1c2841] h-16 text-white ">
      <div className="flex ">
        <div className="basis-1/4 ">
          <div className="flex justify-center">
            <Link to={"/"}>
              <Home className=" mt-4 cursor-pointer text-white" />
            </Link>
          </div>
        </div>
        <div className="basis-1/2 ">
          <div className="flex gap-x-4 pt-">
            <div className="flex items-center bg-white rounded mt-2 px-3 py- w-full shadow-sm">
              <Input
                className="flex-grow bg-white text-black border-none focus:outline-none focus:ring-0"
                placeholder="Search"
              />
              <button className="p-2">
                <Search className="text-gray-500" />
              </button>
            </div>
          </div>
        </div>
        <div className="basis-1/3">
          <div className="flex justify-center gap-5 ">
            <div className="">
              <div className="mt-4">
                <ShoppingCart  />
              </div>
            </div>
            {/* authentication area */}
            <div className="">

              <div className="mt-3 ml-5">
                <ul>
                  {isSignedIn ? (
                    <>
                      <div className="flex gap-3 items-center">
                        <div>
                          <IoPerson className="text-3xl ml-2 mt-1 cursor-pointer text-white hover:text-amber-300 transition-colors duration-200" />
                        </div>
                        <div>
                          <LogOutIcon
                            onClick={() => {
                              dispatch(signout());
                              dispatch(setIsSignedIn(false));
                              navigate("/signin");
                            }}
                            className="text-3xl ml-2 mt-1 cursor-pointer text-white hover:text-red-400 transition-all duration-200 hover:scale-110"
                          />
                        </div>
                      </div>
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
