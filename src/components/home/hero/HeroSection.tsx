import { Menu, ChevronRight } from "lucide-react";
import TopSellingProducts from "./herosection/TopSellingProducts";
import NewArrivalProducts from "./herosection/NewArrivalProducts";

const categories = [
  "Value of the Day",
  "Top 100 Offers",
  "New Arrivals",
  "Laptops & Computers",
  "Cameras & Photography",
  "Smart Phones & Tablets",
  "Video Games & Consoles",
  "TV & Audio",
  "Gadgets",
  "Car Electronic & GPS",
  "Accessories",
];

const HeroSection = () => {
  return (
    <section className="">
      <div>
        <TopSellingProducts />
      </div>
      <div>
        <NewArrivalProducts />
      </div>
    </section>
  );
};

export default HeroSection;
