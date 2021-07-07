import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Header } from "../styles";

const Nav = () => {
  const [state, setState] = useState({
    home: true,
    about: false,
    resume: false,
    portfolio: false,
    contact: false,
  });
  return (
    <Header>
      <div className="burger">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <nav>
        <h1>
          <Link to="/">AM</Link>
        </h1>

        <div className="link-container">
          <ul className="navigation_link">
            <Link
              to="/"
              className={state.home ? "active" : ""}
              onClick={(e) => {
                setState((prevState) => ({
                  ...prevState,
                  home: true,
                  about: false,
                  resume: false,
                  portfolio: false,
                  contact: false,
                }));
              }}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={state.about ? "active" : ""}
              onClick={(e) => {
                setState((prevState) => ({
                  ...prevState,
                  home: false,
                  about: true,
                  resume: false,
                  portfolio: false,
                  contact: false,
                }));
              }}
            >
              About
            </Link>
            <Link
              to="/resume"
              className={state.resume ? "active" : ""}
              onClick={(e) => {
                setState((prevState) => ({
                  ...prevState,
                  home: false,
                  about: false,
                  resume: true,
                  portfolio: false,
                  contact: false,
                }));
              }}
            >
              Resume
            </Link>
            <Link
              to="/portfolio"
              className={state.portfolio ? "active" : ""}
              onClick={(e) => {
                setState((prevState) => ({
                  ...prevState,
                  home: false,
                  about: false,
                  resume: false,
                  portfolio: true,
                  contact: false,
                }));
              }}
            >
              Portfolio
            </Link>
            <Link
              to="/contact"
              className={state.contact ? "active" : ""}
              onClick={(e) => {
                setState((prevState) => ({
                  ...prevState,
                  home: false,
                  about: false,
                  resume: false,
                  portfolio: false,
                  contact: true,
                }));
              }}
            >
              Contact
            </Link>
          </ul>
        </div>
      </nav>
    </Header>
  );
};

export default Nav;
