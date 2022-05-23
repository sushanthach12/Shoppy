import React, { useState, useContext } from 'react'
import styles from '../styles/login.module.css'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import userContext from '../context/User/UserContext'


const Login = ({ setKey, setUser }) => {
  const context = useContext(userContext);
  const { handleLogin } = context;



  const [credentials, setCredentials] = useState({ email: "", password: "" })

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    handleLogin(credentials,setCredentials, setKey, setUser)
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
      <form onSubmit={handleSubmit}>
        <div className={styles.LoginMainContent}>
          <div className={styles.LoginContent}>

            <div className={styles.LoginHeadDiv}>
              <h2 className={styles.LoginTitle}>Login to continue</h2>
              <p className={styles.LoginSubTitle}>or <Link to={"/signup"}>Signup</Link> with Dystro</p>
            </div>

            <div className={styles.LoginCredentials}>

              <div className={styles.LoginEmail}>
                <label htmlFor="email" className={styles.credTitle}>Email</label>
                <input autoComplete='off' type="email" id="email" name="email" className={styles.LoginInp} placeholder="Enter your email" onChange={handleChange} value={credentials.email} />
              </div>

              <div className={styles.LoginPass}>
                <label htmlFor="password" className={styles.credTitle}>Password</label>
                <input autoComplete='off' type="password" id="password" name="password" className={styles.LoginInp} placeholder="Enter your password" value={credentials.password} onChange={handleChange} />
              </div>



              <div className={styles.LoginBtnDiv}>
                <button className={styles.LoginBtn} onClick={handleSubmit}>Login</button>
              </div>

              <hr style={{ color: "gray", width: "16rem", margin: ".5rem 0" }} />

              <div className={styles.LoginLinks}>
                <div style={{ margin: "0 0 1rem 0" }}>
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
            </div>
          </div>
        </div>
      </form>
    </main>
  )
}

export default Login