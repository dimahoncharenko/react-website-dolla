import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const FooterContainer = styled.footer`
  background-color: #010502;
  padding: 2em 0em;
`;

export const FooterTop = styled.div`
  display: flex;
  flex-direction: column;
  max-width: min(800px, 100% - 2em);
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export const FooterRow = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  gap: 2em;

  > * {
    --link-color: white;
  }

  & + & {
    margin-top: 2em;

    @media screen and (min-width: 768px) {
      margin-top: 0;
    }
  }
`;

export const FooterBottom = styled.div`
  max-width: min(1000px, 100% - 2em);
  margin: 2em auto 0em auto;
  padding-top: 2em;
`;

export const FooterBottomContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5em;

  > * {
    margin: auto;
  }

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export const FooterLogo = styled(Link)`
  text-decoration: none;
  font-size: clamp(1rem, 3vw + 0.3rem, 1.3rem);
  font-weight: 700;
  color: white;
`;

export const WebsiteRights = styled.small`
  color: white;
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: min(200px, 100% - 1em);
`;

export const SocialIcon = styled.a`
  text-decoration: none;
  color: white;
`;
