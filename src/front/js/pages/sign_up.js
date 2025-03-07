import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Sign_up = () => {
	const { store, actions } = useContext(Context);
	const [email,setEmail] = useState("")
	const [password,setPassword] = useState("")
    const [nickname,setNickname] = useState("")
	const navigate = useNavigate()
	const handdlesubmmit = async(e) => {
		e.preventDefault()
		const response = await fetch(`${process.env.BACKEND_URL}/api/sign_up`,{
			method: "POST",
			body: JSON.stringify({
				email:email,
                nickname:nickname,
				password:password,
			}),
			headers: {
				"Content-Type":"application/json"
			}
		})
		const data = await response.json()
		console.log(data);
		if (response.ok){
			navigate("/login")
		}
	}

	return (
		<div className="text-center mt-5">
			<form onSubmit={handdlesubmmit} >
				<div className="d-flex mx-auto col-lg-6 col-md-8">
					<label for="exampleInputEmail1" className="form-label">Email address</label>
					<input type="email" value={email} onChange={e=>setEmail(e.target.value)} className="form-control me-2" id="exampleInputEmail1" aria-describedby="emailHelp"/>
						<div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
				</div>
				<div className="d-flex mx-auto col-lg-6 col-md-8">
					<label for="exampleInputPassword1" className="form-label">Nickname</label>
					<input type="nickname" value={nickname} onChange={e=>setNickname(e.target.value)} className="form-control me-2" id="exampleInputNickname1"/>
				</div>
                <div className="d-flex mx-auto col-lg-6 col-md-8">
					<label for="exampleInputPassword1" className="form-label">Password</label>
					<input type="password" value={password} onChange={e=>setPassword(e.target.value)} className="form-control me-2" id="exampleInputPassword1"/>
				</div>
				<button type="submit" className="btn btn-primary m-2">Registrate</button>
			</form>
		</div>
	);
};