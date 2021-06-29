import React from "react";
import { Link } from "react-router-dom";
import { Header } from "../styles";

const Nav = () => {
  return (
    <Header>
      <div className="burger">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <nav>
        <h1>
          <a href="/">AM </a>
        </h1>

        <div className="link-container">
          <ul className="navigation_link">
            <Link to="/"> Home</Link>
            <Link to="/about"> About</Link>
            <Link to="/resume"> Resume</Link>
            <Link to="/portfolio"> Portfolio</Link>
            <Link to="/contact"> Contact</Link>
          </ul>
        </div>
      </nav>
    </Header>
  );
};

export default Nav;
