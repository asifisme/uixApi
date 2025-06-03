import { useSelector } from "react-redux";
import AddToCart from "../cart/AddToCart";
import HomePageApi from "./HomePageApi";
import type { RootState } from "@/app/store";

const HomePage = () => {
  const cart = useSelector((state: RootState) => state.cartHandelar.cart);
  const isCartExist = cart.length > 0 

  return (
    <div className="flex w-full bg-[#18181b]">
      <div className="grid grid-cols-12">
        <div
          className={`${
            isCartExist
              ? "col-span-12 md:col-start-2"
              : "col-span-12 md:col-start-2 md:col-span-10 md:col-end-12"
          }  `}
        >
          <HomePageApi />
        </div>
      </div>
      {isCartExist && (
        <div className="w-1/5">
          <AddToCart />
        </div>
      )}
    </div>
  );
};

export default HomePage;
