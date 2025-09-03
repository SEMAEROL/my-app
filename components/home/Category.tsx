"use client";

export default function Category() {
   const categoryList = [
      { name: "ayakkabı" },
   ];
   return (
     <div className="flex items-center justify-center gap-3 md:gap-10 my-5 md:my-10 overflow-x-auto">
        {   
            categoryList.map((category, index) => (
            <div className="border text-slate-500 rounded-full min-w-[120px] flex flex-1 px-4 py-2" key={index}>{category.name}</div>
             )) 
        }
     </div>
   );
}