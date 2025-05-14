import { Outlet } from "react-router-dom";
import NavLayout from "./NavLayout";
import FooterLayout from "./FooterLayout";

const RootLayout = () => {
  return (
    <section>
      <NavLayout />
      <Outlet />
      <FooterLayout />
    </section>
  );
};

export default RootLayout;
