import styled from "@emotion/styled";
import { Link } from "react-scroll";

export const Button = styled(Link)<{
  big?: "true";
  fontbig?: "true";
  primary?: "true";
  dark?: "true";
}>`
  cursor: pointer;
  background-color: ${({ primary }) => (primary ? "#01bf71" : "#010606")};
  padding: ${({ big }) => (big ? ".9em 1.5em" : ".7em 1em")};
  font-size: ${({ fontbig }) =>
    fontbig
      ? "clamp(1rem, 2vw + 0.5rem, 1.5rem)"
      : "clamp(0.7rem, 2vw + 0.5rem, 1.1rem)"};
  color: ${({ dark }) => (dark ? "#010606" : "#f9f9f9")};
  border-radius: var(--button-radius);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.2em;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: ${({ primary }) => (primary ? "#f9f9f9" : "#01bf71")};
    color: ${({ dark }) => (dark ? "#f9f9f9" : "#010606")};
  }
`;
