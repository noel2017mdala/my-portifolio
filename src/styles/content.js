import styled from "styled-components";

const media = {
  mobile: `@media(max-width: 40em)`,
  tablet: `@media(min-width: 40em) and (max-width: 75em)`,
  bigScreen: `@media (min-width: 75em)`,
};

export const Mid = styled.div`
  margin-top: 2em;
  .intro {
    font-size: 20px;
  }
  .intro span {
    font-weight: bold;
  }

  .contact,
  .resume {
    margin-left: 4em;
    background-color: black;
    color: white;
    border: none;
    border-radius: 0.5em;
    font-family: "Roboto", sans-serif;
    font-size: 16px;
    padding: 1em;
    cursor: pointer;
  }

  ${media.mobile} {
    margin-top: 5em;
    .intro {
      text-align: center;
      font-size: 16px;
      margin: 1em 0em;
      text-transform: capitalize;
      line-height: 3em;
    }

    .intro span {
      font-weight: bold;
    }

    .intro h1 {
      margin: 0.5em 0em;
    }

    .callToAction {
      width: 100%;
    }

    .callToAction .resume {
      display: block;
      padding: 1em;
      margin: 0 auto;
      background-color: black;
      border: none;
      border-radius: 0.5em;
      font-family: "Roboto", sans-serif;
      font-size: 16px;
      color: white;
    }

    .callToAction .contact {
      display: block;
      padding: 1em 2.7em;
      margin: 2em auto;
      background-color: black;
      color: white;
      border: none;
      border-radius: 0.5em;
      font-family: "Roboto", sans-serif;
      font-size: 16px;
    }
  }
  ${media.tablet} {
    .row {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      width: 100%;
    }

    .column {
      display: flex;
      flex-direction: column;
      flex-basis: 100%;
      flex: 1;
    }
  }

  ${media.bigScreen} {
    .row {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      width: 100%;
    }

    .column {
      display: flex;
      flex-direction: column;
      flex-basis: 100%;
      flex: 1;
    }

    .intro {
      text-align: left;
      margin-left: 3em;
    }
  }
`;
