import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import { cadastro } from "./components/cadastro";
import { listaDeUsuarios } from "./components/listaDeUsuarios";



const StylePagina = styled.div`
  margin: 30px auto;
  display: flex;
  justify-content: center;
`;



class App extends React.Component {
  componentDidMount() {
    this.props.atualizarUsuario();
  }

  togglePage = () => {
    this.props.updatePage();
  };

  render() {
    const paginaAtual = this.props.paginaAtual;
    const trocaNomePagina = paginaAtual === "cadastro" ? "usuários" : "cadastro";
    const selecionarPaginaAtual =
      paginaAtual === "cadastro" ? 
      (
        <cadastro onCreateUser={this.props.criarUsuario} />
      ) : (
        <listaDeUsuarios
          onDeleteUser={this.props.excluirUsuario}
          usuario={this.props.usuario}
        />
      );

    return (
      <div className="App">
        <button onClick={this.togglePage}>
          Ir para  {trocaNomePagina}
        </button>
        <StylePagina>{selecionarPaginaAtual}</StylePagina>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    paginaAtual: state.paginaAtual,
    Usuario: state.Usuario
  };
}

function mapDispatchToProps(dispatch) {
  return {
    updatePage: () => dispatch(togglePageAction()),
    criarUsuario: (name, email) => dispatch(criarUsuario(name, email)),
    excluirUsuario: user => dispatch(excluirUsuarioAcao(user)),
    atualizarUsuario: () => dispatch(atualizarUsuario())
  };
}

const AppStyle = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <AppStyle />
  </Provider>,
  rootElement
);
export default App;
