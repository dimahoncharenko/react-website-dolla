import styled from "@emotion/styled";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

export const Nav = styled.nav<{
  isScrolled: boolean;
}>`
  height: var(--navbar-height);
  background-color: ${({ isScrolled }) =>
    isScrolled ? "black" : "transparent"};
  position: sticky;
  transition: all 0.3s ease-in-out;
  top: 0;
  z-index: 100;
  margin-top: -80px;
`;

export const NavbarContainer = styled.div`
  max-width: min(1100px, 100% - 2em);
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
`;

export const NavbarLogo = styled(LinkR)`
  text-decoration: none;
  color: white;
  font-size: clamp(1rem, 2vw + 0.3rem, 1.5rem);
  font-weight: 700;
`;

export const NavbarMenu = styled.ul`
  display: none;

  @media screen and (min-width: 768px) {
    display: flex;
    padding: 0;
    margin: 0;
    gap: 2em;
    list-style: none;
  }
`;

export const NavbarMenuItem = styled.li`
  height: var(--navbar-height);
`;

export const NavbarLink = styled(LinkS)`
  display: flex;
  cursor: pointer;
  color: white;
  height: 100%;
  align-items: center;

  &.active {
    border-bottom: 0.2em solid #01bf71;
  }
`;

export const NavbarSignUp = styled(LinkR)`
  display: none;
  text-decoration: none;
  color: black;

  @media screen and (min-width: 768px) {
    display: block;
    padding: 0.7em 1.3em;
    background-color: #01bf71;
    font-size: 1rem;
    border: 0;
    border-radius: 2em;
    transition: background-color 0.3s ease-in-out;
    cursor: pointer;
  }

  &:hover {
    background-color: white;
  }
`;

export const MobileIcon = styled.div`
  cursor: pointer;
  font-size: clamp(1rem, 2vw + 0.3rem, 1.5rem);

  @media screen and (min-width: 768px) {
    display: none;
  }
`;
