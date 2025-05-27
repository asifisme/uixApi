import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "@/app/store";
import { useEffect } from "react";
import { fetchProdcutApi } from "@/features/home/productsSlice";
import NewArrivalProductViews from "./NewArrivalProductViews";
import ProductViews from "./ProductsViews";

const HomePageApi = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { productsList, isLoading, fetchError } = useSelector(
    (state: RootState) => state.product
  );

  useEffect(() => {
    dispatch(fetchProdcutApi() as any);
  }, [dispatch]);


  if (isLoading) return <div className="text-center">Loading...</div>;
  if (fetchError)
    return <div className="text-center text-red-500">{fetchError}</div>;

  return (
    <section>
      {/* New Arival  product start */}
      <div className="grid lg:grid-cols-4 gap-5 m-4 ">
        {productsList.map((views) => (
          <NewArrivalProductViews key={views.uid} views={views} />
        ))}
      </div>
      {/* New Arival  product start */}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-4">
        {productsList.map((views) => (
          <ProductViews key={views.uid} views={views} />
        ))}
      </div>
    </section>
  );
};

export default HomePageApi;
