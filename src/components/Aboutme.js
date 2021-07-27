import React from "react";
import Typed from "react-typed";
import me from "../images/Me.png";

const Aboutme = () => {
    return(
        <div className="header-wraper">
            <div className="main-info-about">
                <Typed 
                    className="typed-text"
                    strings={["Hello There!", "General Kenobi!"]}
                    typeSpeed={80}
                    backSpeed={60}
                    loop
                />
                <div className="img-me">
                    <img name={me} src={me} />
                </div>
                <div className="card-body">
                    <h4>Darian Martinez</h4>
                    {/* <div className="shadow-lg p-3 mb-5 rounded"> */}
                        {/* <h5>Software Developer</h5> */}
                        <h6 className="para">Full Stack Web/Software Developer seeking an opportunity to further 
                            enhance my programming, multimedia tools and design skills. Strong 
                            desire for design and animation aspects, strong collaborator, fast 
                            learner, adaptive, and skilled writing well efficient code using up 
                            to date practices in web development. Html, Css, Javascript, Python
                            Continuously learning
                        </h6>
                    {/* </div> */}
                </div>
            </div>
        </div>
    )
}

export default Aboutme;