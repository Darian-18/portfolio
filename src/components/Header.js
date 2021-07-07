import React from "react";
import Typed from "react-typed";

const Header = () => {
    return (
        <div className="header-wraper">
            <div className="main-info">
                <h1>Welcome to my Portfolio</h1>
                <Typed 
                    className="typed-text"
                    strings={["Fullstack Software Developer", "Designer", "Greetings", "and", "= ) Enjoy your Day!"]}
                    typeSpeed={40}
                    backSpeed={60}
                    loop
                />
                <a href="/Contacts" className="btn-main-offer">CONTACT ME</a>
            </div>
            {/* <footer>Hello</footer> */}
        </div>
    )
}

export default Header

