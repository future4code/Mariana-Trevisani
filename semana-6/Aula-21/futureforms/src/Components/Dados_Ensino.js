import { render } from "@testing-library/react";
import React from "react";
import "../styles.css";

class Dados_Ensino extends React.Component{
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
        <h2>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h2>

        <p>5. Qual curso?</p>

        <div>
          <label htmlFor="Nome"></label>
          <input
            name="Nome"
            value={this.state.valorNome}
            onChange={this.onChangeNome}
          />
        </div>

        <p>6. Qual a unidade de ensino?</p>

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

export default Dados_Ensino;
;
