import React from "react";
import { Main } from "../styles/photoGalleryDesc";
import Gallery from "../images/portfolio_images/webWhatsapp_clone.jpg";
const Whatapp = () => {
  return (
    <Main>
      <div className="container">
        <div className="text">
          <h2>Web Whatsapp</h2>

          <img src={Gallery} alt="gallery" height="30px" width="20px" />
        </div>

        <div className="description">
          <h3 className="appName">Web Whatsapp</h3>
          <p className="appDescription">
            This application was inspired by{" "}
            <a
              href="https://www.okonkwokaren.com/portfolio/whatsapp-web-clone"
              target="_blank"
            >
              Karen Okonwo
            </a>
            she is the one who developed the User interface and i am currently
            adding the functionality and also adding the backend Service. The
            FrontEnd is developed using <b>React</b> and the Backend is being
            developed using <b>Node.js</b>
          </p>

          <div className="button_collection">
            <button className="live_view">View Live Demo</button>
            <button className="git">Source Code</button>
          </div>
        </div>
      </div>
    </Main>
  );
};

export default Whatapp;
