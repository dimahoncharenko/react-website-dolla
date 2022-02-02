import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const SignUpBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: #01bf71;
`;

export const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;

  height: 100%;
  max-width: min(1100px, 100% - 2em);
  margin: auto;
`;

export const SignUpLogo = styled(Link)`
  text-decoration: none;
  font-weight: 700;
  font-size: clamp(1rem, 3vw + 0.3rem, 1.5rem);
  color: white;
  padding: 1em 0em;
`;

export const FormContainer = styled.div`
  max-width: min(500px, 100%);
  margin: auto;
`;

export const Form = styled.form`
  padding: max(3vw, 0.5em);
  border-radius: 0.3em;
  background-color: #010101;
  text-align: center;
`;

export const FormHeading = styled.h1`
  color: white;
  font-weight: normal;
  font-size: clamp(0.8rem, 3vw + 0.6rem, 1.5rem);
`;

export const FormLabel = styled.label`
  display: block;
  color: white;
  font-size: clamp(0.6rem, 3vw + 0.3rem, 0.8rem);
  text-align: left;
  padding: 0.2em 0em;
`;

export const FormInput = styled.input`
  width: 100%;
  height: 2.5em;
  border-radius: 0.3em;
  padding: 0.5em;
  border: 0;

  @media screen and (min-width: 768px) {
    height: 3em;
  }
`;

export const FormBtnWrapper = styled.div`
  margin-top: 1.5em;

  --button-radius: 0.3em;
`;

export const FormTip = styled.button`
  color: white;
  cursor: pointer;
  background-color: transparent;
  border: 0;
  margin: 1em 0em;
  font-size: clamp(0.6rem, 3vw + 0.3rem, 0.9rem);

  &:hover {
    text-decoration: underline;
  }
`;
