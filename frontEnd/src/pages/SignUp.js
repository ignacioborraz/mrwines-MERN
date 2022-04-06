import React, { useEffect, useState } from 'react'
import {Link as LinkRouter } from 'react-router-dom';

 export default function SignUp(props) {

    const handleSubmit = (event) => {
        event.preventDefault()
        const userData={
            name:event.target[0].value,
            Lastname:event.target[1].value,
            email:event.target[2].value,
            password:event.target[3].value,
            from:"form-Signup"
        }
        props.signUpUser(userData)
    }

    return (
        <div className="containerForm">
            <h1 className=" title white signuptext">Sign up</h1>
        <div className='signBody'>       
            
            <form onSubmit={handleSubmit} className='form'>
                <div>
                    <input name="Name" className="inputForm" placeholder="Name" type="text" />
                </div>
                <div>
                    <input name="Last name" className="inputForm" placeholder="Last name" type="text" />
                </div>
                <div>
                    <input name="email" className="inputForm" placeholder="Email address" type="email" />
                </div>
                <div>
                    <input name='password' className="inputForm" placeholder="Create password" type="password" />
                </div>
                <div className="divBtn">
                    <button type="submit" className="btnForm">Create Account</button>
                </div>
            </form>
            </div>
            <div className="textForm text-shadow"><p>You have an account?</p><p>Please <LinkRouter className="textDecoration" to="/SignIn">sign in</LinkRouter></p></div>

        </div>
    )
}