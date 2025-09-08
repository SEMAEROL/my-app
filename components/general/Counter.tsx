"use client"
type CardProductProps = {
  id: string
  name: string
  description: string
  price: number
  quantity: number
  image: string
  inStock: boolean
}

interface CounterProps {
    cardProduct: CardProductProps;
    increaseFunc: () => void;
    decreaseFunc: () => void;
  }
  
  const Counter: React.FC<CounterProps> = ({ cardProduct, increaseFunc, decreaseFunc }) => {
     const buttonStyle = "w-8 h-8 border flex items-center justify-center text-lg rounded-md"
    return (
        <div className="inline-flex items-center gap-3">
        <button type="button" onClick={decreaseFunc} className="px-3 py-1 border rounded">-</button>
        <div className="min-w-8 text-center">{cardProduct?.quantity ?? 0}</div>
        <button type="button" onClick={increaseFunc} className="px-3 py-1 border rounded">+</button>
      </div>
      
    )
  }
  
  export default Counter
  