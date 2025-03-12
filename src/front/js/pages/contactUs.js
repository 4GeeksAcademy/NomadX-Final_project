import React from "react";
import { Link } from "react-router-dom";
import "../../styles/contactUs.css"
import "../../styles/index.css"
import '@fortawesome/fontawesome-svg-core/styles.css';

export const ContactUs = () => {

    return (
        <div className="container-contact" >
            <div className="leftSection">
                <h1>Let's Chat.<i class="fa-solid fa-globe"></i></h1>
                <p>Tell us what we can help you with.</p>
            </div>
            <div className="rightSection">
                <h3>Send us a message! 🚀</h3>
                <form className="form-contact-us">
                    <input type="text" placeholder="Full Name"/>
                    <input type="text" placeholder="Email Address"/>
                    <input type="text" className="subject" placeholder="Subject"/>
                    <textarea className="messageBox" placeholder="Please tell us how we can help you today."></textarea>
                    <button type="submit" className="metallic-button ">Send Message</button>
                </form>
            </div>
        </div>
    );
};


/*
<div className="email-info">
                    <span role="email-icon"></span>
                    <p>Email us at: 
                    <br></br>
                    NomadX@gmail.com</p>
                </div>
*/