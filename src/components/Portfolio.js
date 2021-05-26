import React from "react";
import "../components/Portfolio.css";
import ball from "../images/ball.png";
import breakout from "../images/breakout.png";
import game from "../images/game.png";
import haiku from "../images/haiku.png";

const Portfolio = () => {
    return(
        <div className="about-wraper">
            

            <div className="img-2">
                <img className="ball" name={ball} src={ball} />
                <img className="breakout" name={breakout} src={breakout} />
                <img className="game" name={game} src={game} />
                <img className="haiku" name={haiku} src={haiku} />
            </div>

            
            
        </div>
    )
}

export default Portfolio;