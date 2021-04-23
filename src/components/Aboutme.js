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
                    <h4>Darian Martinez</h4>
                    {/* <div className="shadow-lg p-3 mb-5 rounded"> */}
                <div className="img">
                    <img name={me} src={me} />
                </div>
                        {/* <h5>Software Developer</h5> */}
                        <p>Graduated from Kenzie Academy as a Fullstack Software Developer,
                            Learn by Doing and Collaborate with Others. I'm a self-motivated 
                            Junior Software Developer with hands-on Project experience functioning 
                            remotely with others in group prjects. I love diving into the frontend 
                            with CSS and Bootstrap but also know my way around Javascript and Python. 
                        </p>
                    {/* </div> */}
                </div>
            </div>
        </div>
    )
}

export default Aboutme;