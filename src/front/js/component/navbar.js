import React from "react";
import logo from "../../img/logo.jpeg";
import { Link } from "react-router-dom";
import '@fortawesome/fontawesome-svg-core/styles.css';
import "../../styles/navbar.css";
import "../../styles/index.css";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {

	const navigate = useNavigate()
	const logout = () => {
		localStorage.removeItem("access_token");

		navigate("/login");
	}

	return (
		<nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
			<div className="container-fluid">
				<Link to="/">
					<a className="navbar-brand" href="#">
						<img src={logo} alt="Logo" width="50" height="50" className="d-inline-block align-text-top me-2" />
					</a>
				</Link>
				<span className="brandName">NomadX</span>
				<form className="d-flex mx-auto col-lg-6 col-md-8">
					<input className="form-control me-2 search-bar" type="search" placeholder="Search Posts by City Here" aria-label="Search" />
				</form>
				<Link to="/login">
					<button type="button" className="metallic-button">Login!</button>
				</Link>
				<Link to="/create-post">
					<button type="button" className="metallic-button">Post</button>
				</Link>

				<div className="dropdown">
					<button className="metallic-button" type="button" data-bs-toggle="dropdown" aria-expanded="false">

					<Link to="/create-post">
						<button type="button" className="btn btn-nav">Post</button>
					</Link>
					
				<div className="dropdown">
					
					<button className="btn btn-secondary dropdown m-2" type="button" data-bs-toggle="dropdown" aria-expanded="false">

						<i className="fa-solid fa-ellipsis-vertical"></i>
					</button>
					<ul className="dropdown-menu dropdown-menu-end">
						<Link to="/" className="dropdown-item">
							Home
						</Link>
						<Link to="/profile-feed" className="dropdown-item">
							Profile
						</Link>
						<Link to="/instructions" className="dropdown-item">
							User Guide
						</Link>
						<Link to="/" className="dropdown-item" onClick={logout}>
							Logout
						</Link>
					</ul>
				</div>
			</div>
		</nav>
	);
};
