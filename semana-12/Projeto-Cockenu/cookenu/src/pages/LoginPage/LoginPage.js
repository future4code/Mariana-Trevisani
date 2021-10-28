import React from "react"
import { ScreenContainer, LogoImage, ImputsConteiner, SignUpButtonContainer} from "./Styled";
import logo from "../../assets/Logo.png"
import { Button } from "@material-ui/core";
import LoginForm from "./LoginForm";
import { useHistory } from "react-router";
import {goToSignUp} from "../../routes/coordinator"

const LoginPage = () => {
  const history = useHistory()
  return (
    <ScreenContainer >
      <LogoImage src={logo}/>
      <LoginForm/>
      <SignUpButtonContainer>
        <Button onClick={() => goToSignUp(history)}
          type={"submit"}
          color={"primary"}
          variant={"text"}
          fullWidth
        >Cadastre-se</Button>
      </SignUpButtonContainer>
    </ScreenContainer>
  );
}

export default LoginPage;
