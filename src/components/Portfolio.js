import React from "react";
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
                    <a className="btn-main-offer" id="button" href="https://magic-ball-navy.vercel.app/">8-Ball</a>
                    <a className="btn-main-offer" id="button" href="https://the-living-haiku.web.app/">Haiku</a>
                    <a className="btn-main-offer" id="button" href="https://breakout-ivory.vercel.app/">Breakout</a>
                    <a className="btn-main-offer" id="button" href="https://hex-chi.vercel.app/">Hex Color</a>
                    <a className="btn-main-offer" id="button" href="https://calculator-alpha-olive.vercel.app/">Calculator</a>
                </div>
            </div>
        {/* 
        <img className="ball" name={ball} src={ball} width="150px" height="150px" border-radius="20px"/>
        <img className="breakout" name={breakout} src={breakout} width="150px" height="150px" />
        <img className="game" name={game} src={game} width="150px" height="150px" />
        <img className="haiku" name={haiku} src={haiku} width="150px" height="150px" /> */}
            
            

            
            
        </div>
    )
}

export default Portfolio;