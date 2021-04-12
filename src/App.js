import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Particles from "react-particles-js";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Aboutme from "./components/Aboutme";
// FONT FONTAWESOME IMPORTS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/react-fontawesome";
import { BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";

function App() {

  return (
    <>
      <Particles 
        className="particle-canvas"
        params={{
          particles: {
            number: {
              value: 30, 
              density: {
                enable: true, 
                value_area: 900
              }
            },
            shape: {
              type: "star",
              stroke: {
                width: 6,
                color: "#ff61b0"
              }
            } 
          }
        }}
      />
      <Navbar />
      <Router>
        <Switch>
          <Route path="/" exact component={Header} />
          <Route path="/Aboutme" exact component={Aboutme} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
