'use client'

import { useState } from 'react'
import Counter from '@/components/general/Counter'
import Button from '@/components/general/Button'

type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  brand: string;
  category: string;
  inStock: boolean;
  image?: string;
};
export type CardProductProps = {
    id: string
    name: string
    description: string
    price: number
    quantity: number
    image: string
    inStock: boolean
  }
  

const DetailClient = ({ product }: { product: Product }) => {
  const [cardProduct, setCardProduct] = useState<CardProductProps>({
    id: product.id,
    name: product.name,
    description: product.description,
    price: product.price,
    quantity: 1,
    image: product.image ?? '',
    inStock: product.inStock,
  })

  const increaseFunc = () => {
    if (cardProduct.quantity === 10) return
    setCardProduct(prev => ({ ...prev, quantity: prev.quantity + 1 }))
  }

  const decreaseFunc = () => {
    if (cardProduct.quantity === 1) return
    setCardProduct(prev => ({ ...prev, quantity: prev.quantity - 1 }))
  }

  return (
    <div className="p-4">
      {product.image && (
        <div className="mb-4 rounded bg-gray-50 flex items-center justify-center" style={{height: 320}}>
          {/* Next/Image is optional here; <img> works too. */}
          <img src={product.image} alt={product.name} className="object-contain h-full w-auto" />
        </div>
      )}
      <h1 className="text-2xl font-semibold mb-2">{product.name}</h1>
      <p className="text-sm text-gray-600 mb-4">{product.description}</p>
      <div className="space-y-1">
        <div>Marka: {product.brand}</div>
        <div>Kategori: {product.category}</div>
        <div>Fiyat: ${product.price}</div>
        <div>Stok: {product.inStock ? 'Var' : 'Yok'}</div>
      </div>
      <div className="mt-4">
        <Counter cardProduct={cardProduct} increaseFunc={increaseFunc} decreaseFunc={decreaseFunc} />
        <div className="text-lg md:text-2xl text-orange-600 mt-3">
            <Button text="Sepete Ekle" small onClick={() => { /* TODO: add to cart handler */ }} />
        </div>
 
      </div>
    </div>
  )
}

export default DetailClient
