import { render } from "@testing-library/react";
import React from "react";
import "../styles.css";

class Dados_Gerais extends React.Component{
    state ={
        valorNome:"",
        valorIdade:"",
        valorEmail:"",
        valorEscolaridade:""
    }


onChangeNome = (event) => {
    this.setState({ valorNome: event.target.value });
};

onChangeIdade = (event) => {
    this.setState({ valorIdade: event.target.value });
};

onChangeEmail = (event) => {
    this.setState({ valorEmail: event.target.value });
};

onChangeEscolaridade = (event) => {
    this.setState({ valorEscolaridade: event.target.value });
};


render() {
    return (
      <div className="App">
        <h2>Etapa 1 - Dados Gerais</h2>

        <p>1. Qual o seu nome?</p>

        <div>
          <label htmlFor="Nome"></label>
          <input
            name="Nome"
            value={this.state.valorNome}
            onChange={this.onChangeNome}
          />
        </div>

        <p>2. Qual sua idade?</p>

        <div>
          <label htmlFor="Idade"></label>
          <input
            name="Idade"
            value={this.state.valorIdade}
            onChange={this.onChangeIdade}
            type="number"
          />
        </div>

        <p>3. Qual seu email?</p>

        <div>
          <label htmlFor="Email"></label>
          <input
            name="Email"
            value={this.state.valorEmail}
            onChange={this.onChangeEmail}
            type="email"
          />
        </div>

        <p>4. Qual a sua escolaridade?</p>

        <div>
          <label htmlFor="Escolaridade"></label>
          <input
            name="Escolaridade"
            value={this.state.valorEscolaridade}
            onChange={this.onChangeEscolaridade}
            
          />
        </div>
        

      

      
      </div>
    );
  }
}


export default Dados_Gerais;
