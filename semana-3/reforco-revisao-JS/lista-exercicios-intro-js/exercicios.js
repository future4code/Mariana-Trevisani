// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {

  let altura = prompt("insira a altura do retângulo")
  let largura = prompt("insira a largura do retângulo")
  let area = altura*largura
  console.log (area)

}

// EXERCÍCIO 02
function imprimeIdade() {
  let anoAtual = prompt("insira o ano atual")
  let anoNascimento = prompt("insira o ano em que nasceu")
  let idade = anoAtual - anoNascimento
  console.log (idade)

}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {

  return (peso / (altura*altura))

}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  let nome = prompt("insira o seu nome")
  let idade = prompt("insira a sua idade")
  let email = prompt("insira o seu email")

  console.log (`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)

}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  let cor1 = prompt("insira uma cor")
  let cor2 = prompt("insira outra cor")
  let cor3 = prompt("insira ultima cor")

  let corFavorita = []
  corFavorita.push(cor1,cor2,cor3)

  console.log (corFavorita)

}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {

  return string.toUpperCase ()

}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  
  return custo/valorIngresso

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  
  return string1.length === string2.length

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  
  return array[0]

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  
  return array[array.length-1]

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {

  let ultimo = array[array.length-1]
  
  array[array.length-1] = array[0]
  array[0] = ultimo

  return array

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  
  return (string1.toLowerCase() === string2.toLowerCase())


}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  
  

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}