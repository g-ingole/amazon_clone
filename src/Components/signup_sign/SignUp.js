import React, { useState } from 'react'
import './signup.css'
import { NavLink } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const SignUp = () => {
  const [udata, setUdata] = useState({
    fname: "",
    email: "",
    mobile: "",
    password: "",
    cpassword: ""
  });

  const adddata = (e) => {
    const { name, value } = e.target;
    setUdata(() => {
      return {
        ...udata,
        [name]: value
      }
    })
  }

  const senddata = async (e) => {
    e.preventDefault();
    const { fname, email, mobile, password, cpassword } = udata;

    // if (fname === "") {
    //   toast.warn("fname provide", {
    //     position: "top-center",
    //   })

    // } else if (email === "") {
    //   toast.warn("email provide", {
    //     position: "top-center",
    //   })
    // }

    const res = await fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        fname, email, mobile, password, cpassword
      })
    });

    const data = await res.json();
    // console.log(data);

    if (res.status === 422 || !data) {
      // alert("Something went wrong");
      toast.warn("Something went wrong", {
        position: "top-center",
      });

    } else {
      toast.success("Registration Successfull", {
        position: "top-center",
      });
      setUdata({ ...udata, fname: "", email: "", mobile: "", password: "", cpassword: "" });
    }

  }

  return (
    <section>
      <div className='sign_container'>
        <div className='sign_header'>
          <img src={require("../Images/Amazon_logo.svg.png")} alt='' />
        </div>
        <div className='sign_form'>
          <form method='POST'>
            <h1>Sign-Up</h1>
            <div className='form_data'>
              <lebel htmlFor="fname">Your name</lebel>
              <input type='text' onChange={adddata} value={udata.fname} name='fname' id='fname' />
            </div>
            <div className='form_data'>
              <lebel htmlFor="email">Email</lebel>
              <input type='text' onChange={adddata} value={udata.email} name='email' id='email' />
            </div>
            <div className='form_data'>
              <lebel htmlFor="number">Mobile number</lebel>
              <input type='text' onChange={adddata} value={udata.mobile} name='mobile' id='mobile' />
            </div>
            <div className='form_data'>
              <lebel htmlFor="password">Password</lebel>
              <input type='password' name='password' onChange={adddata} value={udata.password} id='password' placeholder='At least 6 char' />
            </div>
            <div className='form_data'>
              <lebel htmlFor="cpassword">Password Again</lebel>
              <input type='password' name='cpassword' onChange={adddata} value={udata.cpassword} id='cpassword' />
            </div>
            <button className='signin_btn' onClick={senddata}>Continue</button>
            <div className='signin_info'>
              <p>Already have an account?</p>
              <NavLink to="/login">Signin</NavLink>

            </div>
          </form>
        </div>
        <ToastContainer />
      </div>
    </section>
  )
}

export default SignUp
