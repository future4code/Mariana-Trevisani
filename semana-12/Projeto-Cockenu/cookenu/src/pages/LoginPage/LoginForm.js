import React from "react"
import {ImputsConteiner} from "./Styled";
import TextField  from "@material-ui/core/TextField";
import useForm from "../../hooks/useForm"
import { Button } from "@material-ui/core";
import {login} from "../../services/userRequest"
import { useHistory } from "react-router";


const LoginForm = ({ setRightButtonText}) => {
  const[form,onChange,clear] = useForm({email:"", password:""})
  const history = useHistory()

  const onSubmitForm = (event) => {
    event.preventDefault()
    login(form, clear, history, setRightButtonText)
  }

  
  return (
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

    </ImputsConteiner>
    );
}

export default LoginForm;
