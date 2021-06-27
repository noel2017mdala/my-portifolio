import React from "react";
import { Mid } from "../styles/content";
import file from "../files/Resume.pdf";

const Midsection = () => {
  return (
    <Mid>
      <div className="content">
        <div className="row">
          <div className="column">
            {/* <div>Some Text in Column One</div> */}
            <div className="intro">
              <p>
                Hello 👋 My Name is <span> Abel M'dala</span>
              </p>
              <h1>
                I am a full-stack software developer from Blantyre Malawi🇲🇼
              </h1>
            </div>

            <div className="callToAction">
              <a href={file} download="Resume">
                <button className="resume">Download My Resume</button>
              </a>
              <a href="mailto:noelmdala2017@gmail.com">
                <button className="contact">Contact Me</button>
              </a>
            </div>
          </div>

          <div className="column">
            {/* <div>Some Text in Column One</div> 
            https://hookagency.com/website-color-schemes/
            */}
          </div>
        </div>
      </div>
    </Mid>
  );
};

export default Midsection;
