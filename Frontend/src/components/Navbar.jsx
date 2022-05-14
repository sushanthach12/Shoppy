import React from 'react'
import styles from '../styles/navbar.module.css'
import { Link } from 'react-router-dom'
import { RiAccountCircleFill } from 'react-icons/ri'
import { IoMdArrowDropdown } from 'react-icons/io'
import { GiHamburgerMenu } from 'react-icons/gi'


const Navbar = ({ user, setUser, setKey }) => {
    const handleLogout = () => {
        localStorage.removeItem('token')
        setKey(Math.random)
        setUser({ loggedIn: false })
    }
    
    return (
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
                                {((localStorage.getItem('token'))) ? <label className={styles.ACCIMG}><RiAccountCircleFill size={28} className={styles.navAccimg} /></label> : ""}
                                <div className={styles.accDropcontent} id="accDrop">
                                    <Link to="/orders" className={styles.navLink} >Your Orders</Link>
                                    <Link to="/user" className={styles.navLink} >Your Account</Link>
                                    <Link to="/cart" className={styles.navLink} >Cart</Link>
                                    <Link to={"/login"}><button className={styles.btn} onClick={() => { handleLogout() }}>Logout</button></Link>
                                </div>
                            </div>
                            {(!localStorage.getItem('token')) ? <Link to={"/login"}><button className={styles.btn}>Login</button></Link> : ""}
                            {(!localStorage.getItem('token')) ? <Link to={"/signup"}><button className={styles.btn}>Signup</button></Link> : ""}
                        </div>
                    </div>
                </div>


            </header>
        </div>
    )
}

export default Navbar