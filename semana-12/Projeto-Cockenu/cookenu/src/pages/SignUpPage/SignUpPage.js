import React from "react"
import {ScreenContainer, LogoImage} from "./Styled";
import logo from "../../assets/Logo.png"
import SignUpForm from "./SignUpForm.js";


const SignUpPage = () => {
  return (
    <ScreenContainer >
      <LogoImage src={logo}/>
      <SignUpForm/>
    </ScreenContainer>
  );
}

export default SignUpPage;
