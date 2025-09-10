'use client'

import React, { createContext, useState, useCallback, useContext, useEffect } from "react";

interface CartContextProps {
  productCartQty: number;
  addToBasket:(product: CardProductProps) => void
}

const CartContext = createContext<CartContextProps | null>(null);

interface Props { children: React.ReactNode }

export type CardProductProps = {
  id: string
  name: string
  description: string
  price: number
  quantity: number
  image: string
  inStock: boolean
}

export const CartContextProvider = ({ children }: Props) => {
  const [productCartQty, setProductCartQty] = useState(0); 
  const [cartPrdcts, setCartPrdcts] = useState<CardProductProps[] | null>(null);

  useEffect(() => {
    let getItem: any = localStorage.getItem('cart');
    let getItemParse: CardProductProps[] | null = JSON.parse(getItem);
    setCartPrdcts(getItemParse);
  }, []);
  

  const addToBasket = useCallback((product: CardProductProps) => {
    setCartPrdcts(prev => {
      const updatedCart = prev ? [...prev, product] : [product];
      return updatedCart;
    });
  }, []);

  let value: CartContextProps = {
    productCartQty,
    addToBasket
  }
  
  return (
    <CartContext.Provider value={value}>{children}</CartContext.Provider>
  );
};
const UseCart = () => {
    const context = useContext(CartContext);
    if (context === null) {
      throw new Error('Bir hata durumu mevcut');
    }
    return context;
  }
  
  export default UseCart;
  



