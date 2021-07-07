import React from "react";
import { Main } from "../styles/photoGalleryDesc";
import Gallery from "../images/portfolio_images/covidTracker.png";
const CovidTracker = () => {
  return (
    <Main>
      <div className="container">
        <div className="text">
          <h2>Covid Tracker</h2>

          <img src={Gallery} alt="gallery" height="30px" width="20px" />
        </div>

        <div className="description">
          <h3 className="appName">Covid Tracker</h3>
          This is my first React application and the aim of this application was
          to help users to track The Covid-19 cases and how countries are
          Copping with this pandemic this application was developed using{" "}
          <b>React</b>
          <p className="appDescription"></p>
          <div className="button_collection">
            <button className="live_view">
              <a href="" target="_blank">
                View Live Demo
              </a>
            </button>
            <button className="git">
              <a href="https://github.com/noel2017mdala/Covid-19_tracker">
                Source Code
              </a>
            </button>
          </div>
        </div>
      </div>
    </Main>
  );
};

export default CovidTracker;
