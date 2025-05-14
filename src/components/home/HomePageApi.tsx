import api from "@/api/api_root";
import { useEffect, useState } from "react";
import ProductViews from "./products/ProductsViews";
import TopSellingProductViews from "./products/TopSellingProductViews";
import NewArrivalProductViews from "./products/NewArrivalProductViews";

interface PRODUCT {
  id: number;
  name: string;
  title: string;
  desc: string;
  price: string;
  stock: number;
  uid: string;
  images: { image: string }[];
}

const TOP_SEELING_API_PATH = "top-selling-product";
const SPECIAL_OFFER_API_PATH = "product";
const NEW_ARRIVAL_API_PATH = "new-arrival-product";

const HomePageApi = () => {
  const [topSellings, setTopSelling] = useState<PRODUCT[]>([]);
  const [specialOffer, setSpecialOffer] = useState<PRODUCT[]>([]);
  const [newArrival, setNewArrival] = useState<PRODUCT[]>([]);

  const dataFetch = async (
    reqTopSell: string,
    reqSpecial: string,
    reqNewArival: string
  ) => {
    try {
      const [resTopSelling, resSecialOffer, resNewArrival] = await Promise.all([
        api.get(reqTopSell),
        api.get(reqSpecial),
        api.get(reqNewArival),
      ]);
      setTopSelling(
        Array.isArray(resTopSelling.data)
          ? resTopSelling.data
          : resTopSelling.data.results || []
      );
      setSpecialOffer(resSecialOffer.data.results || []);
      setNewArrival(
        Array.isArray(resNewArrival.data)
          ? resNewArrival.data
          : resNewArrival.data.results || []
      );
      console.log(resTopSelling.data);
      console.log(resSecialOffer.data.results);
    } catch (err) {
      console.error("Error fetching top-selling products:", err);
    }
  };

  useEffect(() => {
    dataFetch(
      TOP_SEELING_API_PATH,
      SPECIAL_OFFER_API_PATH,
      NEW_ARRIVAL_API_PATH
    );
  }, []);
  return (
    <section>
      {/* Top selling product */}
      <div className="h-[450px] bg-[#A7C7E7]">
        {topSellings.map((views) => (
          <TopSellingProductViews key={views.uid} views={views} />
        ))}
      </div>
      {/* Top selling product end */}
      {/* New Arival  product start */}
      <div className="grid lg:grid-cols-3 gap-5 m-4 ">
        {newArrival.map((views) => (
          <NewArrivalProductViews key={views.uid} views={views} />
        ))}
      </div>
      {/* New Arival  product start */}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
        {specialOffer.map((views) => (
          <ProductViews key={views.uid} views={views} />
        ))}
      </div>
    </section>
  );
};

export default HomePageApi;
