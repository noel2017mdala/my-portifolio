import styled from "styled-components";

const media = {
  mobile: `@media(max-width: 40em)`,
  tablet: `@media(min-width: 40em) and (max-width: 75em)`,
  bigScreen: `@media (min-width: 75em)`,
};

export const Mid = styled.div`
  margin-top: 2em;
  .intro {
    text-align: center;
    font-size: 16px;
    margin: 1em 0em;
    text-transform: capitalize;
    // line-height: 3em;
  }

  .intro span {
    font-weight: bold;
  }

  .callToAction a {
    text-decoration: none;
  }
  .resume,
  .contact {
    margin: 0 auto;
    background-color: rgb(255, 69, 80);
    color: white;
    border: none;
    border-radius: 0.5em;
    // font-family: "Roboto", sans-serif;
    font-size: 16px;
    padding: 1em;
    cursor: pointer;
    display: block;
  }

  .contact {
    margin-top: 1em;
  }

  ${media.tablet} {
    .intro {
      text-align: center;
      font-size: 19px;
      text-transform: capitalize;
      line-height: 3em;
    }

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

    .callToAction {
    }

    .btn_collection {
      margin-left: 2em;
    }

    .resume,
    .contact {
      display: inline;
      margin: 0em 1em;
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
