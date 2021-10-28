import React from "react"
import {ImputsConteiner,} from "./Styled";
import TextField  from "@material-ui/core/TextField";
import useForm from "../../hooks/useForm"
import { Button } from "@material-ui/core";
import { useHistory } from "react-router";
import {signUp} from "../../services/userRequest"


const SignUpForm = ({ setRightButtonText}) => {
    const history = useHistory()
    const[form,onChange,clear] = useForm({name:"", email:"", password:""})

    const onSubmitForm = (event) => {
        event.preventDefault()
        signUp(form, clear, history, setRightButtonText)
    }

    return (
        <ImputsConteiner>
            <form onSubmit={onSubmitForm}>
                <TextField
                    name={"name"}
                    value={form.name}
                    onChange={onChange}
                    label={"Nome"}
                    variant={"outlined"}
                    fullWidth
                    margin={"normal"}
                    required
                />      
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
                    Cadastrar
                </Button>  
            </form>

        </ImputsConteiner>
    );
}

export default SignUpForm;
