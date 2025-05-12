import HeroSection from './hero/HeroSection';
import ProductsGrids from "./products/ProductGrid";
import Bestsellers from './products/BestSellers';
import RecentlyViewed from './products/RecentlyVieswed';
import ProductShowcaseTabs from './products/ProductShowcaseTable';
import SearchHeader from './hero/SearchHeader';

const HomePage = () => {
  return (
    <div>
      <SearchHeader />
      <HeroSection />
      <ProductsGrids />
      <Bestsellers />
      <RecentlyViewed />
      <ProductShowcaseTabs />
    </div>
  );
}

export default HomePage
