import { Search } from "lucide-react";
import { useEffect, useState } from "react";

import api from "@/api/api_root";
import ProductViews from "../ProductsViews";

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

const MainSearchViews = () => {
  const [product, setProduct] = useState<PRODUCT[]>([]);
  const [searchData, setSearchData] = useState<string>("");

  const fetchProduct = async (query: string) => {
    try {
      const res = await api.get(`product/?search=${query}`);
      setProduct(res.data.results || []);
      console.log(res.data.results);
    } catch (error) {
      console.error("The error is -----", error);
    }
  };

  const handleSearchForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await fetchProduct(searchData);
  };

  useEffect(() => {
    fetchProduct("");
  }, []);

  return (
    <section className="">
      <form
        onSubmit={handleSearchForm}
        method="get"
        className="max-w-md mx-auto mt-10"
      >
        <label htmlFor="search" className="sr-only">
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <Search />
          </div>
          <input
            type="search"
            id="search"
            value={searchData}
            onChange={(e) => setSearchData(e.target.value)}
            className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 "
            placeholder="Search Mockups, Logos..."
            required
          />
          <button
            type="submit"
            className=" absolute right-2.5 bottom-2.5 hover:bg-blue-800"
          >
            Search
          </button>
        </div>
      </form>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 ">
        {product.map((views) => (
          <ProductViews key={views.uid} views={views} />
        ))}
      </div>
    </section>
  );
};

export default MainSearchViews;
