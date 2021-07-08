import React from "react";
import Gallery from "../images/portfolio_images/makwacha.png";
import { Main } from "../styles/photoGalleryDesc";

const MakwachaDesc = () => {
  return (
    <Main>
      <div className="container">
        <div className="text">
          <h2>Makwacha</h2>

          <img src={Gallery} alt="gallery" height="30px" width="20px" />
        </div>

        <div className="description">
          <h3 className="appName">Makwacha</h3>
          <p className="appDescription">
            This is one of the projects the i and my co-workers have worked on
            and it is still in the final stages of development and this
            web-application is there to help Small and medium-sized enterprises
            to easily manage finances, make and receive online payments. easy
            this application is being developed using <b>PHP</b>,{" "}
            <b>Codeigniter</b>,<b>Mysql</b>, <b>Javascript</b>, <b>HTML</b>and
            <b>Css</b>
          </p>

          <div className="button_collection">
            <button className="live_view">
              <a href="https://makwacha.com/" target="_blank">
                View Live Demo
              </a>
            </button>
          </div>
        </div>
      </div>
    </Main>
  );
};

export default MakwachaDesc;
