import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  state = {
    posts: [{
      nomeUsuario: 'Paulinha',
      fotoUsuario: 'https://picsum.photos/50/50',
      fotoPost: "https://picsum.photos/200/150?1"
    },
    {
      nomeUsuario: 'João',
      fotoUsuario: 'https://picsum.photos/seed/picsum/50/50',
      fotoPost: 'https://picsum.photos/200/150?2'
    },
    {
      nomeUsuario: 'Karem',
      fotoUsuario: 'https://picsum.photos/50/50/?blur',
      fotoPost: 'https://picsum.photos/200/150?3'
    }
    ],
    valorInputNomeUsuario:'',
    valorInputFotoUsuario:'',
    valorInputFotoPost:''
  }

  adicionarPost = () =>{
    const novoPost = {
      nomeUsuario: this.state.valorInputNomeUsuario,
      fotoUsuario: this.state.valorInputFotoUsuario,
      fotoPost: this.state.valorInputFotoPost
    }

    const novosPosts = [...this.state.posts, novoPost];
    this.setState({posts: novosPosts});
  }

  onChangeInputNomeUsuario = (event) => {
    this.setState({valorInputNomeUsuario: event.target.value})
  }
  onChangeInputFotoUsuario = (event) => {
    this.setState({valorInputFotoUsuario: event.target.value})
  }
  onChangeInputFotoPost = (event) => {
    this.setState({valorInputFotoPost: event.target.value})
  }


  render() {
    const listaDePost = this.state.posts.map((post) => {
      return (
        <MainContainer>
        <Post
          nomeUsuario = {post.nomeUsuario}
          fotoUsuario = {post.fotoUsuario}
          fotoPost = {post.fotoPost}
          
        />
        </MainContainer>
      )
    })
    return(
      <MainContainer>
      <div>
        <input 
          value={this.state.valorInputNomeUsuario}
          onChange={this.onChangeInputNomeUsuario}
          placeholder={"Nome do Usuário"}
        />
        <input 
          value={this.state.valorInputFotoUsuario}
          onChange={this.onChangeInputFotoUsuario}
          placeholder={"Link foto do Usuário"}
        />
        <input 
          value={this.state.valorInputFotoPost}
          onChange={this.onChangeInputFotoPost}
          placeholder={"Link foto do post"}
        />
        <button onClick={this.adicionarPost}>Adicionar</button>
      
        <div>{listaDePost}</div>
      </div>
      </MainContainer>
    )
  }
}

export default App;
