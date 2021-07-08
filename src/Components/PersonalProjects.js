import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Main } from "../styles/PersonalProjects";
import photo_gallery from "../images/portfolio_images/photo_gallery.png";
import fms from "../images/portfolio_images/fms.png";
import portfolio from "../images/portfolio_images/portfolio.jpg";
import whatsApp from "../images/portfolio_images/webWhatsapp_clone.jpg";
import covidTracker from "../images/portfolio_images/covidTracker.png";

const PersonalProjects = () => {
  const [display, setDisplay] = useState({
    photoGallery_button: false,
    fms_button: false,
    portfolio_button: false,
    covidTracker_button: false,
    whatsApp_button: false,
  });

  return (
    <Main>
      <div className="projectsContainer">
        <div
          className="projects"
          onMouseEnter={(e) =>
            setDisplay((previousState) => ({
              ...previousState,
              photoGallery_button: true,
              fms_button: false,
              portfolio_button: false,
              covidTracker_button: false,
              whatsApp_button: false,
            }))
          }
          onMouseLeave={(e) =>
            setDisplay((previousState) => ({
              ...previousState,
              photoGallery_button: false,
              fms_button: false,
              portfolio_button: false,
              covidTracker_button: false,
              whatsApp_button: false,
            }))
          }
        >
          <img
            src={photo_gallery}
            alt="Photo Gallery"
            alt="20px"
            width="20px"
          />
          <Link
            to="/portfolio/photo_gallery"
            className={
              display.photoGallery_button ? "displayed" : "notdisplayed"
            }
          >
            Learn More
          </Link>
        </div>
        <div
          className="projects"
          onMouseEnter={(e) =>
            setDisplay((previousState) => ({
              ...previousState,
              photoGallery_button: false,
              fms_button: true,
              portfolio_button: false,
              covidTracker_button: false,
              whatsApp_button: false,
            }))
          }
          onMouseLeave={(e) =>
            setDisplay((previousState) => ({
              ...previousState,
              photoGallery_button: false,
              fms_button: false,
              portfolio_button: false,
              covidTracker_button: false,
              whatsApp_button: false,
            }))
          }
        >
          <img
            src={fms}
            alt="Financial Management System"
            alt="20px"
            width="20px"
          />
          <Link
            to="/portfolio/fms"
            className={display.fms_button ? "displayed" : "notdisplayed"}
          >
            Learn More
          </Link>
        </div>

        <div
          className="projects"
          onMouseEnter={(e) =>
            setDisplay((previousState) => ({
              ...previousState,
              photoGallery_button: false,
              fms_button: false,
              portfolio_button: true,
              covidTracker_button: false,
              whatsApp_button: false,
            }))
          }
          onMouseLeave={(e) =>
            setDisplay((previousState) => ({
              ...previousState,
              photoGallery_button: false,
              fms_button: false,
              portfolio_button: false,
              covidTracker_button: false,
              whatsApp_button: false,
            }))
          }
        >
          <img src={portfolio} alt="Portfolio" alt="20px" width="20px" />
          <Link
            to="/portfolio/portfolio"
            className={display.portfolio_button ? "displayed" : "notdisplayed"}
          >
            Learn More
          </Link>
        </div>
        <div
          className="projects"
          onMouseEnter={(e) =>
            setDisplay((previousState) => ({
              ...previousState,
              photoGallery_button: false,
              fms_button: false,
              portfolio_button: false,
              covidTracker_button: true,
              whatsApp_button: false,
            }))
          }
          onMouseLeave={(e) =>
            setDisplay((previousState) => ({
              ...previousState,
              photoGallery_button: false,
              fms_button: false,
              portfolio_button: false,
              covidTracker_button: false,
              whatsApp_button: false,
            }))
          }
        >
          <img src={covidTracker} alt="Covid Tracker" alt="20px" width="20px" />
          <Link
            to="/portfolio/covid_tracker"
            className={
              display.covidTracker_button ? "displayed" : "notdisplayed"
            }
          >
            Learn More
          </Link>
        </div>
        <div
          className="projects"
          onMouseEnter={(e) =>
            setDisplay((previousState) => ({
              ...previousState,
              photoGallery_button: false,
              fms_button: false,
              portfolio_button: false,
              covidTracker_button: false,
              whatsApp_button: true,
            }))
          }
          onMouseLeave={(e) =>
            setDisplay((previousState) => ({
              ...previousState,
              photoGallery_button: false,
              fms_button: false,
              portfolio_button: false,
              covidTracker_button: false,
              whatsApp_button: false,
            }))
          }
        >
          <img src={whatsApp} alt="WhatsApp" alt="20px" width="20px" />
          <Link
            to="/portfolio/web_whatsapp"
            className={display.whatsApp_button ? "displayed" : "notdisplayed"}
          >
            Learn More
          </Link>
        </div>
      </div>
    </Main>
  );
};

export default PersonalProjects;
