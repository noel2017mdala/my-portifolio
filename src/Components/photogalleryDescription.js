import React from "react";
import Gallery from "../images/portfolio_images/photo_gallery.png";
import { Main } from "../styles/photoGalleryDesc";
const PhotoGalleryDesc = (e) => {
  return (
    <Main>
      <div className="container">
        <div className="text">
          <h2>Photo Gallery</h2>

          <img src={Gallery} alt="gallery" height="30px" width="20px" />
        </div>

        <div className="description">
          <h3 className="appName">Photo Gallery</h3>
          <p className="appDescription">
            This Application is a Clone of the
            <a href="https://unsplash.com/"> unsplash.com </a>
            Website. This application utilizes the open API that Unsplash
            provides. that allows a user to get images, search for a particular
            image and many more . This Application Was developed using React,
            Redux, Fetch Api
          </p>

          <div className="button_collection">
            <button className="live_view">
              <a
                href="https://heuristic-wright-38b95c.netlify.app/"
                target="_blank"
              >
                View Live Demo
              </a>
            </button>
            <button className="git">
              <a
                href="https://github.com/noel2017mdala/photo_gallery"
                target="_blank"
              >
                Source Code
              </a>
            </button>
          </div>
        </div>
      </div>
    </Main>
  );
};

export default PhotoGalleryDesc;
