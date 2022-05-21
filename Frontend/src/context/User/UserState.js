import { useState } from "react";
import UserContext from "./UserContext";
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UserState = (props) => {
    const navigate = useNavigate();

    const handleLogin = async (credentials, setCredentials, setKey, setUser) => {

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
            localStorage.setItem('token',response.AuthToken)
            setUser({ loggedIn: true })
            setKey(Math.random)
            toast.success('Logged-In Successfully!', {
                position: "top-left",
                autoClose: 1600,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            setTimeout(() => {
                navigate('/')
            }, 1600);
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

    const handleSignup = async (credentials, setCredentials) => {

        const res = await fetch(`${process.env.REACT_APP_HOST}/api/auth/signup`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name: credentials.name, email: credentials.email, password: credentials.password })
        })

        const response = await res.json();

        if (response.Success) {
            setCredentials({ email: "", password: "" })
            localStorage.setItem('token',response.AuthToken)
            toast.success('Logged-In Successfully!', {
                position: "top-left",
                autoClose: 1600,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            setTimeout(() => {
                navigate('/')
            }, 1600);
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

    const getUser = async () => {
        const token = localStorage.getItem('token')
        const res = await fetch(`${process.env.REACT_APP_HOST}/api/auth/getUser`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'authToken': token
            },
        })

        const response = await res.json();

    }

    const CheckUser = async () => {
    
        const res = await fetch(`${process.env.REACT_APP_HOST}/api/auth/checkuser`, {
            method: 'POST',
            credentials:'include',
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const response = await res.json();
        console.log(response);
    }



    return (
        <UserContext.Provider value={{ handleLogin, getUser, handleSignup, CheckUser }}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserState;