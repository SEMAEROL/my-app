"use client";

export default function Category() {
   const categoryList = [
      { name: "ayakkabı" },
      { name: "elbise" },
      { name: "pantolon" },
      { name: "kazak" },
      { name: "mont" },
      { name: "şapka" },
      { name: "gömlek" },
      { name: "pantolon" },
   ];
   return (
     <div className="flex items-center justify-center md:px-10  gap-3 md:gap-10 my-5 md:my-10 overflow-x-auto">
        {   
            categoryList.map((category, index) => (
            <div className="border text-slate-500 rounded-full min-w-[120px] flex items-center justify-center cursor-pointer px-4 py-2 text-center" key={index}>{category.name}</div>
             )) 
        }
     </div>
   );
}