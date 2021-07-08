import React from "react";
import { Main } from "../styles/photoGalleryDesc";
import Gallery from "../images/portfolio_images/portfolio.jpg";
const PortfolioDesc = () => {
  return (
    <Main>
      <div className="container">
        <div className="text">
          <h2>Portfolio</h2>

          <img src={Gallery} alt="gallery" height="30px" width="20px" />
        </div>

        <div className="description">
          <h3 className="appName">Portfolio</h3>
          <p className="appDescription">
            This is My personal portfolio website and This website was developed
            using <b>React</b>
          </p>

          <div className="button_collection">
            <button className="live_view">
              <a href="http://abelmdala.netlify.app/" target="_blank">
                View Live Demo
              </a>
            </button>
            <button className="git">
              <a
                href="https://github.com/noel2017mdala/my-portifolio"
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

export default PortfolioDesc;
