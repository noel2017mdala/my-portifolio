import React from "react";
import { Main } from "../styles/photoGalleryDesc";
import Gallery from "../images/portfolio_images/fms.png";
const FmsDescription = () => {
  return (
    <Main>
      <div className="container">
        <div className="text">
          <h2>Financial Management System</h2>

          <img src={Gallery} alt="gallery" height="30px" width="20px" />
        </div>

        <div className="description">
          <h3 className="appName">Financial Management System</h3>
          <p className="appDescription"></p>I developed This Application to help
          me in easy management of my funds because many are times where i had
          no clue on how i spent my money and on which thing i spent it on so
          this application helps in keeping track of my Funds. This application
          was developed With <b>React</b> for the FrontEnd And the Backend is
          powered By <b>Laravel</b> Api
          <div className="button_collection">
            <button className="live_view">
              <a
                href="https://nameless-plateau-99461.herokuapp.com/"
                target="_blank"
              >
                View Live Demo
              </a>
            </button>
            <button className="git">
              <a
                href="https://github.com/noel2017mdala/fms_back"
                target="_blank"
              >
                Source Code
              </a>
            </button>
          </div>
        </div>
      </div>
    </Main>
  );
};

export default FmsDescription;
