import React from "react";
import logo from "../../img/logo.jpeg";
import { Link } from "react-router-dom";
import '@fortawesome/fontawesome-svg-core/styles.css';
import "../../styles/navbar.css";


export const Navbar = () => {
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
				<div className="dropdown">
					<button className="btn btn-secondary dropdown" type="button" data-bs-toggle="dropdown" aria-expanded="false">
						<i className="fa-solid fa-ellipsis-vertical"></i>
					</button>
					<ul className="dropdown-menu dropdown-menu-end"> 
						<Link to="/">
							<li><a className="dropdown-item" href="#">Home</a></li>
						</Link>
						<Link to="/profile-feed">
							<li><a className="dropdown-item" href="#">Profile</a></li>
						</Link>
						<Link to="/">
							<li><a className="dropdown-item" href="#">Settings</a></li>  
						</Link>
						<Link to="/">
							<li><a className="dropdown-item" href="#">Logout</a></li>
						</Link>
					</ul>
				</div>
			</div>
		</nav>
	);
};

// need to add a settings page of need to remove and replace with something else