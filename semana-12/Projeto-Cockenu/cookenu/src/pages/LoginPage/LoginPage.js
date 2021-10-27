import React from "react"
import { ScreenContainer, LogoImage, ImputsConteiner, SignUpButtonContainer} from "./Styled";
import logo from "../../assets/Logo.png"
import TextField  from "@material-ui/core/TextField";
import useForm from "../../hooks/useForm"
import { Button } from "@material-ui/core";

const LoginPage = () => {
  const[form,onChange,clear] = useForm({email:"", password:""})

  const onSubmitForm = (event) => {
    event.preventDefault()
  }

  return (
    <ScreenContainer >
      <LogoImage src={logo}/>
      <ImputsConteiner>
        <form onSubmit={onSubmitForm}>
          <TextField
            name={"email"}
            value={form.email}
            onChange={onChange}
            label={"E-mail"}
            variant={"outlined"}
            fullWidth
            margin={"normal"}
            required
            type={"email"}
          />              
          <TextField
            name={"password"}
            value={form.password}
            onChange={onChange}
            label={"Senha"}
            variant={"outlined"}
            fullWidth
            margin={"normal"}
            required
            type={"password"}
          />  

          <Button
          type={"submit"}
          variant={"outlined"}
          color={"primary"}
          margin={"normal"}
          fullWidth
        >
          Fazer Login
        </Button> 
          
        </form>

        <SignUpButtonContainer>
          <Button
            type={"submit"}
            color={"primary"}
            variant={"text"}
            fullWidth
          >Cadastre-se</Button>
        </SignUpButtonContainer>
        

      </ImputsConteiner>
    </ScreenContainer>
  );
}

export default LoginPage;
