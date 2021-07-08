import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Main } from "../styles/Portfolio";
import PersonalProjects from "./PersonalProjects";
import WorkProjects from "./WorkProjects";
import { Tab, Tabs, AppBar } from "@material-ui/core";
import { Portfolio as PortfolioReducer } from "../Redux/Actions/Nav_Action";

const Portfolio = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(PortfolioReducer());
  }, [dispatch]);

  const [SelectedTab, setSelectedTab] = useState(0);
  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };
  return (
    <Main>
      <header>
        <h1>My Projects</h1>
        <p>
          This section will Showcases My work Both personal and Work Projects
        </p>
      </header>

      <div className="tab_container">
        <AppBar style={{ background: "#FFFFFF" }} position="static">
          <Tabs
            value={SelectedTab}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="secondary"
            centered
            TabIndicatorProps={{
              style: {
                backgroundColor: "#FF6059",
              },
            }}
          >
            <Tab label="Personal Projects" />
            <Tab label="Work Projects" />
          </Tabs>
        </AppBar>

        {SelectedTab === 0 ? <PersonalProjects /> : <WorkProjects />}
      </div>
      <div className="project_card_container">
        <div className="card"></div>
      </div>
    </Main>
  );
};

export default Portfolio;
