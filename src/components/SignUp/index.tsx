// Styled components
import {
  SignUpBackground,
  SignUpContainer,
  SignUpLogo,
  FormContainer,
  FormHeading,
  Form,
  FormLabel,
  FormInput,
  FormBtnWrapper,
  FormTip,
} from "./StyledSignUp";

// Components
import { Button } from "../Button";

export const SignUp = () => {
  return (
    <SignUpBackground>
      <SignUpContainer>
        <SignUpLogo to="/">dolla</SignUpLogo>
        <FormContainer>
          <Form action="#">
            <FormHeading>Sign In to your account</FormHeading>
            <FormLabel htmlFor="email">Email</FormLabel>
            <FormInput id="email" type="email"></FormInput>
            <FormLabel style={{ marginTop: "2em" }} htmlFor="password">
              Password
            </FormLabel>
            <FormInput id="password" type="password"></FormInput>
            <FormBtnWrapper>
              <Button to="/" primary="true">
                Continue
              </Button>
            </FormBtnWrapper>
            <FormTip>Forgot password?</FormTip>
          </Form>
        </FormContainer>
      </SignUpContainer>
    </SignUpBackground>
  );
};
