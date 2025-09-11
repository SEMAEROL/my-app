'use client'

import { useState } from 'react'
import Counter from '@/components/general/Counter'
import Button from '@/components/general/Button'
import ReviewComment from '@/components/detail/Comment'
import UseCart from '@/app/hooks/useCart'

type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  brand: string;
  category: string;
  inStock: boolean;
  image?: string;
  reviews?: unknown[];
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
  const { addToBasket } = UseCart();

  const [cardProduct, setCardProduct] = useState<CardProductProps>({
    id: product.id,
    name: product.name,
    description: product.description,
    price: product.price,
    quantity: 1,
    image: product.image ?? '',
    inStock: product.inStock,
  })
  // Reviews state and new review inputs
  type Review = { id: string; user: string; comment: string; rating?: number; createdAt?: string }
  const [reviews, setReviews] = useState<Review[]>(Array.isArray(product.reviews) ? (product.reviews as Review[]) : [])
  const [author, setAuthor] = useState('')
  const [text, setText] = useState('')
  const [rating, setRating] = useState<number | ''>('')

  const increaseFunc = () => {
    if (cardProduct.quantity === 10) return
    setCardProduct(prev => ({ ...prev, quantity: prev.quantity + 1 }))
  }

  const decreaseFunc = () => {
    if (cardProduct.quantity === 1) return
    setCardProduct(prev => ({ ...prev, quantity: prev.quantity - 1 }))
  }

  const addReview = () => {
    const cleanAuthor = author.trim()
    const cleanText = text.trim()
    if (!cleanAuthor || !cleanText) return
    const newReview: Review = {
      id: String(Date.now()),
      user: cleanAuthor,
      comment: cleanText,
      rating: rating === '' ? undefined : rating,
      createdAt: new Date().toISOString().slice(0, 10),
    }
    setReviews(prev => [newReview, ...prev])
    setAuthor('')
    setText('')
    setRating('')
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
            <Button text="Sepete Ekle" small onClick={() => addToBasket(cardProduct)} />
        </div>
        <div className="mt-6">
          <div className="text-lg font-semibold mb-2">Yorumlar</div>
          {reviews?.length ? (
            reviews.map((r) => (
              <ReviewComment key={r.id} prd={r} />
            ))
          ) : (
            <div className="text-sm text-slate-500">Henüz yorum yok.</div>
          )}
        </div>

        <div className="mt-6 space-y-2">
          <div className="text-lg font-semibold">Yorum Ekle</div>
          <input
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            placeholder="Adınız"
            className="border rounded px-3 py-2 w-full"
          />
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Yorumunuz"
            className="border rounded px-3 py-2 w-full"
          />
          <input
            type="number"
            min={1}
            max={5}
            value={rating}
            onChange={(e) => setRating(e.target.value ? Number(e.target.value) : '')}
            placeholder="Puan (1-5)"
            className="border rounded px-3 py-2 w-full"
          />
          <div className="w-full max-w-[250px]">
            <Button text="Gönder" small onClick={() => addReview()} />
          </div>
        </div>

      </div>
    </div>
  )
}

export default DetailClient
