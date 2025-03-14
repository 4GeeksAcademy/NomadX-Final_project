import React from "react";
import { Link } from "react-router-dom";
import '@fortawesome/fontawesome-svg-core/styles.css';
import "../../styles/footer.css"

export const Footer = () => (
	<footer className="footer">
		<div className="card text-center">
			<div className="footer">
				<i className="fa-solid fa-globe"></i>
				<h5 className="card-title"><i>Travel the World Anonymously</i></h5>
			</div>
			<div className="footer-links">
				<Link to="/instructions">
					<button className="btn" type="button" role="button">User Guide</button>
				</Link>
				<Link to="/faq">
					<button className="btn" type="button" role="button">FAQ</button>
				</Link>
				<Link to="/contact-us">
					<button className="btn" type="button" role="button">Contact Us</button>
				</Link>
				<Link to="/meet-the-team">
					<button className="btn" type="button" role="button">Meet the Team</button>
				</Link>
			</div>
		</div>
	</footer>
);
