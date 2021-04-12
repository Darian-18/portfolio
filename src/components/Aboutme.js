import React from "react";
import Typed from "react-typed";

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
            </div>
        </div>
    )
}

export default Aboutme;