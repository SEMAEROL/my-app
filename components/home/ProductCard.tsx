import React from "react"
import Rating from "@mui/material/Rating"
import textClip from "@/utils/TextClip"
import Image from "next/image"

interface Product {
  id: string
  name: string
  description: string
  price: number
  brand: string
  category: string
  inStock: boolean
  reviews: unknown[]

}

interface ProductCardProps {
  product: Product
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  let productRating = product?.reviews?.reduce((acc: number, item: any) => acc + item.rating, 0) / product?.reviews?.length

  return (
    <div className="p-4 border rounded-md">
      <div className="font-semibold">{product.name}</div>
      <Rating name="read-only" value={productRating} readOnly />

      <div className="text-sm text-slate-600">{product.description}</div>
      <div className="mt-2 font-medium">${product.price}</div>
    </div>
  )
}

export default ProductCard
