import { useState } from "react";
import ProductContext from "./ProductContext";


const ProductState = (props) => {
  const [products, setProducts] = useState({})

  const [product, setProduct] = useState({}) // For Slug page
  const [variants, setVariants] = useState({}) // For Slug page

  const getProducts = async (category) => {

    const res = await fetch(`${process.env.REACT_APP_HOST}/api/product/getproducts/${category}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      }
    })

    const response = await res.json();
    setProducts(response.Products)
  }


  const getProduct = async (slug) => {
    const res = await fetch(`${process.env.REACT_APP_HOST}/api/product/getproduct/${slug}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      }

    })
    const response = await res.json();
    
    setProduct(response.Product)
    setVariants(response.Variants)
  }

  return (
    <ProductContext.Provider value={{ products, product,variants, getProducts, getProduct }}>
      {props.children}
    </ProductContext.Provider>
  )
}

export default ProductState;