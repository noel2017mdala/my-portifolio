import React from "react";
import file from "../files/Resume.pdf";
import { Main } from "../styles/Resume";
import node from "../images/node.png";
import html from "../images/html.png";
import css from "../images/css.png";
import javascript from "../images/javascript.png";
import php from "../images/php.png";
import codeigniter from "../images/codeigniter.png";
import laravel from "../images/laravel.png";
import sql from "../images/sql.png";
import react from "../images/React.png";
import redux from "../images/redux.png";
import styled from "../images/styled.jpeg";
import wordpress from "../images/wordpress.png";
import git from "../images/git.png";
import linux from "../images/linux.png";
const Resume = () => {
  return (
    <Main>
      <header>
        <h1>Resume</h1>
      </header>

      <h2 className="tagLine">Learn more about my Skills and experience.</h2>

      <h1 className="workExp">Work Experience</h1>

      <div className="experience">
        <div className="work">
          <p className="work_years">January 2020 - Present</p>
          <p className="position">Full stack software developer</p>
          <p className="company">
            <a href="http://m-technologiesmw.com/">M-technologies Limited</a>
          </p>
          <p className="summary">
            • Currently i am Working at <strong>M-technologies Limited </strong>
            which is a Technology company that provides multiple technology
            solutions here in malawi. And below are some of the applications i
            have worked on while working There
          </p>
          <p className="company">
            <a
              href="https://smartschools.mw/site/"
              target="_blank"
              rel="noreferrer"
            >
              Smart schools
            </a>
          </p>
          <p className="summary">
            • Smart schools is a Software as a service (SASS) schoolManagement
            System which is used in the education sector by both
            primary/secondary and tertiary institutions. It is mainly used to
            manage all records be it academic or non-academic, from student
            admission to graduation. smart schools is a web based application
            and you can view the demo
            <a
              href="https://demo.smartschools.mw/app/"
              target="_blank"
              rel="noreferrer"
            >
              Here
            </a>
          </p>

          <p className="company">
            <a
              href="https://makwacha.com/site/"
              target="_blank"
              rel="noreferrer"
            >
              Makwacha
            </a>
          </p>
          <p className="summary">
            • Makwacha is a Software as a service (SASS) Accounting Application
            much like Quick books which will be used my small to medium
            enterprise companies to manage their Finances as of now this
            application is still on progress of being published for use
            <a
              href="https://makwacha.com/site/"
              target="_blank"
              rel="noreferrer"
            >
              Here
            </a>
          </p>
        </div>

        <div className="tech_stack">
          <h2>My Tech Stack</h2>

          <div className="cards_container">
            <div className="card">
              <img src={html} alt="HTML5" width="40px" height="40px" />
              <p>HTML</p>
            </div>
            <div className="card">
              <img src={css} alt="CSS3" width="40px" height="40px" />
              <p>CSS</p>
            </div>
            <div className="card">
              <img
                src={javascript}
                alt="Javascript"
                width="40px"
                height="40px"
              />
              <p>Javascript</p>
            </div>

            <div className="card">
              <img src={react} alt="Javascript" width="40px" height="40px" />
              <p>React.js</p>
            </div>

            <div className="card">
              <img src={redux} alt="Redux" width="40px" height="40px" />
              <p>Redux</p>
            </div>
            <div className="card">
              <img
                src={styled}
                alt="Styled Components"
                width="40px"
                height="40px"
              />
              <p>Styled Components</p>
            </div>

            <div className="card">
              <img src={node} alt="node" width="40px" height="40px" />
              <p>Node.js</p>
            </div>
            <div className="card">
              <img src={php} alt="PHP" width="40px" height="40px" />
              <p>PHP</p>
            </div>
            <div className="card">
              <img
                src={codeigniter}
                alt="Codeigniter"
                width="40px"
                height="40px"
              />
              <p>Codeigniter</p>
            </div>
            <div className="card">
              <img src={laravel} alt="Laravel" width="40px" height="40px" />
              <p>Laravel</p>
            </div>
            <div className="card">
              <img src={sql} alt="SQL" width="40px" height="40px" />
              <p>SQL</p>
            </div>

            <div className="card">
              <img src={wordpress} alt="WordPress" width="40px" height="40px" />
              <p>WordPress</p>
            </div>

            <div className="card">
              <img src={git} alt="Git" width="40px" height="40px" />
              <p>Git</p>
            </div>

            <div className="card">
              <img src={linux} alt="Linux" width="40px" height="40px" />
              <p>Linux</p>
            </div>
          </div>
        </div>

        <a href={file} download="Resume" className="resume_container">
          <button className="resume">Download My Resume</button>
        </a>
        {/* <button className="resume">Download Resume</button> */}
      </div>
    </Main>
  );
};

export default Resume;
