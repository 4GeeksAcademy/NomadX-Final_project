import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/signUp.css";


export const Sign_up = () => {
	const { store, actions } = useContext(Context);
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const navigate = useNavigate()


	const handdlesubmmit = async (e) => {
		e.preventDefault()
    
		const response = await fetch(`${process.env.BACKEND_URL}/api/sign_up`,{

			method: "POST",
			body: JSON.stringify({
				email: email,
				password: password,

			}),
			headers: {
				"Content-Type": "application/json"
			}
		})
		const data = await response.json()
		console.log(data);
		if (response.ok) {
			navigate("/login")
		}
	}

	return (
		<div className="container-signUp">
			<div className="leftSectionSignUp">
				<h2>Join the NomadX Community ✈️</h2>
				<p>Share your travels anonymously.</p>
			</div>
			<div className="rightSectionSignUp">
				<h3>Sign Up</h3>
				<form className="signUpForm" onSubmit={handdlesubmmit} >
					<label htmlFor="exampleInputEmail1" className="form-label signUp">Your Email</label>
					<input type="email" value={email} placeholder="We will never share your email address with anyone." onChange={e => setEmail(e.target.value)} className="form-control me-2" id="exampleInputEmail1" aria-describedby="emailHelp" />
					<label htmlFor="exampleInputPassword1" className="form-label">Set a Password</label>
					<input type="password" value={password} onChange={e => setPassword(e.target.value)} className="form-control me-2" id="exampleInputPassword1" />
					<button type="submit" className="metallic-button">Sign up</button>
				</form>
			</div>
		</div>

	);
};

