import { render } from "@testing-library/react";
import React from "react";
import "../styles.css";

class Agradecimento extends React.Component{
    render() {
        return (
            <div className="App">
            <h2>O FORMULÁRIO ACABOU</h2>
    
            <p>Muito obrigado por participar! Entraremos em contato!</p>
            </div>
        )};
}

export default Agradecimento;