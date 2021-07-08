import React from "react";
import Gallery from "../images/portfolio_images/smartschools.png";
import { Main } from "../styles/photoGalleryDesc";

const SmartSchoolsDesc = () => {
  return (
    <Main>
      <div className="container">
        <div className="text">
          <h2>Smart Schools</h2>

          <img src={Gallery} alt="gallery" height="30px" width="20px" />
        </div>

        <div className="description">
          <h3 className="appName">Smart Schools</h3>
          <p className="appDescription">
            This is also another project that i work on here at{" "}
            <a href="http://m-technologiesmw.com/">M-technologies</a>
            and Smart schools is A Software as a Service application which is
            used in the education sector by both primary/secondary and tertiary
            institutions. It is mainly used to manage all records be it academic
            or non-academic, from student admission to graduation. this
            application was developed using the following technologies{" "}
            <b>PHP</b>, <b>Codeigniter</b>,<b>Mysql</b>, <b>Javascript</b>,{" "}
            <b>HTML</b>and
            <b>Css</b>
          </p>

          <div className="button_collection">
            <button className="live_view">
              <a href="https://demo.smartschools.mw/app/" target="_blank">
                View Live Demo
              </a>
            </button>
          </div>
        </div>
      </div>
    </Main>
  );
};

export default SmartSchoolsDesc;
