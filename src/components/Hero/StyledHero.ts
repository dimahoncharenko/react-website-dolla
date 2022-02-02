import styled from "@emotion/styled";

export const HeroContainer = styled.div`
  height: var(--hero-height);
  display: grid;
`;

export const HeroBGOverlay = styled.div`
  grid-area: 1/-1;
  background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.6));
  z-index: 2;
`;

export const HeroBG = styled.div`
  grid-area: 1/-1;
  max-width: 100%;
  height: var(--hero-height);
  z-index: 1;
`;

export const VideoBG = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
`;

export const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 1.5em;
  color: white;
  padding: 1.5em;
  grid-area: 1/-1;
  z-index: 3;
  font-size: clamp(0.7rem, 2vw + 0.5rem, 1.2rem);

  // Grid properties
  align-self: center;
  justify-self: center;

  // Reset margin of all elems
  > * {
    margin: 0;
  }
`;
