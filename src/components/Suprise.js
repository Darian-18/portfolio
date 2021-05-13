import React from "react";
import surprise from "../images/suprise.png";
import "../components/suprise.css";


const Surprise = () => {
    return(
        <div className="about-wraper">
            <div className="img-one">
                <img name={surprise} src={surprise} />
            </div>
        </div>
    )
}

export default Surprise;