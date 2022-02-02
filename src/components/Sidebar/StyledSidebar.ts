import styled from "@emotion/styled";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

export const SidebarWrapper = styled.div<{
  isOpen: boolean;
}>`
  position: fixed;
  z-index: 1000;
  height: calc(100vh + var(--navbar-height));
  width: 100vw;
  background-color: black;
  transition: all 0.6s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
  transform: ${({ isOpen }) =>
    isOpen ? "translateY(0px)" : "translateY(-200vh)"};
  display: flex;
  flex-direction: column;
  gap: 3em;
  align-items: center;
  justify-content: center;
`;

export const CloseBtn = styled.div`
  position: absolute;
  top: calc(var(--navbar-height) + 1em);
  right: 1em;
  font-size: 1.5rem;
  cursor: pointer;
`;

export const SidebarMenu = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1.5em;
  align-items: center;
`;

export const SidebarLink = styled(LinkS)`
  cursor: pointer;
  color: white;
  padding: 1em;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: #01bf71;
  }
`;

export const SidebarSignUp = styled(LinkR)`
  text-decoration: none;
  color: black;
  padding: 0.8em 1.2em;
  background-color: #01bf71;
  border-radius: 2em;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: white;
  }
`;
