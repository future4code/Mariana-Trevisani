import React from "react"
import {ScreenContainer, LogoImage} from "./Styled";
import logo from "../../assets/Logo.png"
import SignUpForm from "./SignUpForm.js";
import useUnprotectedPage from "../../hooks/useUnprotectedPage";


const SignUpPage = () => {
  useUnprotectedPage()
  return (
    <ScreenContainer >
      <LogoImage src={logo}/>
      <SignUpForm/>
    </ScreenContainer>
  );
}

export default SignUpPage;
