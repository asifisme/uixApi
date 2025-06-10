import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "@/app/store";
import { useEffect } from "react";
import { fetchProdcutApi } from "@/features/home/productsSlice";
import NewArrivalProductViews from "./NewArrivalProductViews";
import ProductViews from "./ProductsViews";
import { createCart } from "@/features/cart/cartThunks";
import {
  createCartItem,
  fetchCartItems,
} from "@/features/cart/item/cartItemSlice";
import { toggleCart } from "@/features/nav/navSlice";
import HomePageHero from "./hero/homePageHero";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

const HomePageApi = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { productsList } = useSelector((state: RootState) => state.product);

  useEffect(() => {
    dispatch(fetchProdcutApi() as any);
  }, [dispatch]);

  const { cart } = useSelector((state: RootState) => state.cart);

  const token = localStorage.getItem("access");
  
  const handleAddItem = async (uid: string, quantity: number) => {
    if (!token) {
      alert("Please log in to add items to your cart.");
      return;
    }
    if (!cart || Object.keys(cart).length === 0) {
      await dispatch(createCart());
    }
    await dispatch(createCartItem({ product_uid: uid, quantity: quantity }));
    dispatch(fetchCartItems());
    dispatch(toggleCart());
  };

  const numberOfSlide = productsList.slice(0, 15);

  return (
    <section>
      <div>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
        >
          {numberOfSlide.map((views) => (
            <SwiperSlide key={views.uid}>
              <HomePageHero views={views} handleAddItem={handleAddItem} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* New Arival  product start */}
      <div className="grid lg:grid-cols-4 gap-5 m-4 ">
        {productsList.map((views) => (
          <NewArrivalProductViews
            key={views.uid}
            views={views}
            handleAddItem={handleAddItem}
          />
        ))}
      </div>
      {/* New Arival  product start */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-4">
        {productsList.map((views) => (
          <ProductViews
            key={views.uid}
            views={views}
            handleAddItem={handleAddItem}
          />
        ))}
      </div>
    </section>
  );
};

export default HomePageApi;
