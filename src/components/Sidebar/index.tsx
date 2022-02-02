import { FaTimes } from "react-icons/fa";

// Styled components
import {
  SidebarWrapper,
  CloseBtn,
  SidebarMenu,
  SidebarLink,
  SidebarSignUp,
} from "./StyledSidebar";

// Types
type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export const Sidebar = ({ onClose, isOpen }: Props) => {
  return (
    <SidebarWrapper isOpen={isOpen}>
      <CloseBtn onClick={onClose}>
        <FaTimes color="white" />
      </CloseBtn>
      <SidebarMenu>
        <li>
          <SidebarLink
            onClick={onClose}
            smooth
            duration={300}
            offset={-80}
            to="about"
          >
            About
          </SidebarLink>
        </li>
        <li>
          <SidebarLink
            onClick={onClose}
            smooth
            duration={300}
            offset={-80}
            to="discovery"
          >
            Discovery
          </SidebarLink>
        </li>
        <li>
          <SidebarLink
            onClick={onClose}
            smooth
            duration={300}
            offset={-80}
            to="services"
          >
            Services
          </SidebarLink>
        </li>
        <li>
          <SidebarLink
            onClick={onClose}
            smooth
            duration={300}
            offset={-80}
            to="signin"
          >
            Sign In
          </SidebarLink>
        </li>
      </SidebarMenu>
      <SidebarSignUp onClick={onClose} to="/signup">
        Sign Up
      </SidebarSignUp>
    </SidebarWrapper>
  );
};
