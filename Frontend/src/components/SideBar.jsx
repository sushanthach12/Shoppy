import React from 'react'
import { Link } from 'react-router-dom'
import styles from  '../styles/sidebar.module.css'
import {RiAccountCircleFill} from 'react-icons/ri'


const SideBar = () => {
    return (
        <div className={styles.SideBar}>
            <div className={styles.head}>
                <RiAccountCircleFill size={25}/>
                <p className={styles.headName}>Sushanth Acharya</p>
            </div>
            <div className={styles.sidenav}>
                <ul >
                    <li className={styles.sidenavItem}>View Profile</li>
                    <li className={styles.sidenavItem}>Your orders</li>
                    <li className={styles.sidenavItem}>View Cart</li>
                    <li className={styles.sidenavItem}>Account Details</li>
                    <li className={styles.sidenavItem}>Settings</li>
                </ul>
            </div>
            <div className={styles.foo}>
                <Link to={"/login"}><button className={styles.sidelogout}>Logout</button></Link>
            </div>

        </div>
    )
}

export default SideBar