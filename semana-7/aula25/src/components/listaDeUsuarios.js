import React from "react";
import styled from "styled-components";

const ListaDeUsuarios = styled.ul`
  list-style: none;
`;

const ItenListaDeUsuario = styled.li`
  display: flex;
  min-width: 60px;
  justify-content: space-between;
  border-bottom: 1px solid black;
  padding: 10px 0;
`;

const BotaoDeExcluir = styled.span`
  color: red;
  cursor: pointer;
`;

export class listaDeUsuarios extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <ListaDeUsuarios>
        <h2>Usuários Cadastrados:</h2>
        {this.props.usuario.map(user => (
          <ItenListaDeUsuario key={user.id}>
            {user.name}{" "}
            <BotaoDeExcluir onClick={() => this.props.onDeleteUser(user.id)}>
              X
            </BotaoDeExcluir>
          </ItenListaDeUsuario>
        ))}
      </ListaDeUsuarios>
    );
  }
}
