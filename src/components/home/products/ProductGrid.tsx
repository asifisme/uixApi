import { useEffect, useState } from "react";
import SpecialOffersViews from "./productgrids/SpecialOffers";

import api from "@/api/api_root";


const API_PATH = "product";

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



const ProductsGrids = () => {
  const [product, setProduct] = useState<PRODUCT[]>([]);

  useEffect(() => {
    const dataFetch = async () => {
      try {
        const res = await api.get(API_PATH);
        setProduct(res.data.results);
        console.log(res.data.results);
      } catch (err) {
        console.error("Error fetching top-selling products:", err);
      }
    };
    dataFetch();
  }, []);

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-4">
        {product.map((views) => (
          <SpecialOffersViews key={views.uid} views={views} />
        ))}
      </div>
      <div></div>
    </div>
  );
};

export default ProductsGrids;
