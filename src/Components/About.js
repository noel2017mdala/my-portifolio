import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Container } from "../styles/About";
import image from "../images/Me.JPG";
import fullstack from "../images/fullstack.png";
import Api from "../images/api.png";
import webApps from "../images/webapps.png";
import { About as AboutReducer } from "../Redux/Actions/Nav_Action";

const About = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(AboutReducer());
  }, [dispatch]);

  return (
    <Container>
      <header>
        <h1>Meet Abel M'dala</h1>
      </header>

      <div className="aboutMe">
        <div className="Image_container">
          <img src={image} alt="Me" />
        </div>

        <h2>
          <strong>Who am i ?</strong>
        </h2>
        <ul>
          <li>
            A Self-taught Full Stack software Developer with experience in
            developing web-sites, Web applications, and Apis.
          </li>

          <li>
            A good understanding of Engineering concepts eg Data Structures and
            Algorithms
            <a href="https://www.hackerrank.com/noelmdala2017">Hacker Rank</a>,
            <a href="https://leetcode.com/noel2017mdala/">LeetCode</a>
          </li>

          <li>
            Currently Working at
            <a href="http://m-technologiesmw.com/">M-technologies Limited</a>
            as a full-stack developer
          </li>
        </ul>

        <h2>
          <strong>What i do !</strong>
        </h2>

        <div className="wid_cards">
          <div className="card">
            <img src={fullstack} alt="Fullstack" width="40px" height="40px" />
            <p>Full-stack development</p>
          </div>
          <div className="card">
            <img src={Api} alt="API" width="40px" height="40px" />
            <p>API Development</p>
          </div>
          <div className="card">
            <img src={webApps} alt="WEB APPS" width="40px" height="40px" />
            <p>Web Application Development</p>
          </div>
        </div>

        <p className="callToAction">
          Feel free to
          <Link to="/contact">React Out</Link>
        </p>
      </div>
    </Container>
  );
};

export default About;
