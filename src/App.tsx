import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import RootLayout from "./layouts/RootLayout";
import NotFound404 from "./pages/NotFound404";
import PostMardem from "./post/test";
import MainSearchViews from "./components/home/search/MainSearchViews";
import SignInViews from "./components/auth/signInViews";
import SignUpViews from "./components/auth/signUpViews";
import HomePage from "./components/home/HomePage";
import ProductDetail from "./components/home/ProductDetail";
import AdminUserList from "./components/admin/userList";
import OrderListApi from "./components/order/orderApi";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route path="/signin/" element={<SignInViews />} />
        <Route path="/signup/" element={<SignUpViews />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/product/:uid/" element={<ProductDetail />} />
        <Route path="src" element={<MainSearchViews />} />
        <Route path="post" element={<PostMardem />} />
        <Route path="/user/" element={<AdminUserList />} />
        <Route path="/orders/" element={<OrderListApi />} />
        <Route path="*" element={<NotFound404 />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
