import React from "react";
import axios  from "axios";
import BASE_URL from "../constants/urls"
import {goToRecipesList} from "../routes/coordinator"




const login = (body, clear, history) => {
    axios
    .post(`${BASE_URL}/user/login`, body)
    .then((res)=>{
        localStorage.setItem("token", res.data.token)
        clear()
        goToRecipesList(history)
    })
    .catch((err)=>alert("Usuário ou senha inválido"))
}

export default login