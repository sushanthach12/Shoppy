import React, { useEffect, useContext , useState} from 'react'
import styles from '../styles/cart.module.css'
import cartContext from '../context/Cart/CartContext'
import { Link } from 'react-router-dom';
import { BsFillPatchCheckFill } from "react-icons/bs";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Cart = (user) => {
  const Cartcontext = useContext(cartContext);
  const { cartItems, FetchCart, RemoveFromCart, subTotal } = Cartcontext;

  const [qty, setQty] = useState(0)

  useEffect(() => {
    FetchCart()
    SetQuantity()
  }, [window.onload])
  

  const SetQuantity = async() => {
    let Count = 0;
     Object.keys(cartItems).map((i)=> {
      Count += cartItems[i].quantity
    })
    
    setQty(Count)
  }

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

        {cartItems.length === 0 && <p className={styles.CartEmptyMsg}>Your shopping cart is empty. <br /> Please build your cart</p>}
        {cartItems && cartItems.length !== 0 &&
          <div className={styles.CartContentContainer}>
            <div className={styles.CartItemDiv}>

              {Object.keys(cartItems).map((item) => {
                return (
                  <div className={styles.CartItem} key={Math.random()}>
                    <div className={styles.CartItemImgDiv}>
                      <img src="https://m.media-amazon.com/images/I/61bDoqhvEPL._UX679_.jpg" alt="ecommerce" className={styles.CartItemImg} />
                    </div>

                    <div className={styles.CartItemContentDiv}>
                      <h2 className={styles.CartItemTitle}>{cartItems[item].title}</h2>
                      <p className={styles.CartItemStatus}>in stock or not</p>

                      <p className={styles.CartItemSize}>Size : {cartItems[item].size}</p>
                      <p className={styles.CartItemColor}>Color : {cartItems[item].color}</p>


                      <div className={styles.CartItembottom}>
                        <div className={styles.sizeOption}>
                          <span className={styles.CartItemQty}>Qty : </span>

                          <select className={styles.select} defaultValue={cartItems[item].quantity}>
                            <option value={1}>1</option>
                            <option value={2}>2</option>
                            <option value={3}>3</option>
                            <option value={4}>4</option>
                            <option value={5}>5</option>
                            <option value={6}>6</option>
                          </select>

                        </div>
                        <div className={styles.CartItemOptions}>
                          <button className={styles.CartDltBtn} onClick={() => { handleRemoveCartItem(cartItems[item].slug) }}>Delete</button>
                        </div>
                      </div>

                    </div>


                  </div>
                )
              })}


            </div>


            <div className={styles.CartSubtotalDiv}>
              <div className={styles.CartSubtotalContent}>
                <div className={styles.CartPara}>
                <BsFillPatchCheckFill size={19} color={"green"}/>
                <p className={styles.CartSubtotalPara}>Your order is eligible for FREE Delivery.</p>
                </div>
                <p className={styles.CartSubtotal} >Subtotal ({qty} items) : ₹{subTotal}</p>
                <div className={styles.CartCheckout}>
                  <Link to={"/checkout"}><button className={styles.CartBuyBtn}>Proceed to Buy</button></Link>
                </div>
              </div>
            </div>
          </div>
        }

      </section>
    </>
  )
}

export default Cart