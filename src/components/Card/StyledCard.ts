import styled from "@emotion/styled";

export const CardContainer = styled.div`
  background-color: white;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;
  border-radius: 1em;
  text-align: center;
  padding: 0.5em;

  &:hover {
    transform: scale(1.02);
  }
`;

export const CardIcon = styled.img`
  width: min(150px, 100%);
  height: min(150px, 100%);
`;

export const CardHeading = styled.h2`
  font-size: clamp(0.8rem, 2vw + 0.3rem, 1.2rem);
  margin-bottom: 1em;
`;

export const CardContent = styled.p`
  font-size: clamp(0.6rem, 2vw + 0.3rem, 1rem);
  text-align: center;
  padding: 0.5em;
  margin: 0;
`;
