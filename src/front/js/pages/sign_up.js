import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/signUp.css";
import "../../styles/index.css";
import avatar1 from "../../img/avatar1.jpg";
import avatar2 from "../../img/avatar2.jpg";
import avatar3 from "../../img/avatar3.jpg";
import avatar4 from "../../img/avatar4.jpg";
import avatar5 from "../../img/avatar5.jpg";


export const Sign_up = () => {
	const { store, actions } = useContext(Context);
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const [nickname, setNickname] = useState("")
	const [selectedAvatar, setSelectedAvatar] = useState(null);
	const navigate = useNavigate()

    const avatars = [
        avatar1,
        avatar2,
        avatar3,
        avatar4,
        avatar5,
    ];

	const handdlesubmmit = async (e) => {
		e.preventDefault()
		const response = await fetch(`${process.env.BACKEND_URL}/api/sing_up`, {
			method: "POST",
			body: JSON.stringify({
				email: email,
				nickname: nickname,
				password: password,
				avatar: selectedAvatar
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
					<label for="exampleInputEmail1" className="form-label signUp">Your Email</label>
					<input type="email" value={email} placeholder="We will never share your email address with anyone." onChange={e => setEmail(e.target.value)} className="form-control me-2" id="exampleInputEmail1" aria-describedby="emailHelp" />
					<label for="exampleInputPassword1" className="form-label signUp">Create a Nickname</label>
					<input type="nickname" value={nickname} onChange={e => setNickname(e.target.value)} className="form-control me-2" id="exampleInputNickname1" />
					<label for="exampleInputPassword1" className="form-label">Set a Password</label>
					<input type="password" value={password} onChange={e => setPassword(e.target.value)} className="form-control me-2" id="exampleInputPassword1" />
					<div className="avatar-options">
						<h4>Choose an Avatar:</h4>
						{avatars.map((avatar, index) => (
							<img
								key={index}
								src={avatar}
								alt={`Avatar ${index + 1}`}
								onClick={() => setSelectedAvatar(avatar)}
								className={selectedAvatar === avatar ? "selected" : ""}
							/>
						))}
					</div>
					<button type="submit" className="metallic-button">Sign up</button>
				</form>
			</div>
		</div>

	);
};

