//Exercício de interpretação:
//Questão 1 - primeiro será impresso 10 e na linha de baixo será impresso 10 5
//Questão 2 - será impresso: 10  10  10 
//Questão 3 - sugestão de nome para variável p: hrTrabalhadaxDia, segestão variável t: valorxDia

//Exercício de escrita
//Questão 1:

let nome 
let idade

console.log (typeof nome, typeof idade)
//O tipo foi dado como undefined pois não foi atribuido nenhum valor na criação da variável

nome = prompt("Qual o seu nome?")
idade = prompt("Qual a sua idade?")

console.log (typeof nome, typeof idade)
//As variáveis deixam de ser do tipo undefined e por ser um dado solicitado para que o usuário preencha sempre retornará como um dado do tipo String. 

console.log ("Olá", nome ,", você tem", idade,"anos.")

//Questão 2:

let temCasaPropria = prompt("Você possui residencia própria?")
let temEmprestimo = prompt("Você possui algum emprestimo ativo?")
let temCarro = prompt("Você possui carro no seu nome?")

console.log ("Você possui residencia própria? -", temCasaPropria,)
console.log ("Você possui algum emprestimo ativo? -", temEmprestimo,)
console.log ("Você possui carro no seu nome? -", temCarro,)

//Questão 3:

let a = prompt("digite um número")
let b = prompt("digite um segundo número")

let transição = a

a = b
b = transição

console.log("O novo valor de a é", a) 
console.log("O novo valor de b é", b)

//Questão de desafio.

let numb1 = Number(prompt("digite um número"))
let numb2 = Number(prompt("digite um segundo número"))

let x = numb1 + numb2
let y = numb1 * numb2 

console.log ("O primeiro número somado ao segundo número resulta em:", x,".")
console.log("O primeiro número multiplicado pelo segundo número resulta em:",y,".")