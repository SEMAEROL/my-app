'use client'

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

const DetailClient = ({ product }: { product: Product }) => {
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
    </div>
  )
}

export default DetailClient
