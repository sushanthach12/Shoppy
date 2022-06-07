import { useState } from "react";
import OrderContext from "./OrderContext";
import { toast } from 'react-toastify';

const OrderState = (props) => {

    const [products, setProducts] = useState({})
    const [orderItem, setOrderItem] = useState({})

    const createOrder = async(cart) => {
        const res = await fetch(`${process.env.REACT_APP_HOST}/api/Order/order`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'authToken': localStorage.getItem('token')
            },
            body: JSON.stringify({
                "Product": cart
            })
        })

        const response = await res.json();
        return await response.Order.OrderId
    }
    const getOrders = async() => {
        const res = await fetch(`${process.env.REACT_APP_HOST}/api/Order/getOrders`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'authToken': localStorage.getItem('token')
            },
        })
        
        const response = await res.json();
        setProducts(response.Order);

    }
    const getOrder = async(oid) => {
        const res = await fetch(`${process.env.REACT_APP_HOST}/api/Order/orderItem/${oid}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'authToken': localStorage.getItem('token')
            }
        })
        
        const response = await res.json();
        console.log(response);
        setOrderItem(response.Order)
    }

    return (
        <OrderContext.Provider value={{ products,orderItem, getOrders, createOrder, getOrder }}>
            {props.children}
        </OrderContext.Provider>
    )
}

export default OrderState;