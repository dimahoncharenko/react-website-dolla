// Styled components
import {
  InfoContainer,
  InfoRow,
  Column1,
  Column2,
  BtnWrap,
  TopLine,
  Subtitle,
  Heading,
  ImgWrap,
  Img,
  TextWrapper,
} from "./StyledInfo";

// Components
import { Button } from "../Button";

// Types
import { InfoProps } from "./data";

export const Info = ({
  id,
  headline,
  descriptions,
  buttonLabel,
  topLine,
  dark,
  primary,
  imgStart,
  fontbig,
  big,
  lightBg,
  lightText,
  img,
  imgAlt,
}: InfoProps) => {
  return (
    <InfoContainer lightBg={lightBg} id={id}>
      <InfoRow imgStart={imgStart}>
        <Column1>
          <TextWrapper lightText={lightText}>
            <TopLine>{topLine}</TopLine>
            <Heading>{headline}</Heading>
            <Subtitle>{descriptions}</Subtitle>

            <BtnWrap>
              <Button
                primary={primary}
                dark={dark}
                fontbig={fontbig}
                big={big}
                to="signup"
              >
                {buttonLabel}
              </Button>
            </BtnWrap>
          </TextWrapper>
        </Column1>
        <Column2>
          <ImgWrap>
            <Img src={img} alt={imgAlt} />
          </ImgWrap>
        </Column2>
      </InfoRow>
    </InfoContainer>
  );
};
