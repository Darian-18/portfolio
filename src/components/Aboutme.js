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
                <div className="img-me">
                    <img name={me} src={me} />
                </div>
                        {/* <h5>Software Developer</h5> */}
                        <p>I am a Kenzie Academy Software Development graduate and I want to 
                            further enhance my coding ability whether that be Frontend, 
                            Backend, or Design. I really love the designing portion behind 
                            coding and really interested in how I can go further with css animations,
                            bootstrap and flexbox. 
                            I’m seeking a front-end based position that will allow me to use both my 
                            development skills like javascript  and designing skills like Bootstrap and CSS.
                        </p>
                    {/* </div> */}
                </div>
            </div>
        </div>
    )
}

export default Aboutme;