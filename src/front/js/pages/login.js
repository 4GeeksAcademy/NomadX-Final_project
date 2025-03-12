import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/index.css"
import "../../styles/login.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Login = () => {
    const { store, actions } = useContext(Context);
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()
    const handleSubmit = async (e) => {
        e.preventDefault()
        const response = await fetch(`${process.env.BACKEND_URL}/api/sign_in`,{
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
            localStorage.setItem("token", data.access_token)
            navigate("/Profile-Feed")
        }
    }
    return (
        <div className="container_login">
            <div className="welcome-back-header">
                <h1>Welcome back!</h1>
            </div>
            <div className="bottomSection">
                <h3>Sign In</h3>
                <form className="loginForm" onSubmit={handleSubmit} >
                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" value={email} onChange={e => setEmail(e.target.value)} className="form-control me-2" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <label for="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} className="form-control me-2" id="exampleInputPassword1" />
                    <button type="submit" className="metallic-button">Sign in!</button>
                </form>
            </div>
            <div class="or-divider">
                <hr/>
                    <span>or</span>
            </div>
            <div className="button-wrapper">
                <Link to="/sign_up">
                    <button className="metallic-button" type="button">Sign up!</button>
                </Link>
            </div>
        </div>
        
    );
};
