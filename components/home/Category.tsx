"use client";

import { products } from "@/utils/products";

type Props = {
  selectedCategory: string | null;
  onSelect: (category: string | null) => void;
};

export default function Category({ selectedCategory, onSelect }: Props) {
   const categoryList = Array.from(
     new Set(products.map(p => p.category))
   ).filter(Boolean) as string[];

   const handleClick = (name: string) => {
     onSelect(selectedCategory === name ? null : name);
   };

   return (
     <div className="flex items-center justify-center md:px-10 gap-3 md:gap-10 my-5 md:my-10 overflow-x-auto">
        {
          categoryList.map((name) => (
            <button
              key={name}
              onClick={() => handleClick(name)}
              className={`border rounded-full min-w-[120px] px-4 py-2 text-center whitespace-nowrap cursor-pointer transition-colors ${selectedCategory === name ? "bg-slate-800 text-white border-slate-800" : "text-slate-500"}`}
            >
              {name}
            </button>
          ))
        }
     </div>
   );
}