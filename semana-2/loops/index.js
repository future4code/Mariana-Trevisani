/* EXERCÍCIOS DE INTERPRETAÇÃO:
Questão1:
O codigo está execultando um loop, onde ele pega o valor inicial da variável que é zero e soma mais um e imprime, ele executa essa operação até a variavel deixar de atingir a condição de ser menor que 5. O resultado será: 0, 1, 2, 3, 4.

Questão2:
a) será impresso: 19, 21, 23, 25, 27, 30.
b) Não, seria utilazando o for... in... 

Questão3:
será impresso : *, **, ***, **** cada um em uma linha.

 */

/* Exercícios de escrita.
QUestão1: Pergunte ao usuário quantos bichinhos de estimação ele tem e guarde esse dado em uma variável. 

a) Se a quantidade for 0, imprima no console "Que pena! Você pode adotar um pet!"

b) Se a quantidade for maior que 0, solicite que o usuário digite os nomes deles, um por um, e guarde esses nomes em um array


c) Por fim, imprima o array com os nomes dos bichinhos no console*/

// let bichinhosUsuario = Number(prompt("Quantos bichinhos de estimação você tem?"))

// if (bichinhosUsuario === 0) {
//     console.log ("Que pena! Você pode adotar um pet!")
// } else if ( bichinhosUsuario > 0){
    
//     let nomeDosBichinhos = []
//     while (nomeDosBichinhos.length<bichinhosUsuario){
//         nomeDosBichinhos.push(prompt("digite o nome do seu pet: um de cada vez"))
//     }

//     console.log (nomeDosBichinhos)
// }

/* questão 2 - Considere que você tenha acesso a um array  (chamado de 'array original') que é composto somente de números. Baseando-se nisso, crie uma função para cada um dos itens abaixo, realizando as operações pedidas:

a) Escreva um programa que **imprime** cada um dos valores do array original.*/
 
const arrayOriginal = [10,15,20,16,40,50,60,30,85]

for(let valor of arrayOriginal){
    console.log(valor)
}

/*b) Escreva um programa que **imprime** cada um dos valores do array original divididos por 10*/


for(let valor of arrayOriginal){
    let valorAlterado = valor/10
    console.log(valorAlterado)

}


/*c) Escreva um programa que **crie** um novo array contendo, somente, os números pares do array original e **imprima** esse novo array*/

let valorPar = []
for(let valor of arrayOriginal){
    
    if (valor%2 === 0){
       valorPar.push(valor) 
    }
}
console.log(valorPar)

/*d) Escreva um programa que **crie** um novo array contendo strings, da seguinte forma: "O elemento do índex `i` é: `numero`". Depois, **imprima** este novo array.*/

let indice = 0
let i = 0 
for(let valor of arrayOriginal){

    i = indice++
    let frase =  'O elemento do índex '+ i +'  é: '+ valor
    console.log(frase)
}




/*e) Escreva um programa que imprima no console o maior e o menor números contidos no array original*/

