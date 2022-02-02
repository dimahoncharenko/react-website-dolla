import styled from "@emotion/styled";

export const InfoContainer = styled.div<{
  lightBg?: true;
}>`
  display: flex;
  flex-direction: column;
  background-color: ${({ lightBg }) => (lightBg ? "#f9f9f9" : "#010606")};
  padding: 1em 1em;

  @media screen and (min-width: 768px) {
    padding: 3em 1em;
  }

  @media screen and (min-width: 1100px) {
    padding: 8em 1em;
  }
`;

export const InfoRow = styled.div<{
  imgStart?: true;
}>`
  display: grid;
  max-width: min(100% - 2em, 1300px);
  margin: auto;
  place-items: center;
  grid-auto-columns: minmax(auto, 1fr);
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? "'col2' 'col1'" : "'col1' 'col2'"};

  @media screen and (min-width: 768px) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? "'col2 col1'" : "'col1 col2'"};
  }
`;

export const Column1 = styled.div`
  grid-area: col1;
  padding: 2em;
`;

export const Column2 = styled.div`
  grid-area: col2;
  padding: 2em;
`;

export const TextWrapper = styled.div<{
  lightText?: true;
}>`
  color: ${({ lightText }) => (lightText ? "#f9f9f9" : "#010606")};
`;

export const BtnWrap = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    align-items: flex-start;
  }
`;

export const TopLine = styled.p`
  color: #01bf71;
  text-transform: uppercase;
  letter-spacing: 0.05rem;
  font-size: clamp(0.8rem, 2vw + 0.3rem, 1.1rem);
`;

export const Heading = styled.h1`
  margin-bottom: 1em;
  font-size: clamp(1.3rem, 2vw + 0.4rem, 2rem);
`;

export const Subtitle = styled.p`
  text-align: justify;
  line-height: 1.5em;
  font-size: clamp(0.7rem, 2vw + 0.4rem, 1rem);
  margin-bottom: 1.5em;
  max-width: min(100%, 600px);
`;

export const ImgWrap = styled.div`
  max-width: clamp(340px, 30vw, 560px);
  max-height: 100%;
`;

export const Img = styled.img`
  width: 100%;
`;
