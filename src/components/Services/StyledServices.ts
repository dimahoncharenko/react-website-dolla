import styled from "@emotion/styled";

export const ServicesContainer = styled.div`
  background-color: #010606;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ServicesHeading = styled.h1`
  font-size: clamp(1.5rem, 3vw + 0.4rem, 2.5rem);
  color: white;
  text-align: center;
  padding: 0em 0.5em;
`;

export const ServicesWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: 1fr;
  max-width: min(800px, 100% - 2em);
  margin: 0 auto;
  padding: 1em 0em;
  gap: 1em;

  @media screen and (min-width: 460px) {
    grid-template-columns: repeat(2, 1fr);
    padding: 2em 0em;
  }

  @media screen and (min-width: 1000px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;
