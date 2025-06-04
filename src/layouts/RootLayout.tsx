import { Outlet } from "react-router-dom";
import NavLayout from "./NavLayout";
import FooterLayout from "./FooterLayout";
import { useSelector } from "react-redux";
import type { RootState } from "@/app/store";
import AddToCartApi from "@/components/cart/AddToCartApi";

const RootLayout = () => {
  const isCartOpen = useSelector((state: RootState) => state.sign.isCartOpen);
  return (
    <section>
      <NavLayout />
      {isCartOpen && (
        <div className="fixed top-0 right-0 z-50  max-w-md h-full bg-white  ">
          <AddToCartApi />
        </div>
      )}
      <Outlet />
      <FooterLayout />
    </section>
  );
};

export default RootLayout;
