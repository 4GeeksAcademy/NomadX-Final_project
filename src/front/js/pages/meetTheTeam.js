import React from "react";
import { Link } from "react-router-dom";
import femaleTemp from "../../img/femaleTemp.jpeg";
import maleTemp from "../../img/maleTemp.jpeg";

export const MeetTheTeam = () => {
    return (
        <div className="heading">
            <h1 className="heading text-center">Meet the Team</h1>
            <br></br>
            <div className="d-md-flex justify-content-start">
                <div className="img">
                    <img src={femaleTemp}
                        style={{ width: '100px', height: '100px', objectFit: 'cover', borderRadius: '70%' }} />
                </div>
                <div className="member1">
                    <h4>Alynne Trujillo</h4>
                    <p><i>  Co-Founder</i></p>
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
                    <img src={maleTemp}
                        style={{ width: '100px', height: '100px', objectFit: 'cover', borderRadius: '50%' }} />
                </div>
                <div className="member2">
                    <h4>Lucas Sánchez Magán</h4>
                    <p><i>  Co-Founder</i></p>
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
                    <img src={maleTemp}
                        style={{ width: '100px', height: '100px', objectFit: 'cover', borderRadius: '50%' }} />
                </div>
                <div className="member3">
                    <h4>Carlos Gutierrez </h4>
                    <p><i>  Co-Founder</i></p>
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
