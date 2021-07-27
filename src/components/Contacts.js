import React from "react";
import { BrowserRouter as Route, NavLink, Link} from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
// import { Text, Linking } from 'react-native';


const Contacts = () => {
    return(
        <div className="header-wraper">

            <div className="contact">
                    
                    <div className="main-info">
                        <a href="https://docs.google.com/document/d/e/2PACX-1vTmy7ygBgqlkR2QY4fc5Ru02hqUjPvLnd83bgwzAs9BoMsx7KiLViFY8fECYcitfPYmMg9vB5TaV2Pj/pub" className="btn-main-offer">RESUME</a>

                        <a className="btn-main-offer">Located in Oklahoma</a>
                        
                        <a href="https://github.com/Darian-18" className="btn-main-offer" ><FontAwesomeIcon icon={ faGithub } size="lg" /></a>
                        
                        <a href="https://www.linkedin.com/in/darian-martinez-7456041a0/" className="btn-main-offer"><FontAwesomeIcon icon={ faLinkedin } size="lg" /></a>
                    
                        <a
                            href="https://twitter.com/kamododarian"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-main-offer"
                        >
                            <FontAwesomeIcon icon={ faTwitter } size="lg" />
                        </a>
                   
                    </div>
            </div>
        </div>
    )
}

export default Contacts;