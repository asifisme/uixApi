import type { AppDispatch, RootState } from "@/app/store";
import { productDetailApi } from "@/features/home/productDetailSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ProductDetailsViews from "./ProductDetailsViews";
import AddToCart from "../cart/AddToCart";

interface ProductImage {
  id: number;
  product: number;
  author: number;
  product_image: string;
  is_primary: boolean;
  alt_text: string;
}

interface Product {
  id: number;
  images: ProductImage[];
  name: string;
  title: string;
  slug: string;
  description: string;
  weight: number;
  sku: string;
  price: number;
  stock: number;
  discount_percent: number;
  warranty_information: string;
  shipping_information: string;
  return_policy: string;
  min_order_quantity: number;
  unq_num: string;
  pro_uuid: string;
  is_available: boolean;
  is_approved: boolean;
  rating: number;
  views_count: number;
  sold_count: number;
  uid: string;
  category: number;
  author: number;
  meta_tag: number[];
}

const ProductDetail = () => {
  const { uid } = useParams();
  const dispatch = useDispatch<AppDispatch>();
  const { productsList, isLoading, fetchError } = useSelector(
    (state: RootState) => state.productDetail
  );

  useEffect(() => {
    if (uid) {
      dispatch(productDetailApi(uid));
    }
  }, [uid, dispatch]);

  const views: Product | null =
    productsList && productsList.length > 0 ? productsList[0] : null;

  const cart = useSelector((state: RootState) => state.cart.cart);
  const isCartExist = cart.length > 0;

  return (
    <section>
      <div className="flex w-full ">
        <div className="grid grid-cols-12">
          <div
            className={`${
              isCartExist
                ? "col-span-12 md:col-start-2"
                : "col-span-12 md:col-start-2 md:col-span-10 md:col-end-12"
            }  `}
          >
            <ProductDetailsViews views={{...views }} />
          </div>
        </div>
        {isCartExist && (
          <div className="w-1/5">
            <AddToCart />
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductDetail;
