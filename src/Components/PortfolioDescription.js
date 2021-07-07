import React from "react";
import PhotoGalleryDesc from "./photogalleryDescription";
import FmsDescription from "./FmsDescription";
import { Main } from "../styles/Portfolio";
import PortfolioDesc from "./PortfolioDesc";
import CovidTracker from "./CovidTrackerDesc";
import Whatapp from "./WebWhatsapp";
const PortfolioDescription = (props) => {
  return (
    <Main>
      {
        <div className="projectsContainer">
          {props.match.params.id === "photo_gallery" ? (
            <PhotoGalleryDesc />
          ) : props.match.params.id === "fms" ? (
            <FmsDescription />
          ) : props.match.params.id === "portfolio" ? (
            <PortfolioDesc />
          ) : props.match.params.id === "covid_tracker" ? (
            <CovidTracker />
          ) : props.match.params.id === "web_whatsapp" ? (
            <Whatapp />
          ) : null}
        </div>
      }
    </Main>
  );
};

export default PortfolioDescription;
