import React, { useEffect, useContext } from 'react'
import styles from '../styles/cart.module.css'
import cartContext from '../context/Cart/CartContext'
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Cart = () => {
  const Cartcontext = useContext(cartContext);
  const { cartItems, FetchCart,RemoveFromCart } = Cartcontext;

  useEffect(() => {
    FetchCart()
  }, [cartItems])

  const handleRemoveCartItem = (slug) => {
    RemoveFromCart(slug)
  }

  return (
    <>
      <ToastContainer
        position="top-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

      <section className={styles.CartMain}>
        <h1 className={styles.CartHead}>Shopping Cart</h1>
        <hr className='hr' />
        <div className={styles.CartItemDiv}>

          {cartItems.map((item) => {
            return (
              <div className={styles.CartItem} key={item._id}>
                <div className={styles.CartItemImgDiv}>
                  <img src="https://m.media-amazon.com/images/I/61bDoqhvEPL._UX679_.jpg" alt="ecommerce" className={styles.CartItemImg} />
                </div>

                <div className={styles.CartItemContentDiv}>
                  <h2 className={styles.CartItemTitle}>{item.title}</h2>
                  <p className={styles.CartItemStatus}>in stock or not</p>

                  <p className={styles.CartItemSize}>Size : {item.size}</p>
                  <p className={styles.CartItemColor}>Color : {item.color}</p>


                  <div className={styles.CartItembottom}>
                    <div className={styles.sizeOption}>
                      <span className={styles.CartItemQty}>Qty : </span>

                      <select className={styles.select} defaultValue={item.quantity}>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                        <option value={6}>6</option>
                      </select>

                    </div>
                    <div className={styles.CartItemOptions}>
                      <button className={styles.CartDltBtn} onClick={()=>{handleRemoveCartItem(item.slug)}}>Delete</button>
                    </div>
                  </div>

                </div>


              </div>
            )
          })}


        </div>
        <div className={styles.CartCheckout}>
          <Link to={"/checkout"}><button className={styles.CartCheckoutBtn}>Checkout</button></Link>
        </div>
      </section>
    </>
  )
}

export default Cart