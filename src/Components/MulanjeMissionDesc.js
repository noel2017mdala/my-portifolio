import React from "react";
import Gallery from "../images/portfolio_images/mulanjeMission.png";
import { Main } from "../styles/photoGalleryDesc";

const MulanjeMissionDesc = () => {
  return (
    <Main>
      <div className="container">
        <div className="text">
          <h2>MMCNM</h2>

          <img src={Gallery} alt="gallery" height="30px" width="20px" />
        </div>

        <div className="description">
          <h3 className="appName">
            Mulanje Mission College Of Nursing and Midwifery
          </h3>
          <p className="appDescription">
            I was assigned a task To develop this website for Mulanje Mission
            College Of Nursing and Midwifery and i developed this website using
            <b>Wordpress</b>
          </p>

          <div className="button_collection">
            <button className="live_view">
              <a href="http://mmcnm.org/" target="_blank">
                View Live Demo
              </a>
            </button>
          </div>
        </div>
      </div>
    </Main>
  );
};

export default MulanjeMissionDesc;
