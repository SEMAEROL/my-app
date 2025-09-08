"use client"
import React from "react"
import Rating from "@mui/material/Rating"
import textClip from "@/utils/TextClip"
import Image from "next/image"
import Link from "next/link"

interface Product {
  id: string
  name: string
  description: string
  price: number
  brand: string
  category: string
  inStock: boolean
  reviews: unknown[]
  image?: string

}

interface ProductCardProps {
  product: Product
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  let productRating = product?.reviews?.reduce((acc: number, item: any) => acc + item.rating, 0) / product?.reviews?.length
 
  return (
    <Link href={`/product/${product.id}`} className="block">
    <div className="p-4 border rounded-md hover:shadow">
      {product.image && (
        <div className="mb-2 rounded bg-gray-50 flex items-center justify-center" style={{height: 180}}>
          <Image
            src={product.image}
            alt={product.name}
            width={300}
            height={180}
            className="object-contain w-auto h-full"
            sizes="(max-width: 768px) 90vw, 300px"
          />
        </div>
      )}
      <div className="font-semibold">{product.name}</div>
      <Rating name="read-only" value={productRating} readOnly />

      <div className="text-sm text-slate-600">{product.description}</div>
      <div className="mt-2 font-medium">${product.price}</div>
    </div>
    </Link>
  )
}

export default ProductCard
