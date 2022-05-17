import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from './components/About';
import Tshirts from './components/Tshirts'
import Pants from './components/Pants'
import Hoodies from './components/Hoodies'
import Footer from './components/Footer';
import Home from './components/Home';
import User from './components/User';
import Login from './components/Login';
import Signup from './components/Signup';
import { useState } from 'react';

import Orders from './components/Orders';
import Cart from './components/Cart';
import ProductState from './context/Product/ProductState';
import Slug from './product/Slug';
import UserState from './context/User/UserState';

function App() {
  const [user, setUser] = useState({ loggedIn: false })
  const [Key, setKey] = useState(Math.random)

  return (
    <>
      <ProductState>

        <Router >
          <UserState >
            {Key && <Navbar setUser={setUser} setKey={setKey} user={user} />}
            <div className="container">

              <Routes >
                <Route exact path='/' element={<Home />}></Route>
                <Route exact path='/home' element={<Home />}></Route>
                <Route exact path='/about' element={<About />}></Route>
                <Route exact path='/tshirts' element={<Tshirts />}></Route>
                <Route exact path='/pants' element={<Pants />}></Route>
                <Route exact path='/hoodies' element={<Hoodies />}></Route>
                <Route exact path='/user' element={<User />}></Route>
                <Route exact path='/orders' element={<Orders />}></Route>
                <Route exact path='/cart' element={<Cart />}></Route>
                <Route exact path='/login' element={<Login setKey={setKey} setUser={setUser} />}></Route>
                <Route exact path='/signup' element={<Signup />}></Route>

                <Route path='/product/:slug' element={<Slug />} />
              </Routes>
            </div>
            {/* <Footer/> */}
          </UserState>

        </Router>
      </ProductState>
    </>
  );
}


export default App;