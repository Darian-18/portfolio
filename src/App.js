import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Particles from "react-particles-js";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
// FONT FONTAWESOME IMPORTS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/react-fontawesome";

function App() {
  const currentURL = window.location.href // returns the absolute URL of a page

  const pathname = window.location.pathname //returns the current url minus the domain name

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
      <Header />
    </>
  );
}

export default App;
