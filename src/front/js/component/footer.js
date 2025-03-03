import React from "react";
import { Link } from "react-router-dom";
import '@fortawesome/fontawesome-svg-core/styles.css';
import "../../styles/index.css"

export const Footer = () => (
	<footer className="fixedFooter">
		<div className="card text-center">
			<div className="footer">
				<i className="fa-solid fa-globe"></i>
				<h5 className="card-title"><i>Travel Reimagined</i></h5>
			</div>
			<div className="footer-links">
			<Link to="/instructions">
					<a className="btn" href="#" role="button">User Guide</a>
				</Link>
				<Link to="/faq">
					<a className="btn" href="#" role="button">FAQ</a>
				</Link>
				<Link to="/contact-us">
					<a className="btn" href="#" role="button">Contact Us</a>
				</Link>
				<Link to="/meet-the-team">
					<a className="btn" href="#" role="button">Meet the Team</a>
				</Link>
			</div>
		</div>
	</footer>
);
[]