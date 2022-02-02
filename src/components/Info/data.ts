// Multimedia artifacts
import img1 from "../../images/svg-1.svg";
import img2 from "../../images/svg-2.svg";
import img3 from "../../images/svg-3.svg";

// Types
export type InfoProps = {
  id: string;
  topLine: string;
  headline: string;
  descriptions: string;
  buttonLabel: string;
  dark?: "true";
  primary?: "true";
  fontbig?: "true";
  big?: "true";
  imgStart?: true;
  lightBg?: true;
  lightText?: true;
  img: string;
  imgAlt: string;
};

export const PrimoHomeInfoRow: InfoProps = {
  id: "about",
  topLine: "Premium Bank",
  headline: "Unlimited Transactions with zero fees",
  descriptions:
    "Get access to our exclusive app that allows you to send unlimited transactions without getting charged ant fees.",
  buttonLabel: "Get started",
  primary: "true",
  imgStart: true,
  lightText: true,
  dark: "true",
  img: img1,
  imgAlt: "Car",
};

export const SecundoHomeInfoRow: InfoProps = {
  id: "discovery",
  topLine: "Unlimited Access",
  headline: "Login to your account at any time",
  descriptions:
    "We have you covered no matter where you are located. All you need is an internet connection and a phone or computer.",
  buttonLabel: "Learn More",
  img: img2,
  imgAlt: "Piggy",
  lightBg: true,
};

export const TertioHomeInfoRow: InfoProps = {
  id: "signin",
  topLine: "Join our Team",
  headline: "Creating an account is extremely easy",
  descriptions:
    "Get everything set up and ready in under 10 minutes. All you need todo is add your information and you're ready to go.",
  buttonLabel: "Sign Up",
  lightBg: true,
  imgStart: true,
  img: img3,
  imgAlt: "Account",
};
