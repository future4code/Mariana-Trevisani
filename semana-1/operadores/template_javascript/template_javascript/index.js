// Exercícios de interpretação
// questão 1: a. false, b. false, c. true, d. boolean
// questão 2: está faltando ele tratar o dado recebido pelo prompt alterando para o tipo number. 
//Questão 3: O correto seria: let primeiroNumero = Number(prompt("Digite um numero!")) let segundoNumero = Number(prompt("Digite outro numero!"))

// Exercícios de escrita
//Questão 1

const idadeUsuario = Number(prompt('Qual a sua idade?'))
const idadeAmigo = Number(prompt('Qual a idade do seu melhor amigo(a)?'))
console.log('Sua idade é maior do que a do seu melhor amigo?', idadeUsuario > idadeAmigo) 

console.log('A diferença de idade entre vocês é de:', idadeUsuario - idadeAmigo) 

//Questão 2 

const numeroPar = Number(prompt ('digite um numero par.'))
let resto = numeroPar % 2
console.log("O resto é igual a:", resto)

// toda vez que o resultado do resto for 0 é porque o número digitado é par, quando o resultado for 1 é porque foi digitado um numero impar.

//Questão 3

const idadeAnos = Number(prompt('Qual a sua idade em anos?'))

const idadeMeses = idadeAnos * 12
console.log("Sua idade em meses é de:", idadeMeses)
const idadeDias = idadeAnos * 365
console.log("Sua idade em Dias é de:", idadeDias)
const idadeHoras = idadeDias * 24
console.log("Sua idade em horas é de:", idadeHoras)

//Questão 4 

const numero1 = Number(prompt ('digite um numero.')) const numero2 = Number(prompt ('digite outro numero.'))

console.log ('O primeiro número é maior que o segundo?', numero1 > numero2)
console.log ('O primeiro número é igual ao segundo?', numero1 === numero2)
console.log ('O primeiro número é divisivel pelo segundo? ', (numero1 % numero2) === 0)
console.log ('O Segundo número é divisivel pelo primeiro? ', (numero2 % numero1) === 0)

