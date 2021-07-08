import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Particles from "react-particles-js";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Aboutme from "./components/Aboutme";
import Contacts from "./components/Contacts";
import Portfolio from "./components/Portfolio";
import Surprise from "./components/Suprise"; 
// FONT FONTAWESOME IMPORTS
import { BrowserRouter as Router, Route} from "react-router-dom";
import {LinkContainer} from 'react-router-bootstrap';

function App() {

  return (
    <>
      <Particles 
        className="particle-canvas"
        params={{
          particles: {
            number: {
              value: 40, 
              density: {
                enable: true, 
                value_area: 1000
              }
            },
            shape: {
              // type: "star",
              stroke: {
                width: 8,
                color: "#ff61b0"
              }
            } 
          }
        }}
      />
      <Navbar />
      <Router>
        
          <Route path="/" exact component={Header} />
          <Route path="/Aboutme" exact component={Aboutme} />
          <Route path="/Contacts" exact component={Contacts} />
          <Route path="/Portfolio" exact component={Portfolio} />
          <Route path="/Surprise" exact component={Surprise} />
          
      </Router>
    </>
  );
}

export default App;
