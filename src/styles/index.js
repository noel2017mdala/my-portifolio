import styled from "styled-components";

const media = {
  mobile: `@media(max-width: 40em)`,
  tablet: `@media(min-width: 40em) and (max-width: 75em)`,
  bigScreen: `@media (min-width: 75em)`,
};

export const Header = styled.header`
  //   color: white;
  //   width: 100%;
  //   height: 5em;
  //   background-color: #fff;
  //   box-shadow: 1px 1px 4px 0 rgba(0, 0, 0, 0.1);
  nav {
    // height: 100vh;
    background-color: #202020;
    color: white;
    padding: 0.2em 0;
  }

  nav ul a {
    color: white;
    text-decoration: none;
    text-transform: capitalize;
    display: block;
    font-family: sans-serif;
    text-align: center;
    font-size: 20px;
    padding: 2em;
  }

  ${media.mobile} {
    nav {
      position: relative;
      background-color: #202020;
      color: white;
      padding: 0.2em 0;
      height: 60px;
    }

    nav h1 {
      margin-left: 0.5em;
      font-family: "Roboto", sans-serif;
    }

    .burger {
      position: absolute;
      cursor: pointer;
      right: 5%;
      top: 5%;
      transform: translate(-5%, -50%);
      z-index: 1;
    }

    .line {
      width: 30px;
      height: 3px;
      background: white;
      margin: 5px;
    }

    .navigation_link {
      position: fixed;
      background: black;
      height: 100vh;
      width: 100%;
      flex-direction: column;
      //display: none;
      clip-path: circle(0px at 90% -10%);
      -webkit-clip-path: circle(0px at 90% -10%);
      transition: all 1s ease-out;
    }
    .navigation_link.open {
      clip-path: circle(650px at 90% -10%);
      -webkit-clip-path: circle(650px at 90% -10%);
    }
  }
  ${media.tablet} {
    nav ul a {
      color: white;
      text-decoration: none;
      text-transform: capitalize;
      display: block;
      font-family: sans-serif;
      text-align: center;
      padding: 1em;
    }

    .navigation_link {
      display: flex;
      width: 50%;
      list-style: none;
      height: 100%;
      justify-content: space-around;
      align-items: center;
      margin-left: auto;
    }
  }
  ${media.bigScreen} {
    nav ul a {
      color: white;
      text-decoration: none;
      text-transform: capitalize;
      display: block;
      font-family: sans-serif;
      text-align: center;
      padding: 2em;
    }

    .navigation_link {
      display: flex;
      width: 50%;
      list-style: none;
      height: 100%;
      justify-content: space-around;
      align-items: center;
      margin-left: auto;
    }
  }
`;
