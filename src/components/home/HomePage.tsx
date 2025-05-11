import React from 'react'
import HeaderArea from "./hero/HeaderArea";
import HeroSection from './hero/HeroSection';
import BannerArea from './hero/BannerArea';
import ProductGridA from './products/ProductGrid';
import ProductShowcase from './products/ProductShowcase';
import Bestsellers from './products/BestSellers';
import RecentlyViewed from './products/RecentlyVieswed';
import ProductShowcaseTabs from './products/ProductShowcaseTable';

const HomePage = () => {
  return (
    <div>
      <HeaderArea />
      <HeroSection />
      <BannerArea />
      <ProductGridA />
      <ProductShowcase />
      <Bestsellers />
      <RecentlyViewed />
      <ProductShowcaseTabs />
    </div>
  )
}

export default HomePage
