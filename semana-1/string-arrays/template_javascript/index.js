// Exercícios de Interpretação
// Questão 1 - a. undefined , b. null , c. 7, d. 3, e. troca o valor do indice 1 para 19, f. 9
//Questão 2 - SUBI NUM ÔNIBUS EM MIRROCOS 27

//Exercícios de escrita

//Questão 1

const nomeUsuario = prompt("Digite seu nome")
const emailUsuario = prompt("Digite seu email")

console.log("O e-mail", emailUsuario," foi cadastrado com sucesso. Seja bem-vinda(o),", nomeUsuario,"!")

//Questão 2
const comidasPreferidas = ["sushi","caldo-verde","canjica","cuscus", "feijoada" ]
//a.
console.log (comidasPreferidas)
//b.
console.log ("Essas são as minhas comidas preferidas:")
console.log (comidasPreferidas[0])
console.log (comidasPreferidas[1])
console.log (comidasPreferidas[2])
console.log (comidasPreferidas[3])
console.log (comidasPreferidas[4])
//c.
let i = 0
comidasPreferidas[i+1] = prompt("Qual a sua comida preferida?")
console.log (comidasPreferidas)

//Questão 3
//a.
const listaDeTarefas = []
//b.

listaDeTarefas.push (prompt("Pense em 3 tarefas que precise realizar no dia. Agora digite a 1ª tarefa"))
listaDeTarefas.push (prompt("Agora digite a 2ª tarefa"))
listaDeTarefas.push (prompt("Agora digite a 3ª tarefa"))
//c.
console.log (listaDeTarefas)
//d.
let indiceEscolhido = prompt("Qual dessas tarefas você já realizou? Responda com 0, 1 ou 2")
//e.
listaDeTarefas.splice(indiceEscolhido, 1)
//f.
console.log (listaDeTarefas)

//Desafios
//Questão 1



//Questão 2 

const array = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"]
console.log ("Abacaxi está no indice 0?",(array[0] === "Abacaxi"),array[0],". O tamanho é de ",array[0].length," caracteres")
console.log ("Abacaxi está no indice 1?",(array[1] === "Abacaxi"),array[1],". O tamanho é de ",array[1].length," caracteres")
console.log ("Abacaxi está no indice 2?",(array[2] === "Abacaxi"),array[2],". O tamanho é de ",array[2].length," caracteres")
console.log ("Abacaxi está no indice 3?",(array[3] === "Abacaxi"),array[3],". O tamanho é de ",array[3].length," caracteres")
console.log ("Abacaxi está no indice 4?",(array[4] === "Abacaxi"),array[4],". O tamanho é de ",array[4].length," caracteres")

