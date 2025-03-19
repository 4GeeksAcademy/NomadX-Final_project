import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import "../../styles/signUp.css";


export const ChangePassword = () => {
    const { store, actions } = useContext(Context);
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()


    return (
        <div className="container-signUp">
            <div className="leftSectionSignUp">
                <h2>Want to change your password?</h2>
                <p>Easy! Just enter you email and new password.</p>
            </div>
            <div className="rightSectionSignUp">
                <h3>Sign Up</h3>
                <form className="signUpForm">  
                    <label htmlFor="exampleInputEmail1" className="form-label signUp">Your Email</label>
                    <input type="email" value={email} placeholder="We will never share your email address with anyone." onChange={e => setEmail(e.target.value)} className="form-control me-2" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <label htmlFor="exampleInputPassword1" className="form-label">Set a New Password</label>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} className="form-control me-2" id="exampleInputPassword1" />
                    <button type="submit" className="metallic-button">Save</button>
                </form>
            </div>
        </div>

    );
};

//onSubmit={handdlesubmmit}