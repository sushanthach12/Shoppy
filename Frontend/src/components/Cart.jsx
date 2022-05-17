import React from 'react'
import styles from '../styles/cart.module.css'
import { IoIosArrowDroprightCircle } from 'react-icons/io'
import { Link } from 'react-router-dom'

const Cart = () => {
  return (

    <section className={styles.CartMain}>
      <h1 className={styles.CartHead}>Your Cart</h1>
      <hr className='hr' />
      <div className={styles.CartItemDiv}>
        <div className={styles.CartItem}>
          <div className={styles.CartItemImgDiv}>
            <img src="https://m.media-amazon.com/images/I/61bDoqhvEPL._UX679_.jpg" alt="ecommerce" className={styles.CartItemImg} />
          </div>

          <div className={styles.CartItemContentDiv}>
            <h2 className={styles.CartItemTitle}>Shooting Stars</h2>
            <p className={styles.CartItemDesc}>Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.</p>
            <div className={styles.CartItemTrack}>
              <p className={styles.CartItemOrderDate}>Ordered Date</p>
              <Link to={"/cart/cartitem"}><p className={styles.CartItemrackOr}>Track your order <IoIosArrowDroprightCircle /></p></Link>
            </div>
          </div>
        </div>

        <button className={styles.CartCheckout}>Checkout</button>
      </div>
    </section>
  )
}

export default Cart