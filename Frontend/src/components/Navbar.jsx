import React, { useState, useContext, useEffect } from 'react'
import styles from '../styles/navbar.module.css'
import { Link, useLocation } from 'react-router-dom'
import { RiAccountCircleFill } from 'react-icons/ri'
import { IoMdArrowDropdown } from 'react-icons/io'
import { GiHamburgerMenu } from 'react-icons/gi'
import { MdDelete } from 'react-icons/md'
import userContext from '../context/User/UserContext'
import LoadingBar from 'react-top-loading-bar'


const Navbar = ({ user, setUser, setKey, toggle, setToggle }) => {
    const context = useContext(userContext);
    const { getUser } = context;

    const [username, setUsername] = useState("")
    const [progress, setProgress] = useState(0)


    const handleLogout = () => {
        localStorage.removeItem('token')
        setKey(Math.random)
        setUser({ loggedIn: false })
    }

    useEffect(() => {
        const GetUser = async () => {
            const res = await getUser()
            setUsername(res)
        }
        GetUser()
    }, [])

    let loc = useLocation()
    useEffect(() => {
        setProgress(30)
        setProgress(60)
        setProgress(100)
    }, [loc.pathname])



    return (
        <>
            <LoadingBar
                color='linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(255,0,0,1) 0%, rgba(240,0,0,1) 100%, rgba(0,212,255,1) 100%)'
                progress={progress}
                height={3}
                waitingTime={800}
                onLoaderFinished={() => setProgress(0)}
            />

            <div>
                <header className={styles.navbar}>
                    <div className={styles.nav}>
                        <div className={styles.head}>
                            {/* <img className={styles.logo} src="/logo.png" alt="ss" /> */}
                            <Link to={"/"} className={styles.tittle}><span className={styles.headD}>D</span>ystro</Link>
                        </div>
                        <input type="checkbox" id='toggler' className={styles.toggler}></input>
                        <label htmlFor='toggler'><GiHamburgerMenu className={styles.menu} size={25} /></label>
                        <div className={styles.navLinks} id="navLinks" >
                            <div className={styles.links}>
                                <Link to={"/"} className={styles.navLink}>Home</Link>
                                <Link to={"/about"} className={styles.navLink}>About</Link>
                                <div className={styles.dropdown}>
                                    <input type="checkbox" id='pro' />
                                    <label htmlFor='pro' className={styles.dropbtn} >Products<IoMdArrowDropdown /></label>
                                    <div className={styles.dropdownContent} id="dropdownContent">
                                        <Link to="/tshirts" className={styles.navLink} >TShirts</Link>
                                        <Link to="/pants" className={styles.navLink} >Pants</Link>
                                        <Link to="/hoodies" className={styles.navLink} >Hoodies</Link>
                                    </div>
                                </div>
                            </div>
                            <hr style={{ height: "1.5rem", width: "0", margin: "0 1rem" }} />
                            <div className={styles.navButton}>
                                <div className={styles.accDrop}>
                                    <div className={styles.userInfo}>
                                        {((localStorage.getItem('token'))) ? <label className={styles.ACCIMG}><RiAccountCircleFill size={28} className={styles.navAccimg} /></label> : ""}
                                        {localStorage.getItem('token') && <p className={styles.username}>{username}</p>}
                                    </div>
                                    <div className={styles.accDropcontent} id="accDrop">
                                        <Link to="/orders" className={styles.navLink} >Your Orders</Link>
                                        <Link to="/user" className={styles.navLink} >Your Account</Link>
                                        <Link to="/cart" className={styles.navLink} >Your Cart</Link>
                                        <Link to={"/login"}><button className={styles.btn} onClick={() => { handleLogout() }}>Logout</button></Link>
                                    </div>
                                </div>
                                {(!localStorage.getItem('token')) ? <Link to={"/login"}><button className={styles.btn}>Login</button></Link> : ""}
                                {(!localStorage.getItem('token')) ? <Link to={"/signup"}><button className={styles.btn}>Signup</button></Link> : ""}
                            </div>
                        </div>
                    </div>




                    <div className={styles.SideCart} style={{display: `${toggle?"block":"none"}`}} >
                        <div className={styles.SideCartItemDiv}>
                            <h4 className={styles.SideCartSubtotal}>Subtotal :₹5000 </h4>
                            <ol>
                                <li>
                                    <div className={styles.SideCartItem}>
                                        <p>Item title</p>
                                        <div className={styles.AddDltItem}>
                                            <button className={styles.SideCartBtn}>-</button>
                                            <span className={styles.SideCartItemQty}>1</span>
                                            <button className={styles.SideCartBtn}>+</button>
                                            <span className={styles.SideCartDltBtn}><MdDelete /></span>

                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className={styles.SideCartItem}>
                                        <p>Item title</p>
                                        <div className={styles.AddDltItem}>
                                            <button className={styles.SideCartBtn}>-</button>
                                            <span className={styles.SideCartItemQty}>1</span>
                                            <button className={styles.SideCartBtn}>+</button>
                                            <span className={styles.SideCartDltBtn}><MdDelete /></span>

                                        </div>
                                    </div>
                                </li>
                            </ol>

                        </div>
                    </div>
                </header >

            </div >

        </>
    )
}

export default Navbar