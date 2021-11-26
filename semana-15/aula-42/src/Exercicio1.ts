//a) Quando atribuido um numero mostra o erro de tipo, o valor da minha variavel precisa ser uma string
//let minhaString: string = 5

//b) Para a variável aceitar mais de uma tipagem podemos utilizar o "|". 

let meuNumero: number | string = "Dois" 
//let meuNumero: number = 2

//c) e d)
enum CorArcoIris {
    VIOLETA = "Violeta", 
    ANIL = "Anil", 
    AZUL = "Azul", 
    VERDE = "Verde", 
    AMARELO = "Amarelo", 
    LARANJA = "Laranja",
    VERMELHO = "Vermelho"
}

type Pessoa = {
    nome: string
    idade: number
    corFavorita: CorArcoIris
}

const mariana: Pessoa = {
    nome: "Mariana",
    idade: 33,
    corFavorita: CorArcoIris.VIOLETA
}
const lucas: Pessoa = {
    nome: "lucas",
    idade: 30,
    corFavorita: CorArcoIris.ANIL
}
const ana: Pessoa = {
    nome: "Ana",
    idade: 25,
    corFavorita: CorArcoIris.VERDE
}
const pedro: Pessoa = {
    nome: "Pedro",
    idade: 40,
    corFavorita: CorArcoIris.LARANJA 
}
