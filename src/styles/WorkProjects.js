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
`;
