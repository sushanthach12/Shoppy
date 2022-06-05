import { useState } from "react";
import OrderContext from "./OrderContext";
import { toast } from 'react-toastify';

const OrderState = (props) => {

    const [products, setProducts] = useState({})

    const createOrder = async() => {
        const res = await fetch(`${process.env.REACT_APP_HOST}/api/Order/order`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'authToken': localStorage.getItem('token')
            },
            body: JSON.stringify({
                "Product":[
                    {
                        "title": "susdchamths",
                        "variant": {
                            "slug": "sjanckk2",
                            "size":"XXL",
                            "color": "green"
                        },
                        "quantity": 2,
                        "amount": 499
                    }
                ]
            })
        })

        const response = await res.json();
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
        console.log(response);
        setProducts(response.Order);
    }


    return (
        <OrderContext.Provider value={{ products, getOrders, createOrder }}>
            {props.children}
        </OrderContext.Provider>
    )
}

export default OrderState;