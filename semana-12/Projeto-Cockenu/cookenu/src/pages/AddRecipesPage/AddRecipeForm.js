import React from "react"
import {ImputsConteiner,} from "./Styled";
import TextField  from "@material-ui/core/TextField";
import useForm from "../../hooks/useForm"
import { Button } from "@material-ui/core";
import { useHistory } from "react-router";
import { createRecipe } from "../../services/recipesRequest";



const AddRecipeForm = () => {
    const history = useHistory()
    const[form, onChange, clear] = useForm({title:"", description:"", image:""})

   
    const onSubmitForm = (event) => {
        event.preventDefault()
        createRecipe(form, clear)
        
    }

    return (
        <ImputsConteiner>
            <h1>Adicionar Nova Receita</h1>
            <form onSubmit={onSubmitForm}>
                <TextField
                    name={"title"}
                    value={form.title}
                    onChange={onChange}
                    label={"Título"}
                    variant={"outlined"}
                    fullWidth
                    margin={"normal"}
                    required
                />      
                <TextField
                    name={"description"}
                    value={form.description}
                    onChange={onChange}
                    label={"Descrição"}
                    variant={"outlined"}
                    fullWidth
                    margin={"normal"}
                    required
                    
                />              
                <TextField
                    name={"image"}
                    value={form.image}
                    onChange={onChange}
                    label={"Foto"}
                    variant={"outlined"}
                    fullWidth
                    margin={"normal"}
                    required
                    
                />  
                <Button
                    type={"submit"}
                    variant={"outlined"}
                    color={"primary"}
                    margin={"normal"}
                    fullWidth
                >
                    Adicionar Receita
                </Button>  
            </form>

        </ImputsConteiner>
    );
}

export default AddRecipeForm;
