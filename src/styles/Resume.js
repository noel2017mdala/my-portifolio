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
    text-align: center;
    padding-top: 1em;
    color: rgb(255, 96, 89);
    font-family: "Roboto", sans-serif;
  }

  .tagLine {
    text-align: center;
    font-weight: bold;
  }

  .workExp {
    text-align: center;
    padding-top: 0.4em;
  }

  .experience {
    display: flex;
    flex-direction: column;
  }

  .work .work_years {
    color: rgb(255, 96, 89);
    font-weight: bold;
    padding-left: 0.5em;
  }

  .work .position,
  .company {
    font-weight: bold;
    padding-left: 0.5em;
    text-transform: capitalize;
  }

  .company a {
    text-decoration: none;
    color: rgb(255, 96, 89);
    cursor: pointer;
  }

  .work .summary {
    padding: 0em 0.5em;
    font-size: 18px;
  }

  .summary a {
    color: rgb(255, 96, 89);
    text-decoration: none;
    font-weight: bold;
    padding-left: 0.2em;
  }

  .tech_stack h2 {
    text-align: center;
  }

  .cards_container .card {
    background-color: FFFFFF;
    color: black;
    box-shadow: 5px 5px 15px rgba(0, 0, 0.4, 0.6);
    width: 30%;
    padding: 1.5em;
    margin: 1em auto;
    border-radius: 0.5em;
    border: none;
    text-align: center;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
  }

  .cards_container .card:hover {
    box-shadow: 5px 5px 15px rgba(0, 0, 0.4, 0.6);
    color: black;
    cursor: pointer;
    transform: scale(1.1);
  }

  .card p:hover {
    color: rgb(255, 96, 89);
  }

  .card img {
    width: 60%;
    height: 60%;
  }

  .resume {
    width: 35%;
    margin: block;
    margin: 2em auto;
    padding: 2em 0;
    background-color: rgb(255, 96, 89);
    color: white;
    border: none;
    border-radius: 0.3em;
    transition: all 0.2s ease-in-out;
    text-transform: uppercase;
  }

  .resume: hover {
    cursor: pointer;
    transform: scale(1.1);
    box-shadow: 5px 5px 15px rgba(0, 0, 0.4, 0.6);
  }

  ${media.tablet} {
    header h2 {
      font-size: 2rem;
    }

    .cards_container {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      width: 60%;
      align-items: center;
      justify-content: center;
      margin: 0 auto;
    }

    .card img {
      width: 60%;
      height: 60%;
    }

    .wid_cards .card {
      width: 20%;
    }
  }

  ${media.bigScreen} {
    header h2 {
      font-size: 2rem;
    }

    .cards_container {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      width: 60%;
      align-items: center;
      justify-content: center;
      margin: 0 auto;
    }

    .card img {
      width: 60%;
      height: 60%;
    }

    .wid_cards .card {
      width: 20%;
    }
  }
`;
