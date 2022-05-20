import { useState } from "react";
import CartContext from "./CartContext";


const CartState = (props) => {

    const [cartItems, setCartItems] = useState({})

    const AddToCart = async (title,image, slug, size, color, quantity, amount) => {

        const res = await fetch(`${process.env.REACT_APP_HOST}/api/cart/addToCart`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')
            },

            body: JSON.stringify({ 
                "title": title,
                "image": image,
                "slug": slug, 
                "size": size, 
                "color": color, 
                "quantity": quantity, 
                "amount": amount, 
            })

        })
        const response = await res.json();
    }
    
    const FetchCartItems = async () => {

        const res = await fetch(`${process.env.REACT_APP_HOST}/api/cart/fetchcartItem`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')
            }
        })
        const response = await res.json();
        console.log(response);
        setCartItems(response.Cart)
        setCartItems(response.Cart)
    }


    return (
        <CartContext.Provider value={{ cartItems, AddToCart, FetchCartItems }}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartState;