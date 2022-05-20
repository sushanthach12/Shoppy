import React, { useEffect, useContext } from 'react'
import styles from '../styles/cart.module.css'
import cartContext from '../context/Cart/CartContext'


const Cart = () => {
  const Cartcontext = useContext(cartContext);
  const { cartItems, FetchCartItems } = Cartcontext;

  useEffect(() => {
    FetchCartItems()
    // eslint-disable-next-line
  }, [])
  console.table(cartItems);


  return (

    <section className={styles.CartMain}>
      <h1 className={styles.CartHead}>Shopping Cart</h1>
      <hr className='hr' />
      <div className={styles.CartItemDiv}>
        {cartItems.map((item) => {
            console.log(item.title);
        })}
      
            <div className={styles.CartItem} >
              <div className={styles.CartItemImgDiv}>
                <img src="https://m.media-amazon.com/images/I/61bDoqhvEPL._UX679_.jpg" alt="ecommerce" className={styles.CartItemImg} />
              </div>

              <div className={styles.CartItemContentDiv}>
                <h2 className={styles.CartItemTitle}>title</h2>
                <p className={styles.CartItemStatus}>in stock or not</p>
                <p className={styles.CartItemSize}>Size :</p>
                <p className={styles.CartItemColor}>Color :</p>

                {/* <div className={styles.CartItemTrack}>
            <p className={styles.CartItemOrderDate}>Ordered Date</p>
            <Link to={"/cart/cartitem"}><p className={styles.CartItemrackOr}>Track your order <IoIosArrowDroprightCircle /></p></Link>
          </div> */}

                <div className={styles.CartItembottom}>
                  <div className={styles.sizeOption}>
                    <span className={styles.CartItemQty}>Qty : </span>

                    <select className={styles.select}>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                    </select>

                  </div>
                  <div className={styles.CartItemOptions}>
                    <button className={styles.CartDltBtn}>Delete</button>
                  </div>
                </div>

              </div>


            </div>
    

      </div>
      <div className={styles.CartCheckout}>

        <button className={styles.CartCheckoutBtn}>Checkout</button>
      </div>
    </section>
  )
}

export default Cart