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
            setUser({ loggedIn: true })
            setKey(Math.random)
            localStorage.setItem('token', response.authToken);
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
            body: JSON.stringify({ name: credentials.name ,email: credentials.email, password: credentials.password })
        })

        const response = await res.json();

        if (response.Success) {
            setCredentials({ email: "", password: "" })
            localStorage.setItem('token', response.authToken);
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
        if (localStorage.getItem('token')) {

            const res = await fetch(`${process.env.REACT_APP_HOST}/api/auth/getUser`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'auth-token': localStorage.getItem('token')
                }
            })

            const response = await res.json();
            return response.name
        }

    }



    return (
        <UserContext.Provider value={{ handleLogin, getUser, handleSignup }}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserState;