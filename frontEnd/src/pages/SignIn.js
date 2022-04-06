
import React from 'react'
import { connect } from 'react-redux';
import userActions from '../redux/actions/userActions';
import { Link as LinkRouter } from 'react-router-dom';
import Navbar from "../components/Navbar"

function SignIn(props) {

	const handleSubmit = (event) => {
		event.preventDefault()
		const logedUser = {
			email: event.target[0].value,
			password: event.target[1].value,
			from: "form-Signup"
		}
		props.signInUser(logedUser)
	}

	return (
        
        <div className="containerForm BgSignIn">
            <Navbar/>
            <h1 className=" title white signuptext">Sign in</h1>
		<div className='signBody'>
			
	
			<form onSubmit={handleSubmit} className='form'>
				<div>
					<input name="email" className="inputForm" placeholder="Email address" type="email" />
				</div>
				<div>
					<input name='password' className="inputForm" placeholder="Password" type="password" />
				</div>
				<div className="divBtn">
					<button type="submit" className="btnForm"> Sign in  </button>
                    <button type="submit" className="btnForm"> Admin  </button>
				</div>
                
				<div className="textForm text-shadow divGoogle">
                    <p>Sign In with </p><img className="GoogleImg" src={process.env.PUBLIC_URL+"images/Logogoogle.png"}/>
                </div>
			</form>
            
		</div>
        <div className="textForm text-shadow"><p>You don't have an account?</p><p>Please <LinkRouter className="textDecoration" to="/signUp">sign up</LinkRouter></p></div>
        </div>
	)
}

const mapDispatchToProps = {
	signInUser: userActions.signInUser,
}

export default connect(null, mapDispatchToProps)(SignIn);