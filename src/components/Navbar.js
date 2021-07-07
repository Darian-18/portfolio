import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container">
                <a className="navbar-brand" href="/">
                    Darian Martinez
                </a>
                    <button 
                    className="navbar-toggler" 
                    type="button" data-toggle="collapse" 
                    data-target="#navbarSupportedContent" 
                    aria-controls="navbarSupportedContent" 
                    aria-expanded="false" 
                    aria-label="Toggle navigation">
                        <FontAwesomeIcon icon={faBars} style={{ color: "000000" }}/>
                    </button>
                <div 
                className="collapse navbar-collapse" 
                id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">



                        <div id="Aboutme">
                            <li className="nav-item">
                                <a className="nav-link" href="Aboutme">
                                    About Me
                                </a>
                            </li>
                        </div>
                        


                        <li className="nav-item">
                            <a className="nav-link" href="Portfolio">
                                Portfolio
                            </a>
                        </li>


                        <li className="nav-item">
                            <a className="nav-link" href="Contacts">
                                Contact Me
                            </a>
                        </li>

                        <li className="nav-item active">
                            <a 
                            className="nav-link" 
                            href="Surprise">
                                Surprise
                            </a>
                        </li>
                    </ul>
                </div>    
            </div>
        </nav>
    )
}

export default Navbar
