import React from "react";
import "../components/Portfolio.css";
import ball from "../images/ball.png";
import breakout from "../images/breakout.png";
import game from "../images/game.png";
import haiku from "../images/haiku.png";

const Portfolio = () => {
    return(
        <div className="about-wraper">
            <div className="img">
                <img className="ball" name={ball} src={ball} width="150px" height="150px"/>
                <img className="breakout" name={breakout} src={breakout} width="150px" height="150px" />
                <img className="game" name={game} src={game} width="150px" height="150px" />
                <img className="haiku" name={haiku} src={haiku} width="150px" height="150px" />
            </div>

            
            
        </div>
    )
}

export default Portfolio;