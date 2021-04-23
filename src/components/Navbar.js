import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import Aboutme from "./Aboutme";
// import Header from "./Header";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <a className="navbar-brand" href="Darian">
                    Darian Martinez
                </a>
                    <button 
                    className="navbar-toggler" 
                    type="button" data-toggle="collapse" 
                    data-target="#navbarSupportedContent" 
                    aria-controls="navbarSupportedContent" 
                    aria-expanded="false" 
                    aria-label="Toggle navigation">
                        <FontAwesomeIcon icon={faBars} style={{ color: "007bff" }}/>
                    </button>
                <div 
                className="collapse navbar-collapse" 
                id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">

                        <li className="nav-item active">
                            <a 
                            className="nav-link" 
                            href="/">Home 
                            </a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="Aboutme">
                                About Me
                            </a>
                        </li>

                        {/* <li className="nav-item">
                            <a className="nav-link" href="Services">Services</a>
                        </li>  */}

                        {/* <li className="nav-item">
                            <a className="nav-link" href="How Work">How Work</a>
                        </li> */}

                        <li className="nav-item">
                            <a className="nav-link" href="portfolio">
                                Portfolio
                            </a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="Contacts">
                                Contacts
                            </a>
                        </li>
                    </ul>
                </div>    
            </div>
        </nav>
    )
}

export default Navbar
