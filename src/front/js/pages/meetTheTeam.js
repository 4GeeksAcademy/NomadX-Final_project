import React from "react";
import { Link } from "react-router-dom";
import "../../styles/meetTheTeam.css";
import "../../styles/index.css";
import femaleTemp from "../../img/femaleTemp.jpeg";
import maleTemp from "../../img/maleTemp.jpeg";

export const MeetTheTeam = () => {
    return (
        <div className="headingTeam">
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
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed euismod, arcu ornare finibus lacinia, quam felis semper enim,
                        ut interdum velit turpis a nunc. Integer rutrum sapien risus, et tempus libero ultricies
                        vitae. Proin ut turpis tellus. Duis tincidunt ligula eu erat gravida suscipit. Integer
                        iaculis erat eget dictum accumsan.</p>
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
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed euismod, arcu ornare finibus lacinia, quam felis semper enim,
                        ut interdum velit turpis a nunc. Integer rutrum sapien risus, et tempus libero ultricies
                        vitae. Proin ut turpis tellus. Duis tincidunt ligula eu erat gravida suscipit. Integer
                        iaculis erat eget dictum accumsan.</p>
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
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed euismod, arcu ornare finibus lacinia, quam felis semper enim,
                        ut interdum velit turpis a nunc. Integer rutrum sapien risus, et tempus libero ultricies
                        vitae. Proin ut turpis tellus. Duis tincidunt ligula eu erat gravida suscipit. Integer
                        iaculis erat eget dictum accumsan.</p>
                </div>
            </div>
            <br></br>
        </div>

    );
};
