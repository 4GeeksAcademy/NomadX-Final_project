import React from "react";
import { Link } from "react-router-dom";
import "../../styles/contactUs.css"
import "../../styles/index.css"


export const ContactUs = () => {

    return (
        <div className="container-contact">
            <div className="contact-sections">
                <div className="leftSection">
                    <h1>We're Here to Help! 💛</h1>
                    <p>Your journey is our priority. Let's make it unforgettable.</p>
                </div>
                <div className="rightSection">
                    <h2>Email Us</h2>
                    <p>✉️ nomadx2025@gmail.com</p>
                    <p>Got a travel question, a suggestion, or just want to say hi? Drop us a line with the details, and our support team will respond as soon as possible. Happy travels!</p>
                </div>
            </div>
            <div className="button-wrapper">
                <Link to="/">
                    <button className="metallic-button" type="button">Go Home</button>
                </Link>
            </div>
        </div>
    );
};
