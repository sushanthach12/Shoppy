import { useState } from "react";
import CartContext from "./CartContext";
import { toast } from 'react-toastify';


const CartState = (props) => {

    const [cartItems, setCartItems] = useState([])


    const AddToCart = async (title, slug, size, color, quantity, amount) => {

        const res = await fetch(`${process.env.REACT_APP_HOST}/api/cart/addToCart`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'authToken': localStorage.getItem('token')
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
        FetchCart()
    }
    const FetchCart = async () => {

        const res = await fetch(`${process.env.REACT_APP_HOST}/api/cart/fetchcart`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'authToken': localStorage.getItem('token')
            },
        })
        const response = await res.json();
        setCartItems(response.Cart)
    }

    const RemoveFromCart = async (slug) => {

        const res = await fetch(`${process.env.REACT_APP_HOST}/api/cart/removeitem`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'authToken': localStorage.getItem('token')
            },
            body : JSON.stringify({"slug":slug})
        })
        const response = await res.json();
        if (response.Success) {
            toast.success('Item Removed From Cart Successfully!', {
                position: "top-left",
                autoClose: 1600,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            FetchCart()
        }

    }

    return (
        <CartContext.Provider value={{ cartItems, AddToCart, FetchCart, RemoveFromCart }}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartState;