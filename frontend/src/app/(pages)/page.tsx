'use client'

import { useEffect, useState } from "react";
import Hero from "../components/home/hero/Hero";
import HomeProducts from "../components/home/home-products/FeatuedProducts";
import HomeCategories from "../components/home/home-categories/HomeCategories";
import { Product } from "../shared-components/product/interfaces/Product.interface";
import HappyCustomers from "../components/home/happy-customers/HappyCustomers";

export default function Home() {
  const [products, setProducts] = useState<{ newArrivals: Product[]; topSelling: Product[] } | null>(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await fetch('/data/products.json');
    const data = await res.json();
    setProducts(data);
  };
  
  if (!products) return;
  
  return (
    <>
      <Hero />
      <HomeProducts products={products.newArrivals} category="New Arrivals" />
      <HomeProducts products={products.topSelling} category="Top Selling" />
      <HomeCategories/>
      <HappyCustomers/>
    </>
  );
}
