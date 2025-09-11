"use client"

import Banner from "@/components/home/Banner";
import Category from "@/components/home/Category";
import Products from "@/components/home/Products";
import { useState } from "react";


export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  return (
   <div>
    <Banner />
    <Category selectedCategory={selectedCategory} onSelect={setSelectedCategory} /> 
    <Products selectedCategory={selectedCategory} />
   </div>
  );
}  




