import Heading from "../general/Heading"
import { products } from "@/utils/products"
import ProductCard from "./ProductCard"

const Products = () => {
    return (
      <div>
        <Heading text="Tüm ürünler"/>
        <div>
             {
              products.map(product => {
            return (
            <ProductCard key={product.id} product={product}/>
                   )
                    } )
              }
         </div>

      </div>
    )
  }
  
  export default Products
  