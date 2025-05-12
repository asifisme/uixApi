import api from "@/api/api_root";
import { useEffect, useState } from "react";
import NewArrivalProductViews from "./newarrivalproducts/NewArrivalProductViews";


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

const API_PATH = "new-arrival-product";

const NewArrivalProducts = () => {
    const [newListing, setNewListing] = useState<Product[]>([]); 

    useEffect(() => {
        const dataFetch = async () => {
            try {
                const res = await api.get(API_PATH)
                setNewListing(res.data)
             }
            catch(err) {
                console.error('Error fetching data', err)
            }
        }
        dataFetch()
    }, [])

  
  return (
    <div className="grid lg:grid-cols-3 gap-5 m-4  ">
      {newListing.map((views) => (
        <NewArrivalProductViews key={views.uid} views={views} />
      ))}
    </div>
  );
}

export default NewArrivalProducts;
