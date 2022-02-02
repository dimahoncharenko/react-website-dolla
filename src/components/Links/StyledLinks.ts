import styled from "@emotion/styled";
import { Link as LinkR } from "react-router-dom";

export const Links = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.5em;
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const LinksLabel = styled.h3`
  font-size: clamp(0.8rem, 2vw + 0.3rem, 1.2rem);
  margin-bottom: 1em;
  color: var(--link-color);
`;

export const Link = styled(LinkR)`
  text-decoration: none;
  color: var(--link-color);
  font-size: clamp(0.6rem, 2vw + 0.3rem, 1rem);
  transition: color 0.3s ease-in-out;

  &:hover {
    color: var(--link-hover);
  }
`;
