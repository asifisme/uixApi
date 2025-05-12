import { Outlet } from "react-router-dom";
import NavLayout from "./NavLayout";
import FooterLayout from "./FooterLayout";

const RootLayout = () => {
  return (
    <div className="grid grid-cols-12 gap-4 bg-gray-600">
      <div className="col-span-12 md:col-start-2 md:col-span-10 md:col-end-12">
        <NavLayout />
        <Outlet />
        <FooterLayout />
      </div>
    </div>
  );
};

export default RootLayout;
