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
                        <p>Being a Sucker for Art, Video Games, and Music, these are my main hobbies 
                            that keep me motivated and curious to learn. But now that I’ve stumbled 
                            upon Software Engineering, It has brought me closer to everything I love doing. 
                            I hope to make this just as big as a passion as much as I love my hobbies. 
                            Knowing that this field of work is a huge piece that makes my everyday life 
                            a reality, I now know that software engineering is the magic that made my hobbies 
                            a reality and now want to use that magic to make my hobbies and more.
                        </p>
                    {/* </div> */}
                </div>
            </div>
        </div>
    )
}

export default Aboutme;