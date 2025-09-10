"use client"
import { CartContextProvider } from "@/app/hooks/useCart";

const CartProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <CartContextProvider>{children}</CartContextProvider>
  );
};

export default CartProvider;
