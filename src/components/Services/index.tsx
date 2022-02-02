// Styled components
import {
  ServicesContainer,
  ServicesHeading,
  ServicesWrapper,
} from "./StyledServices";

// Components
import {
  CardContainer,
  CardIcon,
  CardHeading,
  CardContent,
} from "../Card/StyledCard";

// Multimedia artifacts
import icon1 from "../../images/svg-4.svg";
import icon2 from "../../images/svg-5.svg";
import icon3 from "../../images/svg-6.svg";

export const Services = () => {
  return (
    <ServicesContainer id="services">
      <ServicesHeading>Our Services</ServicesHeading>
      <ServicesWrapper>
        <CardContainer>
          <CardIcon src={icon1} alt="" />
          <CardHeading>Reduce expenses</CardHeading>
          <CardContent>
            We help reduce your fess and increase your overall revenue.
          </CardContent>
        </CardContainer>
        <CardContainer>
          <CardIcon src={icon2} alt="" />
          <CardHeading>Virtual Offices</CardHeading>
          <CardContent>
            You can access our platform online anywhere in the world.
          </CardContent>
        </CardContainer>
        <CardContainer>
          <CardIcon src={icon3} alt="" />
          <CardHeading>Premium Benefits</CardHeading>
          <CardContent>
            Unlock our special membership card that returns 5% cash back.
          </CardContent>
        </CardContainer>
      </ServicesWrapper>
    </ServicesContainer>
  );
};
