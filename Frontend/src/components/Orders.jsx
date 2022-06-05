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

  console.log(products);


  return (
    <section className={styles.OrderMain}>
      <h1 className={styles.OrderHead}>Your Orders</h1>
      <div className={styles.OrderItemDiv}>
        {(products["Product"]).map((item) => {
          return (

            <div className={styles.OrderItem}>
              <div className={styles.OrderItemImgDiv}>
                <img src="https://m.media-amazon.com/images/I/61bDoqhvEPL._UX679_.jpg" alt="ecommerce" className={styles.OrderItemImg} />
              </div>

              <div className={styles.OrderItemContentDiv}>
                <h3 className={styles.OrderItemTitle}>{item.title} (Item Size if any/ item color if any)</h3>
                <div className={styles.OrderItemTrack}>
                  <p className={styles.OrderItemDelivered}>Delivered</p>
                  <p className={styles.OrderItemOrderDate}>Ordered Date : 25/06/2022</p>
                  <Link to={"/orders/orderitem"}><p className={styles.OrderItemrackOr}>Track your order <IoIosArrowDroprightCircle /></p></Link>
                </div>
              </div>
            </div>
          )
        })}


        <div className={styles.OrderItem}>
          <div className={styles.OrderItemImgDiv}>
            <img src="https://m.media-amazon.com/images/I/61bDoqhvEPL._UX679_.jpg" alt="ecommerce" className={styles.OrderItemImg} />
          </div>

          <div className={styles.OrderItemContentDiv}>
            <h3 className={styles.OrderItemTitle}>Item Title (Item Size if any/ item color if any)</h3>
            <div className={styles.OrderItemTrack}>
              <p className={styles.OrderItemDelivered}>Delivered</p>
              <p className={styles.OrderItemOrderDate}>Ordered Date : 25/06/2022</p>
              <Link to={"/orders/orderitem"}><p className={styles.OrderItemrackOr}>Track your order <IoIosArrowDroprightCircle /></p></Link>
            </div>
          </div>
        </div>
        <div className={styles.OrderItem}>
          <div className={styles.OrderItemImgDiv}>
            <img src="https://m.media-amazon.com/images/I/61bDoqhvEPL._UX679_.jpg" alt="ecommerce" className={styles.OrderItemImg} />
          </div>

          <div className={styles.OrderItemContentDiv}>
            <h3 className={styles.OrderItemTitle}>Item Title (Item Size if any/ item color if any)</h3>
            <div className={styles.OrderItemTrack}>
              <p className={styles.OrderItemDelivered}>Delivered</p>
              <p className={styles.OrderItemOrderDate}>Ordered Date : 25/06/2022</p>
              <Link to={"/orders/orderitem"}><p className={styles.OrderItemrackOr}>Track your order <IoIosArrowDroprightCircle /></p></Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Orders