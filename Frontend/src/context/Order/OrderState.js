import { useState } from "react";
import OrderContext from "./OrderContext";
import { toast } from 'react-toastify';

const OrderState = (props) => {

    const getOrders = () => {
        const res = await fetch(`${process.env.REACT_APP_HOST}/api/cart/addToCart`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'authToken': localStorage.getItem('token')
            },
        })
    }


    return (
        <OrderContext.Provider value={{  }}>
            {props.children}
        </OrderContext.Provider>
    )
}

export default OrderState;