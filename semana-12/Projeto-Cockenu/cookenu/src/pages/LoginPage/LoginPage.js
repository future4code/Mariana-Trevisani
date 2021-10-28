import React from "react"
import { ScreenContainer, LogoImage, ImputsConteiner, SignUpButtonContainer} from "./Styled";
import logo from "../../assets/Logo.png"
import { Button } from "@material-ui/core";
import LoginForm from "./LoginForm";
import { useHistory } from "react-router";
import {goToSignUp} from "../../routes/coordinator"
import useUnprotectedPage from "../../hooks/useUnprotectedPage";

const LoginPage = ({ setRightButtonText}) => {
  useUnprotectedPage()
  const history = useHistory()
  return (
    <ScreenContainer >
      <LogoImage src={logo}/>
      <LoginForm setRightButtonText = {setRightButtonText} />
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
