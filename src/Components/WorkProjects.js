import React, { useState } from "react";
import { Main } from "../styles/PersonalProjects";
import makwacha from "../images/portfolio_images/makwacha.png";
import smartSchools from "../images/portfolio_images/smartschools.png";
import Mulanje from "../images/portfolio_images/mulanjeMission.png";
const WorkProjects = () => {
  const [display, setDisplay] = useState({
    makwacha_button: false,
    smartSchools_button: false,
    portfolio_button: false,
    mulanje_button: false,
  });

  return (
    <Main>
      <div className="projectsContainer">
        <div
          className="projects"
          onMouseEnter={(e) =>
            setDisplay((previousState) => ({
              ...previousState,
              makwacha_button: true,
              smartSchools_button: false,
              portfolio_button: false,
              mulanje_button: false,
            }))
          }
          onMouseLeave={(e) =>
            setDisplay((previousState) => ({
              ...previousState,
              makwacha_button: false,
              smartSchools_button: false,
              portfolio_button: false,
              mulanje_button: false,
            }))
          }
        >
          <img src={makwacha} alt="Photo Gallery" alt="20px" width="20px" />
          <button
            className={display.makwacha_button ? "displayed" : "notdisplayed"}
          >
            Learn More
          </button>
        </div>
        <div
          className="projects"
          onMouseEnter={(e) =>
            setDisplay((previousState) => ({
              ...previousState,
              makwacha_button: false,
              smartSchools_button: true,
              mulanje_button: false,
            }))
          }
          onMouseLeave={(e) =>
            setDisplay((previousState) => ({
              ...previousState,
              makwacha_button: false,
              smartSchools_button: false,
              mulanje_button: false,
            }))
          }
        >
          <img
            src={smartSchools}
            alt="Financial Management System"
            alt="20px"
            width="20px"
          />
          <button
            className={
              display.smartSchools_button ? "displayed" : "notdisplayed"
            }
          >
            Learn More
          </button>
        </div>
        {/* <div className="projects">
          <img
            src={Mulanje}
            alt="Financial Management System"
            alt="20px"
            width="20px"
          />
          <button
            className={display.mulanje_button ? "displayed" : "notdisplayed"}
          >
            Learn More
          </button>
        </div> */}

        <div
          className="projects"
          onMouseEnter={(e) =>
            setDisplay((previousState) => ({
              ...previousState,
              makwacha_button: false,
              smartSchools_button: false,
              mulanje_button: true,
            }))
          }
          onMouseLeave={(e) =>
            setDisplay((previousState) => ({
              ...previousState,
              makwacha_button: false,
              smartSchools_button: false,
              mulanje_button: false,
            }))
          }
        >
          <img
            src={Mulanje}
            alt="Financial Management System"
            alt="20px"
            width="20px"
          />
          <button
            className={display.mulanje_button ? "displayed" : "notdisplayed"}
          >
            Learn More
          </button>
        </div>
      </div>
    </Main>
  );
};

export default WorkProjects;
