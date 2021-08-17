/* exercício de interpretação.
a) O código recebe um numero do usuário e passa pela condicional utilizando operadores booleanos, nesse caso  se o número for par ele passa no teste, se for impar ele não passase.
b) para os números pares.
c) para os números impares.

Questão 2

a) serve para informar ao usuário o valor da fruta que ele informou previamente.
b) O preço da fruta maçã é R$2,25
c) O preço da fruta Pêra é R$ 5

Questão 3

a)Está solicitando que o usuário escreva um numero, tratando para que essa informação venha como um number e armazenando-a em uma variável.
b)esse número passou no teste, para -10 não apareceria nada.
c) Sim, pois a variável mensagem está dentro do bloco da condicional if que é um escopo secundário e não pode ser lido pelo escopo principal.
*/
//Exercicio de escrita

/*questão 1
Faça um programa que pergunta ao usuário qual a idade dele e imprima no console se ele/ela pode dirigir (apenas maiores de idade).

a) Faça um `prompt` para receber a idade do usuário e guarde em uma variável.

b) Garanta que essa variável é do tipo `Number`, você deve usar o cast para number para isso.

c) Agora veja se essa idade do usuário corresponde à idade mínima que permite dirigir. Se sim, imprima no console `"Você pode dirigir"`, caso contrário, imprima `"Você não pode dirigir."`*/

const idadeUsuario = Number(prompt("Digite a sua idade"))
if (idadeUsuario>=18) {
    console.log("Você pode dirigir")
} else {
    console.log("Você não pode dirigir.")
}

/*Questão2
Agora faça um programa que verifica que turno do dia um aluno estuda. Peça para digitar M (matutino) ou V (Vespertino) ou N (Noturno). Imprima no console a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!". Utilize o bloco if/else*/

const turnoDeEstudoUsuario = prompt("Em qual turno você estuda? Responda M para (matutino) ou V para (Vespertino) ou N para (Noturno)").toLowerCase()

if (turnoDeEstudoUsuario === "m") {
    console.log("Bom dia!")
 } else if (turnoDeEstudoUsuario === "v") {
    console.log("Boa tarde!")
 } else if (turnoDeEstudoUsuario === "n"){
    console.log("Boa noite!")
 } else {
    console.log("Por favor digite M , V ou N para o respectivo turno")
}

/*Questão3
Repita o exercício anterior, mas utilizando a estrutura de switch case agora.*/

const turnoDeEstudoUsuario = prompt("Em qual turno você estuda? Responda M para (matutino) ou V para (Vespertino) ou N para (Noturno)").toLowerCase()

switch (turnoDeEstudoUsuario) {
    case 'm':
    console.log("Bom dia!")
    break
    case 'v':
    console.log("Boa tarde!")
    break
    case 'n':
    console.log("Boa noite!")
    break
 default:
    console.log("Por favor digite M , V ou N para o respectivo turno")
}

/*Questão3
Considere a situação: você vai ao cinema com um amigo ou amiga, porém ele/ela só assistirá a um filme com você se ele for do gênero fantasia e se o ingresso está abaixo de 15 reais. Faça um código que pergunta ao usuário qual o gênero de filme que vão assistir e outra pergunta sobre o preço do ingresso, então verifique se seu amigo ou amiga vai topar assistir o filme. Caso positivo, imprima no console a mensagem: "Bom filme!", caso contrário, imprima "Escolha outro filme :(" */

const generoDoFilme = prompt("Qual o genero do filme escolhido?").toLowerCase()
const valorDoIngresso = Number(prompt("Quanto custa o ingresso para o filme?"))

if (generoDoFilme==="fantasia" && valorDoIngresso<15) {
    console.log("Bom filme")
} else {
    console.log("Escolha outro filme")
}