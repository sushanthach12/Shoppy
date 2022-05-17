import React from 'react'
import styles from '../styles/orders.module.css'
import { IoIosArrowDroprightCircle } from 'react-icons/io'
import { Link } from 'react-router-dom'

const Orders = () => {
  return (
    <section className={styles.OrderMain}>
      <h1 className={styles.OrderHead}>Your Orders</h1>
      <hr className='hr' />
      <div className={styles.OrderItemDiv}>
        <div className={styles.OrderItem}>
          <div className={styles.OrderItemImgDiv}>
            <img src="https://m.media-amazon.com/images/I/61bDoqhvEPL._UX679_.jpg" alt="ecommerce" className={styles.OrderItemImg} />
          </div>

          <div className={styles.OrderItemContentDiv}>
            <h2 className={styles.OrderItemTitle}>Shooting Stars</h2>
            <p className={styles.OrderItemDesc}>Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.</p>
            <div className={styles.OrderItemTrack}>
              <p className={styles.OrderItemOrderDate}>Ordered Date</p>
              <Link to={"/orders/orderitem"}><p className={styles.OrderItemrackOr}>Track your order <IoIosArrowDroprightCircle /></p></Link>
            </div>
          </div>
        </div>

        <button className={styles.OrderCheckout}>Checkout</button>
      </div>
    </section>
  )
}

export default Orders