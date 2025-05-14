
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import RootLayout from "./layouts/RootLayout";
import HomePage from "./components/home/HomePage";
import NotFound404 from "./pages/NotFound404";
import PostMardem from "./post/test";
import SignUpForm from "./components/auth/sign/SignInForm";
import Dashborad from "./dashboard/Dashborad";
import SingUpForm from "./components/auth/sign/SingUpForm";
import AddToCart from "./components/cart/AddToCart";
import MainSearchViews from "./components/home/products/search/MainSearchViews";
import ProductDetailsApi from "./components/home/ProductDeatilApi";


function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/product/:slug" element={<ProductDetailsApi />} />
        <Route path="src" element={<MainSearchViews />} />
        <Route path="cart" element={<AddToCart />} />
        <Route path="post" element={<PostMardem />} />
        <Route path="/signin/" element={<SignUpForm />} />
        <Route path="/signup/" element={<SingUpForm />} />
        <Route path="dashboard" element={<Dashborad />} />
        <Route path="*" element={<NotFound404 />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
