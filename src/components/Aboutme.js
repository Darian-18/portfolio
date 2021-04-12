import React from "react";
import Typed from "react-typed";
import me from "../images/Me.png";

const Aboutme = () => {
    return(
        <div className="about-wraper">
            <div className="main-info-about">
                <Typed 
                    className="typed-text"
                    strings={["Hello There!", "General Kenobi!"]}
                    typeSpeed={80}
                    backSpeed={60}
                    loop
                />
                <div className="card-body">
                    {/* <div className="shadow-lg p-3 mb-5 rounded"> */}
                        <h5>About Me</h5>
                        <p>With supporting text below as a natural lead-in to additional content.</p>
                    {/* </div> */}
                </div>
                {/* <div className="img">
                    <image name={""} src={""} />
                </div> */}
            </div>
        </div>
    )
}

export default Aboutme;