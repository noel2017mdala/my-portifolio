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
    // text-transform: capitalize;
  }

  .intro span {
    font-weight: bold;
  }

  .intro span a {
    text-decoration: none;
    color: rgb(255, 70, 79);
    margin-left: 0.5em;
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
      // text-transform: capitalize;
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

    .btn_collection {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      margin-bottom: 1em;
    }

    .contact {
      margin: 1em 2em;
    }
  }

  ${media.bigScreen} {
    .intro {
      text-align: center;
      font-size: 19px;
      // text-transform: capitalize;
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
    .btn_collection {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      margin-bottom: 1em;
    }

    .contact {
      margin: 1em 2em;
    }
  }
`;
