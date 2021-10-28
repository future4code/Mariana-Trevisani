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


const signUp = (body, clear, history) => {
    axios.post(`${BASE_URL}/user/signup`, body)
    .then((res) => {
        localStorage.setItem("token", res.data.token)
        clear()
        goToRecipesList(history)
    })
    .catch((err) => alert("Não foi possível completar o cadastro, por favor tente novamente"))
}   


export default (login, signUp)

