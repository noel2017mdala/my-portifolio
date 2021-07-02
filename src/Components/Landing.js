import React from "react";
import { Link } from "react-router-dom";
import file from "../files/Resume.pdf";
import { Mid } from "../styles/content";

const Landing = () => {
  return (
    <Mid>
      <div className="content">
        <div className="row">
          <div className="column">
            {/* <div>Some Text in Column One</div> */}
            <div className="intro">
              <p>
                Hello 👋 My Name is
                <span>
                  <Link to="/about">Abel M'dala</Link>
                </span>
              </p>
              <h1>
                I am a full-stack software developer from Blantyre Malawi🇲🇼
              </h1>
            </div>

            <div className="callToAction">
              <div className="btn_collection">
                <a href={file} download="Resume">
                  <button className="resume">Download My Resume</button>
                </a>
                <a href="mailto:noelmdala2017@gmail.com">
                  <button className="contact">Email Me</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Mid>
  );
};
export default Landing;
