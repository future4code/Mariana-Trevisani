import React from "react";
import axios from "axios"
import styled from "styled-components";


const StyleTelaCadastro = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
    margin:10px;
`
const CardCadastro = styled.div`
    flex-direction: column;
    padding: 10px;
    display: flex;
    margin-top:10px;
    justify-content: space-between;
`


export default class TelaCadastro extends React.Component {
    state = {
        nome:"",
        email:""
    }

    handleNome = (e) => {
        this.setState({nome: e.target.value})
    }
    handleEmail = (e) => {
        this.setState({email: e.target.value})
    }

    fazerCadastro =() => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
        const body = {
            name: this.state.nome,
            email:this.state.email
        }

        axios.post(url,body,{
            headers:{
                Authorization: "mariana-stamatakis-maryam"
            }
        })
    
        .then((res) => {
            alert("Usuário(a) cadastrado(a) com sucesso!")
            this.setState({nome:"",email:""})
        })
        .catch((err) => {
            alert(err.response.data.massage)
            console.log(err.response.data)
        })

    }


    render(){
        return(
            <div>
                <StyleTelaCadastro>
                <button onClick={this.props.irParaLista}>Ir para Lista de Usuários</button>
                <h2>Cadastro</h2>
                <CardCadastro>
                <input 
                    placeholder={"nome"}
                    value={this.state.nome}
                    onChange={this.handleNome}
                    />
                <input 
                    placeholder={"email"}
                    value={this.state.email}
                    onChange={this.handleEmail}
                    />
                </CardCadastro>
                <button onClick={this.fazerCadastro}> Cadastrar</button>
                </StyleTelaCadastro>
            </div>
        )
    }
}
