import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Portfolio as PortfolioReducer } from "../Redux/Actions/Nav_Action";
import PhotoGalleryDesc from "./photogalleryDescription";
import FmsDescription from "./FmsDescription";
import { Main } from "../styles/Portfolio";
import PortfolioDesc from "./PortfolioDesc";
import CovidTracker from "./CovidTrackerDesc";
import Whatapp from "./WebWhatsapp";
import MakwachaDesc from "./MakwachaDescription";
import SmartSchoolsDesc from "./SmartschoolsDesc";
import MulanjeMissionDesc from "./MulanjeMissionDesc";
const PortfolioDescription = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(PortfolioReducer());
  }, [dispatch]);

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
          ) : props.match.params.id === "makwacha" ? (
            <MakwachaDesc />
          ) : props.match.params.id === "smart_schools" ? (
            <SmartSchoolsDesc />
          ) : props.match.params.id === "MMCNM" ? (
            <MulanjeMissionDesc />
          ) : null}
        </div>
      }
    </Main>
  );
};

export default PortfolioDescription;
