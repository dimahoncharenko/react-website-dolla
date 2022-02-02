import {
  FaInstagram,
  FaFacebook,
  FaYoutube,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

// Styled components
import {
  FooterContainer,
  FooterRow,
  FooterTop,
  FooterBottomContent,
  FooterBottom,
  FooterLogo,
  SocialIcons,
  SocialIcon,
  WebsiteRights,
} from "./StyledFooter";

// Components
import { Links, LinksLabel, Link } from "../Links/StyledLinks";

// Types
type Props = {
  scrollToTop: () => void;
};

export const Footer = ({ scrollToTop }: Props) => {
  return (
    <FooterContainer>
      <FooterTop>
        <FooterRow>
          <Links>
            <li>
              <LinksLabel>About Us</LinksLabel>
            </li>
            <li>
              <Link to="/">How it works</Link>
            </li>
            <li>
              <Link to="/">Testimonials</Link>
            </li>
            <li>
              <Link to="/">Careers</Link>
            </li>
            <li>
              <Link to="/">Investors</Link>
            </li>
            <li>
              <Link to="/">Terms of Service</Link>
            </li>
          </Links>
          <Links>
            <li>
              <LinksLabel>Videos</LinksLabel>
            </li>
            <li>
              <Link to="/">Submit Video</Link>
            </li>
            <li>
              <Link to="/">Ambassadors</Link>
            </li>
            <li>
              <Link to="/">Agency</Link>
            </li>
            <li>
              <Link to="/">Influencer</Link>
            </li>
          </Links>
        </FooterRow>
        <FooterRow>
          <Links>
            <li>
              <LinksLabel>Contact Us</LinksLabel>
            </li>
            <li>
              <Link to="/">Contacts</Link>
            </li>
            <li>
              <Link to="/">Support</Link>
            </li>
            <li>
              <Link to="/">Destination</Link>
            </li>
            <li>
              <Link to="/">Sponsors Tips</Link>
            </li>
          </Links>
          <Links>
            <li>
              <LinksLabel>Social Media</LinksLabel>
            </li>
            <li>
              <Link to="/">Instagram</Link>
            </li>
            <li>
              <Link to="/">Facebook</Link>
            </li>
            <li>
              <Link to="/">Youtube</Link>
            </li>
            <li>
              <Link to="/">Twitter</Link>
            </li>
            <li>
              <Link to="/">Linkedin</Link>
            </li>
          </Links>
        </FooterRow>
      </FooterTop>
      <FooterBottom>
        <FooterBottomContent>
          <FooterLogo to="/" onClick={scrollToTop}>
            dolla
          </FooterLogo>
          <WebsiteRights>dolla &copy; {new Date().getFullYear()}</WebsiteRights>
          <SocialIcons>
            <SocialIcon
              href="//www.instagram.com"
              target="_blank"
              aria-label="Instagram"
            >
              <FaInstagram />
            </SocialIcon>
            <SocialIcon
              href="//www.facebook.com"
              target="_blank"
              aria-label="Facebook"
            >
              <FaFacebook />
            </SocialIcon>
            <SocialIcon
              href="//www.youtube.com"
              target="_blank"
              aria-label="Youtube"
            >
              <FaYoutube />
            </SocialIcon>
            <SocialIcon
              href="//www.twitter.com"
              target="_blank"
              aria-label="Twitter"
            >
              <FaTwitter />
            </SocialIcon>
            <SocialIcon
              href="//www.linkedin.com"
              target="_blank"
              aria-label="Linkedin"
            >
              <FaLinkedin />
            </SocialIcon>
          </SocialIcons>
        </FooterBottomContent>
      </FooterBottom>
    </FooterContainer>
  );
};
