import styled from "styled-components";

const media = {
  mobile: `@media(max-width: 40em)`,
  tablet: `@media(min-width: 40em) and (max-width: 75em)`,
  bigScreen: `@media (min-width: 75em)`,
};

export const Header = styled.header`
  nav {
    height: 15vh;
    background-color: FFFFFF;
    color: white;
    box-shadow: 1px 1px 4px 0 rgba(0, 0, 0, 0.1);
  }

  nav h1 {
    display: inline;
    margin-left: 0.2em;
    font-size: 1.3rem;
    position: relative;
    top: 2em;
    left: 1em;
  }
  nav h1 a {
    text-decoration: none;
    color: rgb(255, 96, 89);
    cursor: pointer;
  }

  .nav-links {
    display: flex;
    list-style: none;
    width: 50%;
    height: 100%;
    justify-content: space-around;
    align-items: center;
    margin-left: auto;
  }

  .nav-links a {
    list-style: none;
    text-decoration: none;
    margin: 0.5em;
    color: rgb(96, 89, 114);
    cursor: pointer;
    font-size: 1.2rem;
    text-transform: capitalize;
  }

  .active {
    border-bottom: 2px solid rgb(255, 96, 89);
  }

  ${media.mobile} {
    .line {
      width: 30px;
      height: 3px;
      background: black;
      margin: 5px;
    }
    nav {
      position: relative;
    }

    nav h1 {
      display: inline;
      margin-left: 0.2em;
      font-size: 1.3rem;
      position: absolute;
      cursor: pointer;
      left: 5%;
      top: 20%;
    }

    .hamburger {
      position: absolute;
      cursor: pointer;
      right: 5%;
      top: 50%;
      transform: translate(-5%, -50%);
      z-index: 2;
    }

    .nav-links {
      position: fixed;
      top: -1em;
      background: rgb(255, 96, 89);
      height: 100vh;
      width: 100%;
      padding: 0em;
      // margin: 0em;
      flex-direction: column;
      clip-path: circle(0px at 90% -10%);
      -webkit-clip-path: circle(0px at 90% -10%);
      transition: all 1s ease-out;
      pointer-events: none;
      z-index: 1;
    }

    .nav-links.open {
      clip-path: circle(1000px at 90% -10%);
      -webkit-clip-path: circle(1000px at 90% -10%);
      pointer-events: all;
    }

    .nav-links a {
      color: white;
    }
  }

  ${media.tablet} {
    nav {
      height: 18vh;
    }

    .nav-links {
      display: flex;
      list-style: none;
      width: 70%;
      height: 100%;
      justify-content: space-around;
      align-items: center;
      margin-left: auto;
      // background-color: red;
    }
  }
`;
