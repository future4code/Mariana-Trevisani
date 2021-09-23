import Dados_Gerais from "./Components/Dados_Gerais";

import Dados_Ensino from "./Components/Dados_Ensino";

import Informacoes_Ensino from "./Components/Informacoes_Ensino";

import Agradecimento from "./Components/Agradecimento";

import React from 'react';
import "./styles.css";


class App extends React.Component {

  renderizaEtapa = () => {
    switch (this.state.evento) {
      case 1: 
        return <Dados_Gerais />;
      case 2: 
        return <Dados_Ensino />;
      case 3: 
        return <Informacoes_Ensino />;
      case 4: 
        return <Agradecimento />;
  
    }
  }

  state = {
    etapa: 1,}  

  render () {

   
    
      return (
        <div className="App">
        <Dados_Gerais />
          
          
        {this.renderizaEtapa()}  
        <button onClick={this.onClickButton}>Próxima Etapa</button>
        
        </div>

      );
    }
   

    onClickButton = () => {
      const pagina = this.state.etapa;
      const proximaPagina = pagina +1;
      this.setState({etapa: proximaPagina});
    }
 
}





  export default App;
  // onClickBotao = () => {
  //   (this.state);