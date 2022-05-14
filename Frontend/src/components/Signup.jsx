import React, { useState } from 'react'
import styles from '../styles/login.module.css'
import { Link ,useNavigate} from 'react-router-dom'


const Signup = () => {

  const [credentials, setCredentials] = useState({ name: "", email: "", password: "" })
  let navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials({...credentials, [e.target.name]: e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setCredentials({ name: "", email: "", password: "" })
    if(credentials.name && credentials.email && credentials.password){

      navigate("/");
    }
  }

  return (
    <form onSubmit={handleSubmit} >
      <div className="LOGIN">
        <div className='Title'>
          <h2 className="head-title">Signup to Dystro</h2>
          <p className="head-para">or <Link className='subtxt' to={"/login"}>Login</Link></p>
        </div>
        <hr className='hr' />
        <div className="credentials">
          <div className="info">
            <label htmlFor="name" className="info-label" >Name</label>
            <input type="text" id="name" name="name" className="inp" value={credentials.name} onChange={handleChange}/>
          </div>
          <div className="info">
            <label htmlFor="email" className="info-label" >Email</label>
            <input type="email" id="email" name="email" className="inp" value={credentials.email} onChange={handleChange}/>
          </div>
          <div className="info">
            <label htmlFor="password" className="info-label" >Password</label>
            <input type="password" id="password" name="password" className="inp" value={credentials.password} onChange={handleChange}/>
          </div>
        </div>
        <button className="signup-btn" >Signup</button>
      </div>
    </form>
  )
}

export default Signup