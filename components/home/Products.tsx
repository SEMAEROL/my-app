import Heading from "../general/Heading"
import { products } from "@/utils/products"
import ProductCard from "./ProductCard"

type Props = {
  selectedCategory: string | null
}

const Products = ({ selectedCategory }: Props) => {
    const visible = selectedCategory
      ? products.filter(p => p.category === selectedCategory)
      : products

    return (
      <div>
        <Heading text={selectedCategory ? selectedCategory : "Tüm ürünler"}/>
        <div>
             {
              visible.map(product => (
                <ProductCard key={product.id} product={product}/>
              ))
             }
         </div>

      </div>
    )
  }
  
  export default Products
  