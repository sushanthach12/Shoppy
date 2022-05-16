import { useState } from "react";
import ProductContext from "./ProductContext";


const ProductState = (props) => {
  const [tshirts, setTshirts] = useState({})
  const [hoodies, setHoodies] = useState({})
  const [pants, setPants] = useState({})

  const [product, setProduct] = useState({}) // For Slug page
  const [variants, setVariants] = useState({}) // For Slug page

  const getProducts = async () => {

    const res = await fetch(`${process.env.REACT_APP_HOST}/api/product/getproducts`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      }
    })

    const response = await res.json();
    setTshirts(response.Products.Tshirts);
    setHoodies(response.Products.Hoodies);
    setPants(response.Products.Pants);
    // console.table(response.Products.Tshirts);
  }


  const getProduct = async (slug) => {
    const res = await fetch(`${process.env.REACT_APP_HOST}/api/product/getproduct`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },

      body: JSON.stringify({slug})

    })
    const response = await res.json();
    
    setProduct(response.Product)
    setVariants(response.Variants)
  }

  return (
    <ProductContext.Provider value={{ tshirts, hoodies, variants, pants, product, getProducts, getProduct }}>
      {props.children}
    </ProductContext.Provider>
  )
}

export default ProductState;