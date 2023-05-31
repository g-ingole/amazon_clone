import React, { useState, useContext } from 'react'
import './signup.css'
import { NavLink } from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { LoginContext } from '../context/ContextProvider';
const Sign_in = () => {

    const [logdata, setData] = useState({
        email: "",
        password: ""
    });


    const { account, setAccount } = useContext(LoginContext)


    const adddata = (e) => {
        const { name, value } = e.target;
        setData(() => {
            return {
                ...logdata,
                [name]: value
            }
        })

    };

    const senddata = async (e) => {
        e.preventDefault();
        const { email, password } = logdata;

        const res = await fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email, password
            })
        });
        const data = await res.json();
        // console.log(data);

        if (res.status === 400 || !data) {
            // console.log("Invalid Credentials");
            toast.warn("Something went wrong", {
                position: "top-center",
            });

        } else {
            // console.log("data valid")
            setAccount(data)
            toast.success("valid user", {
                position: "top-center",
            });
            setData({ ...logdata, email: "", password: "" });

        }


    }


    return (
        <>
            <section>
                <div className='sign_container'>
                    <div className='sign_header'>
                        <img src={require("../Images/Amazon_logo.svg.png")} alt='' />
                    </div>
                    <div className='sign_form'>
                        <form method='POST'>
                            <h1>Sign-in</h1>
                            <div className='form_data'>
                                <lebel htmlFor="email">Email</lebel>
                                <input type='text' onChange={adddata} value={logdata.email} name='email' id='email' />
                            </div>
                            <div className='form_data'>
                                <lebel htmlFor="password">Password</lebel>
                                <input type='password' onChange={adddata} value={logdata.password} name='password' id='password' placeholder='At least 6 char' />
                            </div>
                            <button className='signin_btn' onClick={senddata}>Continue</button>
                        </form>
                    </div>
                    <div className='create_accountinfo'>
                        <p>New To Amazon</p>
                        <NavLink to="/register"><button>Create Your amazon account</button></NavLink>
                    </div>
                </div>
                <ToastContainer />
            </section>
        </>
    )
}

export default Sign_in
