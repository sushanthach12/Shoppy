import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar';
import About from './components/About';
import Tshirts from './components/Tshirts'
import Pants from './components/Pants'
import Hoodies from './components/Hoodies'
import Footer from './components/Footer';
import Home from './components/Home';
import User from './components/User';
import Login from './components/Login';
import Signup from './components/Signup';
import Orders from './components/Orders';
import Cart from './components/Cart';
import Slug from './product/Slug';
import CartItem from './product/CartItem';
import OrderItem from './product/OrderItem';

import UserState from './context/User/UserState';
import ProductState from './context/Product/ProductState'
import CartState from './context/Cart/CartState';
import Checkout from './components/Checkout';
import ScrollButton from './components/ScroolButton';
import NotFound from './components/Error';
import OrderState from './context/Order/OrderState';
import Ordered from './product/Ordered';


function App() {

  const [user, setUser] = useState({ loggedIn: false })
  const [Key, setKey] = useState(Math.random)

  // For sideCart navabar
  const [toggle, setToggle] = useState(false)



  return (
    <>
      <ProductState>
        <Router >
          <UserState >
            <CartState>
              <OrderState>
                {Key && <Navbar key={Key} setUser={setUser} setKey={setKey} user={user} toggle={toggle} setToggle={setToggle} />}

                <div className="container">

                  <Routes >
                    <Route exact path='/' element={<Home />}></Route>
                    <Route exact path='/home' element={<Home />}></Route>
                    <Route exact path='/about' element={<About />}></Route>
                    <Route exact path='/tshirts' element={<Tshirts />}></Route>
                    <Route exact path='/pants' element={<Pants />}></Route>
                    <Route exact path='/hoodies' element={<Hoodies />}></Route>
                    <Route exact path='/login' element={<Login setKey={setKey} setUser={setUser} />}></Route>
                    <Route exact path='/signup' element={<Signup setKey={setKey} setUser={setUser} />}></Route>


                    <Route path='/product/:slug' element={<Slug toggle={toggle} setToggle={setToggle} />} />
                    <Route exact path='/user' element={<User />}></Route>
                    <Route exact path='/cart' element={<Cart user />}></Route>
                    <Route exact path='/cart/cartitem' element={<CartItem />}></Route>
                    <Route exact path='/orders' element={<Orders />}></Route>
                    <Route exact path='/orders/orderitem/:oid' element={<OrderItem />}></Route>
                    <Route exact path='/orders/ordered/:oid' element={<Ordered/>}></Route>
                    <Route exact path='/checkout' element={<Checkout />}></Route>
                    <Route path='*' element={<NotFound />}></Route>

                  </Routes>
                  <ScrollButton />
                </div>
                <Footer />
              </OrderState>
            </CartState>
          </UserState>

        </Router>
      </ProductState>
    </>
  );
}


export default App;