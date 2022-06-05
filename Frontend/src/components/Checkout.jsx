import React, { useContext } from 'react'
import styles from "../styles/checkout.module.css"
import orderContext from '../context/Order/OrderContext'
import { useNavigate } from 'react-router-dom';


const Checkout = () => {

  const context = useContext(orderContext);
  const { createOrder } = context;

  const navigate = useNavigate();

  const handleClick = () => {
    createOrder();
    let url = `/orders/orderitem`
    navigate(url)
  }

  return (
    <div className={styles.CHECKOUT}>
      <section className={styles.CheckoutSec}>
        <div className={styles.CheckoutContentDiv}>

          <div className={styles.CheckoutHead}>
            <h1 className={styles.CheckoutTitle}>Checkout</h1>
          </div>
          {/* <hr style={{ color: "gray", width: "80%", margin: ".5rem 0" }} /> */}


          <div className={styles.CartDiv}>
            <div className={styles.CartHead}>
              <h3 className={styles.CartTitle}>1. Your Cart Details</h3>
            </div>

            <div className={styles.CartItemsDiv}>
              <span>Subtotal</span>
              <div className={styles.CartItems}>
                <div className={styles.CartItem}>
                  <span className="title-font font-medium">Cart Item title here</span>
                  <span className="title-font font-medium">Item Size</span>
                  <span className="title-font font-medium">Item Color</span>
                  <span className="title-font font-medium">item Quantity</span>
                  <span className="title-font font-medium">item Amount</span>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.CheckoutDetailsDiv}>
            <div className={styles.CheckoutCartHead}>
              <h3 className={styles.CheckouCartTitle}>2. Delivery Details</h3>
            </div>
            <div className={styles.CheckoutDetails}>
              <div className={styles.CheckoutNameEmailDiv}>
                <div className={styles.CheckoutInputsDiv}>
                  <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
                  <input autoComplete='off' type="text" id="name" name="name" className={styles.CheckoutInputs} />
                </div>

                <div className={styles.CheckoutInputsDiv}>
                  <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                  <input autoComplete='off' type="email" id="email" name="email" className={styles.CheckoutInputs} />
                </div>
              </div>
              <div className={styles.CheckoutNameEmailDiv}>
                <div className={styles.CheckoutInputsDiv}>
                  <label htmlFor="phone" className="leading-7 text-sm text-gray-600">Phone Number</label>
                  <input autoComplete='off' type="number" inputMode='decimal' id="phone" name="phone" className={styles.CheckoutInputs} />
                </div>

                <div className={styles.CheckoutInputsDiv}>
                  <label htmlFor="pincode" className="leading-7 text-sm text-gray-600">Pincode</label>
                  <input autoComplete='off' type="number" id="pincode" name="pincode" className={styles.CheckoutInputs} />
                </div>
              </div>
              <div className={styles.CheckoutNameEmailDiv}>
                <div className={styles.CheckoutInputsDiv}>
                  <label htmlFor="state" className="leading-7 text-sm text-gray-600">State</label>
                  <input autoComplete='off' type="text" id="state" name="state" className={styles.CheckoutInputs} />
                </div>

                <div className={styles.CheckoutInputsDiv}>
                  <label htmlFor="city" className="leading-7 text-sm text-gray-600">City</label>
                  <input autoComplete='off' type="text" id="city" name="city" className={styles.CheckoutInputs} />
                </div>
              </div>
              <div className={styles.CheckoutNameEmailDiv}>
                <div className={styles.CheckoutInputsDiv}>
                  <label htmlFor="address" className="leading-7 text-sm text-gray-600">Address</label>
                  <input autoComplete='off' type="text" id="address" name="address" className={styles.CheckoutInputs} />
                </div>
              </div>

              <div className={styles.CheckoutBtnDiv}>
                <button className={styles.CheckoutBtn} onClick={() => { handleClick() }}>Pay Now</button>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  )
}

export default Checkout