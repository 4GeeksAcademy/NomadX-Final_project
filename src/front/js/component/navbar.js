import React from "react";
import logo from "../../img/logo.jpeg";
import { Link } from "react-router-dom";
import '@fortawesome/fontawesome-svg-core/styles.css';
import "../../styles/navbar.css";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {

	const navigate = useNavigate()
	const logout = () => {
		localStorage.removeItem("access_token");
	
		navigate("/login");
	}

	return (
		<nav className="navbar navbar-expand-lg bg-body-tertiary"> 
			<div className="container-fluid"> 
			<Link to="/">
				<a className="navbar-brand" href="#">
					<img src={logo} alt="Logo" width="50" height="50" className="d-inline-block align-text-top me-2" />
				</a>
			</Link>
			<span className="brandName">NomadX</span>
				<form className="d-flex mx-auto col-lg-6 col-md-8"> 
				<input className="form-control me-2 search-bar" type="search" placeholder="Search" aria-label="Search" />
				</form>
				<Link to="/login">
						<button type="button" className="btn btn-secondary m-2">Login!</button>
				</Link>
					<Link to="/create-post">
						<button type="button" className="btn btn-secondary">Post</button>
					</Link>
				<div className="dropdown">
					<button className="btn btn-secondary dropdown m-2" type="button" data-bs-toggle="dropdown" aria-expanded="false">
						<i className="fa-solid fa-ellipsis-vertical"></i>
					</button>
					<ul className="dropdown-menu dropdown-menu-end"> 
						<Link to="/">
							<li><a className="dropdown-item" href="#">Home</a></li>
						</Link>
						<Link to="/profile-feed">
							<li><a className="dropdown-item" href="#">Profile</a></li>
						</Link>
						<Link to="/instructions">
							<li><a className="dropdown-item" href="#">User Guide</a></li>  
						</Link>
						<Link to="/">
							<li><a className="dropdown-item" onClick={logout} href="#">Logout</a></li>
						</Link>
					</ul>
				</div>
			</div>
		</nav>
	);
};
