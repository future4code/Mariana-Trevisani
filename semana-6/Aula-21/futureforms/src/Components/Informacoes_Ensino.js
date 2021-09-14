import { render } from "@testing-library/react";
import React from "react";
import "../styles.css";

class Informacoes_Ensino extends React.Component{
    state ={
        valorCurso:"",
        valorUnidadeDeEnsino:"",
    }


onChangeCurso = (event) => {
    this.setState({ valorCurso: event.target.value });
};

onChangeUnidadeDeEnsino = (event) => {
    this.setState({ valorUnidadeDeEnsino: event.target.value });
};


render() {
    return (
      <div className="App">
        <h2>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h2>

        <p>7. Por que você não terminou um curso de graduação?</p>

        <div>
          <label htmlFor="Curso Incompleto"></label>
          <input
            name="Curso Incompleto"
            value={this.state.valorNome}
            onChange={this.onChangeNome}
          />
        </div>

        <p>8. Você fez algum curso complementar?</p>

        <div>
          <label htmlFor="Unidade de ensino"></label>
          <input
            name="Unidade de Ensino"
            value={this.state.valorUnidadeDeEnsino}
            onChange={this.onChangeUnidadeDeEnsino}
            
          />
        </div>   

      

      
      </div>
    );
  }
}

export default Informacoes_Ensino;
