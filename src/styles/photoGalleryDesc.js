import styled from "styled-components";
import photoGallery from "../images/portfolio_images/photo_gallery.png";
const media = {
  mobile: `@media(max-width: 40em)`,
  tablet: `@media(min-width: 40em) and (max-width: 75em)`,
  bigScreen: `@media (min-width: 75em)`,
};

export const Main = styled.div`
  .text {
    text-transform: uppercase;
    text-align: center;
    font-size: 16px;
    color: rgb(255, 96, 89);
  }

  .description .appName {
    text-transform: uppercase;
    margin-left: 0.5em;
  }

  .appDescription {
    margin-left: 0.2em;
  }

  .button_collection {
    // display: block;
    margin: 2em auto;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .button_collection button {
    padding: 1em;
    display: inline-block;
    border: none;
    margin: 0 0.5em;
    border-radius: 0.5em;
  }

  button a {
    text-decoration: none;
    color: white;
  }
  .button_collection .live_view {
    background-color: green;
    color: white;
  }
  .button_collection .git {
    background-color: black;
    color: white;
  }

  img {
    width: 100%;
    height: 100%;
  }
`;
