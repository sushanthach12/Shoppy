import React, { useState, useContext, useEffect } from 'react'
import styles from '../styles/navbar.module.css'
import { Link, useLocation } from 'react-router-dom'
import { RiAccountCircleFill } from 'react-icons/ri'
import { IoMdArrowDropdown } from 'react-icons/io'
import { GiHamburgerMenu } from 'react-icons/gi'
import userContext from '../context/User/UserContext'
import LoadingBar from 'react-top-loading-bar'


const Navbar = ({ user, setUser, setKey}) => {
    const context = useContext(userContext);
    const { getUser } = context;

    const [username, setUsername] = useState("")
    const [progress, setProgress] = useState(0)
    const [isLoading, setIsLoading] = useState(Math.random())


    let loc = useLocation()

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
        setProgress(30)
        setIsLoading(Math.random())
        setProgress(60)
        setProgress(100)
    }, [])


    return (
        <>
            
            {isLoading && <LoadingBar
                color='#f11946'
                height={3}
                progress={progress}
            />}
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


                </header >
            </div >
        </>
    )
}

export default Navbar