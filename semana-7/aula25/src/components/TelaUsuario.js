import React from "react"
import axios from "axios"
import styled from "styled-components"

const StyleTelaUsuarios = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
    margin:10px;
`

const CardUsuario = styled.div`
    border: 1px solid black;
    width: 200px;
    padding: 10px;
    display: flex;
    justify-content: space-between;
`

export default class TelaUsuarios extends React.Component {

    state ={
        usuarios: []
    }

    componentDidMount() {
        this.pegarUsuarios()
    }

    pegarUsuarios = () => {
    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
    axios.get(url, {
        headers:{
            Authorization: "mariana-stamatakis-maryam"
        }
    })
    .then((res)=>{
        this.setState({usuarios: res.data})
    })
    .catch((err)=>{
        alert("Não foi possível completar, tente novamente")
    })
}

deletarUsuario = (id) => {
    const url =`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`
    axios.delete(url, {
        headers:{
            Authorization: "mariana-stamatakis-maryam"
        }
    })
    .then((res) => {
        alert("Usuário(a) deletado(a) com sucesso!")
        this.pegarUsuarios()
    })
    .catch((err) => {
        alert("Ocorreu um erro, tente novamente.")
    })

}

    render(){        
        const listaUsuarios = this.state.usuarios.map((user)=>{
            return (
                <CardUsuario key={user.id}>
                    {user.name}
                    <button onClick={() => this.deletarUsuario(user.id)}>X</button>
                </CardUsuario>
                
            )
        })


        return(
            <div>
                <StyleTelaUsuarios>
                <button onClick={this.props.irParaCadastro}>Ir para Cadastro</button>
                <h2>Lista de Usuários</h2>
                {listaUsuarios}
                </StyleTelaUsuarios>
            </div>
        )
    }
}
