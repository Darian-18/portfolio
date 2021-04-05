import React from "react";
import Typed from "react-typed";

const Header = () => {
    return (
        <div className="header-wraper">
        <div className="main-info">
               <h1>Welcome to my Portfolio</h1>
               <Typed 
                className="typed-text"
                strings={["Fullstack Software Developer", "Designer", "Greatings", "and", "= ) Enjoy your Day!"]}
                typeSpeed={40}
                backSpeed={60}
                loop
               />
               <a href="#" className="btn-main-offer">contact me</a>
        </div>
        </div>
    )
}

export default Header

