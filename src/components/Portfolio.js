import React from "react";
import "../components/Portfolio.css";
import ball from "../images/ball.png";
import breakout from "../images/breakout.png";
import game from "../images/game.png";
import haiku from "../images/haiku.png";
import { BrowserRouter as Route, NavLink, Link} from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Portfolio = () => {
    return(
        <div className="header-wraper">
            <div className="contact">
                <div className="main-info">
                    <a className="btn-main-offer" href="https://magic-ball-peds5byfu-darian-18.vercel.app">8-Ball</a>
                    <a className="btn-main-offer" href="https://the-living-haiku.web.app/">Haiku</a>
                    <a className="btn-main-offer" href="https://breakout-a13veiybw-darian-18.vercel.app">Breakout</a>
                </div>
            </div>
        {/* <img className="ball" name={ball} src={ball} width="150px" height="150px"/>
        <img className="breakout" name={breakout} src={breakout} width="150px" height="150px" />
        <img className="game" name={game} src={game} width="150px" height="150px" />
        <img className="haiku" name={haiku} src={haiku} width="150px" height="150px" /> */}
            
            

            
            
        </div>
    )
}

export default Portfolio;