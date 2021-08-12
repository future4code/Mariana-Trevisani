/*EXERCÍCIOS DE INTERPRETAÇÃO
Ex 1. a) será impresso 10 e na linha abaixo 50
      b) não apareceria nada no console, mas as oprerações seriam realizadas e os resultados os mesmos.
Ex 2. a)Essa função retorna true ou false caso o usuário tenha digitado cenoura no texto, primeiro transformando todas a frase em minuscula e em seguida buscando a palavra e terminando com um true caso encontre ou false caso não encontre. Serve para saber se uma determinada string está no texto digitado pelo usuário.
      b) true
         true
         false
*/

/*EXERCÍCIOS DE ESCRITA
Questão 1
a)*/

const funcaoSemParametros = () => {
    console.log ("Oi sou a Mariana, tenho 32 anos, moro em São Paulo e sou estudante")
}
funcaoSemParametros()

//b)
const funcaoeComParamtros = (nome,idade,endereço,profissao) => {
    const frase = `Eu sou ${nome}, tenho ${idade} anos, moro em ${endereço} e sou ${profissao}`
    return frase
}
console.log(funcaoeComParamtros("Mariana",32,"São paulo","estudante"))

/*Questão 2
a)*/

const funcaoSoma = (numero1,numero2) =>{
    const soma = numero1+numero2
    console.log (soma)
}
funcaoSoma (5,10)

//b)
const funcaoBooleano = (numero1,numero2) =>{
    const calculo = numero1>=numero2
    console.log (calculo)
}
funcaoBooleano (5,10)

//c)
const funcaoParOuImpar = (numero) =>{
    const par = Number((numero % 2)) === 0
    console.log (par)
}
funcaoParOuImpar (6)

//d)
const funcaoFrase = (frase) => {
    const fraseMaiuscula = frase.toUpperCase()
    const tamanhoDaFrase = frase.length
    const fraseModificada = `${fraseMaiuscula} ${tamanhoDaFrase}`
    console.log (fraseModificada)
}

funcaoFrase(prompt("insira um frase"))

//Questão 3

const funcaoOperacoes = (numero1,numero2) =>{
    const funcaoSoma = (numeroInserido1,numeroInserido2) =>{
        let soma = numeroInserido1+numeroInserido2
        return soma
    }
    const funcaoSubtracao = (numeroInserido1,numeroInserido2) =>{
        let subtracao = numeroInserido1-numeroInserido2
        return subtracao
    }
    const funcaomultiplicacao = (numeroInserido1,numeroInserido2) =>{
        let multiplicacao = numeroInserido1*numeroInserido2
        return multiplicacao
    }
    const funcaoDivisao = (numeroInserido1,numeroInserido2) =>{
        let divisao = numeroInserido1/numeroInserido2
        return divisao
    }

    const numeroInserido1 = numero1 
    const numeroInserido2 = numero2 
 
    console.log("Números inseridos:",numero1,"e",numero2)

    console.log("Soma:",funcaoSoma(numeroInserido1,numeroInserido2))

    console.log("Diferença:",funcaoSubtracao(numeroInserido1,numeroInserido2))

    console.log("Multiplicação:",funcaomultiplicacao(numeroInserido1,numeroInserido2))

    console.log("Divisão:",funcaoDivisao(numeroInserido1,numeroInserido2))

}
funcaoOperacoes(2,5)



