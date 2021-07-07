import styled from "styled-components";

const media = {
  mobile: `@media(max-width: 40em)`,
  tablet: `@media(min-width: 40em) and (max-width: 75em)`,
  bigScreen: `@media (min-width: 75em)`,
};

export const Main = styled.div`
  margin-top: 1em;

  .projectsContainer {
    display: flex;
    flex-direction: column;
  }

  .projectsContainer .projects {
    width: 95%;
    height: 15em;
    margin: 2em auto;
    box-shadow: 5px 5px 15px rgba(0, 0, 0.4, 0.6);
    border-radius: 0.5em;
    transition: all 0.2s ease-in-out;
  }

  .hoverElement {
    display: none;
  }
  .projectsContainer .projects:hover  {
    cursor: pointer;
    transform: scale(1.1);
    box-shadow: 5px 5px 15px rgba(0, 0, 0.4, 0.6);
  }

}
  .projects img {
    width: 100%;
    height: 100%;
  }

  .notdisplayed {
    display: none;
    /* color: red; */
    position: absolute;
  }

  .displayed {
    // display: flex;
    // position: relative;
    // height: 50px;
    // top: -60%;
    // width: 35%;
    // margin: block;
    // margin: 2em auto;
    // padding: 1em 0;
    // background-color: rgb(255, 96, 89);
    // color: white;
    // border: none;
    // border-radius: 0.3em;
    // transition: all 0.2s ease-in-out;
    // text-transform: uppercase;
    // align-items: center;
    // justify-content: center;
    // cursor: pointer;

    text-decoration: none;
    color: white;
    background-color: rgb(255, 96, 89);
    display: flex;
    position: relative;
    top: -65%;
    width: 25%;
    margin: block;
    margin: 2em auto;
    padding: 1em;
    align-content: center;
    justify-content: center;
    border-radius: 0.3em;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    font-size: 12px;
  }

  .displayed a{
    text-decoration: none;
    color: white;
  }



  .displayed:hover {
    transform: scale(1.1);
    box-shadow: 5px 5px 15px rgba(0, 0, 0.4, 0.6);
  }
  

  ${media.tablet} {
    .projectsContainer .projects {
      width: 85%;
      height: 23em;
      margin: 2em auto;
      box-shadow: 5px 5px 15px rgba(0, 0, 0.4, 0.6);
      border-radius: 0.5em;
    }
  }

  ${media.bigScreen} {
    .projectsContainer .projects {
      width: 70%;
      height: 25em;
      margin: 2em auto;
      box-shadow: 5px 5px 15px rgba(0, 0, 0.4, 0.6);
      border-radius: 0.5em;
    }
  }
`;
