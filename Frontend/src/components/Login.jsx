import React, { useState } from 'react'
import styles from '../styles/login.module.css'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Login = ({ setKey, setUser }) => {
  const navigate = useNavigate();

  const [credentials, setCredentials] = useState({ email: "", password: "" })

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch(`${process.env.REACT_APP_HOST}/api/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: credentials.email, password: credentials.password })
    })
    const response = await res.json();
    if (response.Success) {
      setCredentials({ email: "", password: "" })
      setUser({ loggedIn: true })
      setKey(Math.random)
      localStorage.setItem('token', response.authToken);
      toast.success('Logged-In Successfully!', {
        position: "top-left",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setTimeout(() => {
        navigate('/')
      }, 2001);
    } else {
      toast.error('Please enter correct credentials!', {
        position: "top-left",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }

  }

  return (
    <main className={styles.LoginMain}>
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
      <div className={styles.LoginMainContent}>
        <div className={styles.LoginHeadDiv}>
          <h1 className={styles.LoginTitle}>Login to continue</h1>
          <p className={styles.LoginSubTitle}>or Signup with Dystro</p>
        </div>

        <div className={styles.LoginCredentials}>

          <div className={styles.LoginEmail}>
            <label htmlFor="email" className={styles.credTitle}>Email</label>
            <input type="email" id="email" name="email" className={styles.LoginInp} placeholder="Enter your email" onChange={handleChange} value={credentials.email}/>
          </div>

          <div className={styles.LoginPass}>
            <label htmlFor="password" className={styles.credTitle}>Password</label>
            <input type="password" id="password" name="password" className={styles.LoginInp} placeholder="Enter your password" value={credentials.password} onChange={handleChange}/>
          </div>



          <div className={styles.LoginBtnDiv}>
            <button className={styles.LoginBtn}>Login</button>
          </div>

            <hr style={{ color: "gray", width: "16rem", margin: ".5rem 0" }} />

          <div className={styles.LoginLinks}>
            <div style={{margin:"0 0 1rem 0"}}>
              <h3>or Login with</h3>
            </div>
            <div className={styles.LoginLink}>
              <img src="/google.svg" className={styles.LoginSocLogo} />
              <p>Login with Google</p>
            </div>
            <div className={styles.LoginLink}>
              <img src="/facebook.svg" className={styles.LoginSocLogo} />
              <p>Login with Facebook</p>
            </div>
            <div className={styles.LoginLink}>
              <img src="/gmail.svg" className={styles.LoginSocLogo} />
              <p>Login with Gmail</p>
            </div>
          </div>

          {/* <div className={styles.LoginSocDiv}>
            <a className={styles.LoginSocLink}>
              <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a className={styles.LoginSocLink}>
              <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a className={styles.LoginSocLink}>
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
            <a className={styles.LoginSocLink}>
              <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
              </svg>
            </a>
          </div> */}
        </div>
      </div>
    </main>
  )
}

export default Login