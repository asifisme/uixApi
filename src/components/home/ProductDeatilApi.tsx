

import api from "@/api/api_root";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductDetailsViews from "./products/ProductDetailsViews";

interface PRODUCT {
  id: number;
  name: string;
  title: string;
  slug: string;
  desc: string;
  price: string;
  stock: number;
  uid: string;
  images: { image: string }[];
}

const API_PATH = "product";

const ProductDetailsApi = () => {
  const { slug } = useParams<{ slug: string }>();
  const [product, setProduct] = useState<PRODUCT[]>([]);

  useEffect(() => {
    const fetchProduct = async () => {
      if (!slug) return;
      try {
        const res = await api.get(`${API_PATH}/?search=${slug}`);
        const result = res.data.results || [];
        setProduct(result);
      } catch (err) {
        console.error("Error fetching product:", err);
      }
    };
    fetchProduct();
  }, [slug]);

  if (!product)
    return (
      <div className="text-center py-20 text-gray-700 dark:text-gray-300">
        Loading product...
      </div>
    );

  return (
    <div>
      {product.map((views) => (
        <ProductDetailsViews key={views.uid} views={views} />
      ))}
    </div>
  );

};

export default ProductDetailsApi;

