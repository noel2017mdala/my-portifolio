import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Header } from "../styles";
import {
  Home,
  About,
  Resume,
  Portfolio,
  Contact,
} from "../Redux/Actions/Nav_Action";

const Nav = () => {
  const dispatch = useDispatch();

  //call action when page has loaded
  const select = useSelector((e) => {
    return e.Navigation;
  });

  useEffect(() => {
    dispatch(Home());
  }, [dispatch]);
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
              className={select.home ? "active" : ""}
              onClick={(e) => {
                dispatch(Home());
              }}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={select.about ? "active" : ""}
              onClick={(e) => {
                dispatch(About());
              }}
            >
              About
            </Link>
            <Link
              to="/resume"
              className={select.resume ? "active" : ""}
              onClick={(e) => {
                dispatch(Resume());
              }}
            >
              Resume
            </Link>
            <Link
              to="/portfolio"
              className={select.portfolio ? "active" : ""}
              onClick={(e) => {
                dispatch(Portfolio());
              }}
            >
              Portfolio
            </Link>
            <Link
              to="/contact"
              className={select.contact ? "active" : ""}
              onClick={(e) => {
                dispatch(Contact());
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
