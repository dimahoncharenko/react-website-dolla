import { useState } from "react";
import { MdKeyboardArrowRight, MdArrowForward } from "react-icons/md";

// Styled components
import {
  HeroContainer,
  HeroBGOverlay,
  HeroBG,
  VideoBG,
  HeroContent,
} from "./StyledHero";

import { Button } from "../Button";

// Multimedia artifacts
import video from "../../videos/video.mp4";

export const Hero = () => {
  const [hover, setHover] = useState(false);

  return (
    <HeroContainer id="home">
      <HeroBGOverlay />
      <HeroBG>
        <VideoBG src={video} autoPlay loop muted />
      </HeroBG>
      <HeroContent>
        <h1>Virtual Banking Made Easy</h1>
        <p>
          Sign Up for a new account today and receive 250$ in credit towards
          your next payment.
        </p>
        <Button
          primary="true"
          dark="true"
          to="signin"
          onMouseEnter={setHover.bind(null, true)}
          onMouseLeave={setHover.bind(null, false)}
        >
          Get started {hover ? <MdArrowForward /> : <MdKeyboardArrowRight />}
        </Button>
      </HeroContent>
    </HeroContainer>
  );
};
