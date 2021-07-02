import styled from "styled-components";

const media = {
  mobile: `@media(max-width: 40em)`,
  tablet: `@media(min-width: 40em) and (max-width: 75em)`,
  bigScreen: `@media (min-width: 75em)`,
};

export const Main = styled.div`
  background-color: FFFFFF;
  color: black;
  width: 90%;
  height: 75vh;
  margin: 2em auto;
  box-shadow: 5px 5px 15px rgba(0, 0, 0.4, 0.6);
  border-radius: 0.5em;
  overflow: auto;

  ::-webkit-scrollbar {
    width: 3px;
    background-color: #f5f5f5;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: #141414;
    background-image: -webkit-linear-gradient(
      90deg,
      transparent,
      rgba(0, 0, 0, 0.4) 50%,
      transparent,
      transparent
    );
  }

  header h1 {
    padding-top: 1em;
    color: rgb(255, 96, 89);
    font-family: "Roboto", sans-serif;
    text-transform: uppercase;
    margin-left: 2em;
  }

  header p {
    font-size: 1.5em;
    margin-left: 2em;
    font-weight: bold;
    text-align: center;
    display: none;
  }
`;
