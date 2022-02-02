import { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";

// Styled components
import {
  Nav,
  NavbarContainer,
  NavbarLogo,
  MobileIcon,
  NavbarMenu,
  NavbarMenuItem,
  NavbarLink,
  NavbarSignUp,
} from "./StyledNavbar";

// Types
type Props = {
  openBar: () => void;
  scrollToTop: () => void;
};

export const Navbar = ({ openBar, scrollToTop }: Props) => {
  const [isScrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY >= 80) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Nav isScrolled={isScrolled}>
      <NavbarContainer>
        <NavbarLogo to="/" onClick={scrollToTop}>
          dolla
        </NavbarLogo>
        <MobileIcon onClick={openBar}>
          <FaBars color="white" />
        </MobileIcon>
        <NavbarMenu>
          <NavbarMenuItem>
            <NavbarLink smooth duration={300} offset={-80} spy to="about">
              About
            </NavbarLink>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <NavbarLink smooth duration={300} offset={-80} spy to="discovery">
              Discovery
            </NavbarLink>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <NavbarLink smooth duration={300} offset={-79} spy to="services">
              Services
            </NavbarLink>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <NavbarLink smooth duration={300} offset={-79} spy to="signin">
              Sign In
            </NavbarLink>
          </NavbarMenuItem>
        </NavbarMenu>
        <NavbarSignUp to="/signup">Get started</NavbarSignUp>
      </NavbarContainer>
    </Nav>
  );
};
