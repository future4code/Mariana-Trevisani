import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/CardPequeno/CardPequeno';
import ImagemButton from './components/ImagemButton/ImagemButton';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://scontent.fgru5-1.fna.fbcdn.net/v/t1.6435-9/62260960_2276799012440256_827609201160224768_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=wxZ7WUKZhgAAX_4wZeV&_nc_ht=scontent.fgru5-1.fna&oh=a9eb5dac927ad21dc37c77fe61ac1971&oe=615CC78E" 
          nome="Mariana Stamatakis Trevisani" 
          descricao="Oi, eu sou a Mariana. Sou uma futura programadora e aluna da Labenu. Adoro assistir séries e ir ao cinema."
        />

        <CardPequeno
          imagem = "https://clipground.com/images/email-sign-png-5.png"
          contato = " Email: mari@gmail.com"
        />
        <CardPequeno
          imagem = "https://tse1.mm.bing.net/th?id=OIP.04u5We-btuLheMGs3J-6KAHaHY&pid=Api&P=0&w=300&h=300"
          contato = " Endereço: Estrada da ligação, Rio de Janeiro, RJ"
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://www.bloominbrands.com/resourcepackages/bloominbrands/assets/dist/images/bbi-logo.svg" 
          nome="Blooming Brands" 
          descricao="Somos uma multinacional americana que atua em 21 países oferecendo experiências e comida de qualidade aos nossos clientes." 
        />
        
        <CardGrande 
          imagem="https://tse2.mm.bing.net/th?id=OIP.PnNdQ3kRe35MEYXUGrGWuAHaHa&pid=Api&P=0&w=300&h=300" 
          nome="EVEN" 
          descricao="Estagiária de engenharia." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
