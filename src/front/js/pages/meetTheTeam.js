import React from "react";
import { Link } from "react-router-dom";
import "../../styles/meetTheTeam.css";
import "../../styles/index.css";
import femaleTemp from "../../img/femaleTemp.jpeg";
import maleTemp from "../../img/maleTemp.jpeg";

export const MeetTheTeam = () => {
    return (
        <div className="container_meetTheTeam">
            <h1 className="heading text-center">Meet the Team</h1>
            <br></br>
            <div className="d-md-flex justify-content-start">
                <div className="img">
                    <img src={femaleTemp} className="team-member-img female" />
                </div>
                <div className="member">
                    <h4>Alynne Trujillo</h4>
                    <p className="coFounder"><i>  Co-Founder</i></p>
                    <br></br>
                    <p>Alynne brings NomadX to life with her meticulous frontend
                        development and design skills. She has a keen eye for precision
                        ensuring the vision becomes reality. For Alynne, travel is
                        more than just seeing new places; it's about connecting
                        with people and expanding her understanding of the world.</p>
                </div>
            </div>
            <br></br>
            <hr class="featurette-divider"></hr>
            <div className="d-md-flex justify-content-start">
                <div className="img">
                    <img src={maleTemp} className="team-member-img male" />
                </div>
                <div className="member">
                    <h4>Lucas Sánchez Magán</h4>
                    <p className="coFounder"><i>  Co-Founder</i></p>
                    <br></br>
                    <p>Lucas powers NomadX behind the scenes, developing the backend
                        with its core models and routes. He's not afraid to dive
                        into unfamiliar territory, always eager to learn and grow.
                        His dedication to self-improvement extends beyond coding;
                        he's also passionate about maintaining a healthy and active
                        lifestyle.</p>
                </div>
            </div>
            <br></br>
            <hr class="featurette-divider"></hr>
            <div className="d-md-flex justify-content-start">
                <div className="img">
                    <img src={maleTemp} className="team-member-img male" />
                </div>
                <div className="member">
                    <h4>Carlos Gutierrez </h4>
                    <p className="coFounder"><i>  Co-Founder</i></p>
                    <br></br>
                    <p>Carlos is the API integration specialist at NomadX, expanding
                        the platform's functionality and user benefits. His work
                        ensures seamless connections to external services, enhancing
                        the overall experience. With his infectious humor and positive
                        attitude, Carlos brings a much-needed levity to the team. A true
                        entrepreneur at heart, he's determined to make his mark
                        on the world.</p>
                </div>
            </div>
            <br></br>
            <div className="button-wrapper">
                <Link to="/">
                    <button className="metallic-button" type="button">Go Home</button>
                </Link>
            </div>
        </div>

    );
};
