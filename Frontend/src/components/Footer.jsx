import React from 'react'
import styles from '../styles/footer.module.css'
import { Link } from 'react-router-dom'


const Footer = () => {
  return (
    <footer className={styles.Footer}>
      <div className={styles.Foocontainer}>
        <div className={styles.Foohead}>
        <img className={styles.logo} src="/logo.png" alt="ss" />
          {/* <Link to={"/"} className={styles.tittle}><span className={styles.headD}>D</span>ystro</Link> */}
          <p className={styles.FooCopyryt}>Copyright © 2020 Dystro</p>
        </div>
        <div className={styles.proSocLinks}>
          <a className="text-gray-500">
            <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className={styles.proSoclink} viewBox="0 0 24 24">
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
            </svg>
          </a>
          <a className="text-gray-500">
            <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className={styles.proSoclink} viewBox="0 0 24 24">
              <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
            </svg>
          </a>
          <a className="text-gray-500">
            <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className={styles.proSoclink} viewBox="0 0 24 24">
              <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
            </svg>
          </a>

        </div>
      </div>
    </footer>
  )
}

export default Footer