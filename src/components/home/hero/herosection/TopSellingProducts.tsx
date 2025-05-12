import api from "@/api/api_root";
import { useEffect, useState } from "react";
import TopSellingProductViews from "./topsellingproduct/TopSellingProductViews";

interface Product {
  id: number;
  name: string;
  title: string;
  desc: string;
  price: string;
  stock: number;
  uid: string;
  images: { image: string }[];
}

const TopSellingProducts = () => {
  const [topSelling, setTopSelling] = useState<Product[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await api.get("top-selling-product");
        setTopSelling(res.data);
      } catch (err) {
        console.error("Error fetching top-selling products:", err);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="h-[450px] bg-[#A7C7E7]">
      {topSelling.map((views) => (
        <TopSellingProductViews key={views.uid} views={views} />
      ))}
    </div>
  );
};

export default TopSellingProducts;
