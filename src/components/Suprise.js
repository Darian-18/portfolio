import React from "react";
import surprise from "../images/suprise.png";
import "../components/suprise.css";
import Typed from "react-typed";


const Surprise = () => {
    return(
        <div className="header-wraper">
         <div className="main-info">
            <div className="img-one">
                <img name={surprise} src={surprise} />
                <Typed 
                    className="typed-text"
                    strings={["Darian Martinez Has Joined The Party! = )"]}
                    typeSpeed={40}
                    backSpeed={60}
                    
                />
                </div>
            </div>
        </div>
    )
}

export default Surprise;