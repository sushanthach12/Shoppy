import React, { useContext, useEffect } from 'react'
import styles from '../styles/orders.module.css'
import { IoIosArrowDroprightCircle } from 'react-icons/io'
import { Link } from 'react-router-dom'
import orderContext from '../context/Order/OrderContext'

const Orders = () => {

  const context = useContext(orderContext);
  const { getOrders, products } = context;

  useEffect(() => {
    getOrders();
  }, [])


  return (
    <section className={styles.OrderMain}>
      <h1 className={styles.OrderHead}>Your Orders</h1>
      <div className={styles.OrderItemDiv}>
        {Object.keys(products).map((item) => {
          return (Object.keys(products[item].Product).map((i) => {
            return (
              <div className={styles.OrderItem} key={Math.random()}>
                <div className={styles.OrderItemImgDiv}>
                  <img src="https://m.media-amazon.com/images/I/61bDoqhvEPL._UX679_.jpg" alt="ecommerce" className={styles.OrderItemImg} />
                </div>

                <div className={styles.OrderItemContentDiv}>
                  <h3 className={styles.OrderItemTitle}>{products[item].Product[i].title} ({products[item].Product[i].size}/ {products[item].Product[i].color})</h3>
                  <div className={styles.OrderItemTrack}>
                    <p className={styles.OrderItemDelivered}>{products[item].status}</p>
                    <p className={styles.OrderItemOrderDate}>Ordered Date : {new Date(products[item].createdAt).toLocaleString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"})}</p>
                    <Link to={`/orders/orderitem/${products[item].OrderId}`}><p className={styles.OrderItemrackOr}>Track your order <IoIosArrowDroprightCircle /></p></Link>
                  </div>
                </div>
              </div>
            )
          }))
        })}

      </div>
    </section>
  )
}

export default Orders