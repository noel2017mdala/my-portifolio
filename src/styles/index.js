import styled from "styled-components";

const media = {
  mobile: `@media(max-width: 40em)`,
  tablet: `@media(min-width: 40em) and (max-width: 75em)`,
  bigScreen: `@media (min-width: 75em)`,
};

export const Header = styled.header`
  nav {
    background-color: FFFFFF;
    color: white;
    padding: 3em 0;
    padding: 2em;
    box-shadow: 1px 1px 4px 0 rgba(0, 0, 0, 0.1);
  }

  nav h1 {
    display: inline;
    margin-left: 0.2em;
    font-size: 1.3rem;
    text-transform: uppercase;
  }

  nav h1 a {
    text-decoration: none;
    color: rgb(255, 96, 89);
    cursor: pointer;
  }

  nav .link-container {
    float: right;
    margin-right: 2em;
  }

  .navigation_link a {
    list-style: none;
    text-decoration: none;
    margin: 0.5em;
    color: rgb(96, 89, 114);
    cursor: pointer;
    font-size: 1.2rem;
    text-transform: capitalize;
  }

  ${media.mobile} {
    nav h1 {
      color: rgb(255, 96, 89);
    }
    .link-container {
      display: none;
    }

    .burger {
      position: absolute;
      cursor: pointer;
      right: 5%;
      top: 6.5%;
      transform: translate(-5%, -50%);
      z-index: 1;
    }

    .line {
      width: 30px;
      height: 3px;
      background: black;
      margin: 5px;
    }
  }

  ${media.tablet} {
    .burger {
      position: absolute;
      cursor: pointer;
      right: 5%;
      top: 11%;
      transform: translate(-5%, -50%);
      z-index: 1;
    }
  }
`;
