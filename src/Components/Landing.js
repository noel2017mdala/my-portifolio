import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import file from "../files/Resume.pdf";
import { Mid } from "../styles/content";
import { Home } from "../Redux/Actions/Nav_Action";

const Landing = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(Home());
  }, [dispatch]);

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
                I am a fullstack software developer from Blantyre Malawi🇲🇼
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
