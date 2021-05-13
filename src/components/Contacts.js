import React from "react";
import { BrowserRouter as Route, NavLink, Link} from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
// import { Text, Linking } from 'react-native';


const Contacts = () => {
    return(
        <div className="about-wraper">
            {/* {console.log("darian")} */}
            <div className="contact">
                    
                    <div className="main-info">
                        <a className="btn-main-offer">405-968-9581</a>

                        <a className="btn-main-offer">darian.mtz18@gmail.com</a>
                        
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