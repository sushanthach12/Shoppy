import { useState } from "react";
import CartContext from "./CartContext";


const CartState = (props) => {

    const [cartItems, setCartItems] = useState({})

    const AddToCart = async (title, slug, size, color, quantity, amount) => {
        console.log(title, slug, size, color, quantity, amount );

        const res = await fetch(`${process.env.REACT_APP_HOST}/api/cart/addToCart`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')
            },

            body: JSON.stringify({ 
                "title": title, 
                "slug": slug, 
                "size": size, 
                "color": color, 
                "quantity": quantity, 
                "amount": amount, 
            })

        })
        const response = await res.json();
        console.log(response);
    }

    return (
        <CartContext.Provider value={{ cartItems, AddToCart }}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartState;