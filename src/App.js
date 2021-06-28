import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MidSection from "./Components/Mid-section";
import { Link } from "react-router-dom";
import { Header } from "./styles";

function App() {
  return (
    <div>
      <Header>
        <div className="burger">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
        <nav>
          <Router>
            <h1>{<a href="/">Abel M'dala</a>}</h1>
            <div className="link-container">
              <ul className="navigation_link">
                <Link to="/"> Home</Link>
                <Link to="/about"> About</Link>
                <Link to="/resume"> Resume</Link>
                <Link to="/portfolio"> Portfolio</Link>
                <Link to="/contact"> Contact</Link>
              </ul>
            </div>
          </Router>
        </nav>
      </Header>

      <MidSection />
    </div>
  );
}

export default App;
