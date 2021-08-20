/*Exercícios de interpretação
1a) será criado 3 arrays com 3 itens o primeiro item é um objeto identico ao primeiro objeto do array original, o segundo é o indice referente item do array original, e o terceiro item é um array identico ao original com todos os objetos esse ultimo é igual nos 3 arrays criados, o segundo array é referente ao segundo objeto do array original e o terceiro é referente ao terceiro objeto do array original.

2a) Será criado um arrai com os nomes dos objetos do array original e impresso na tela  ["Amanda Rangel", "Laís Petra", "Letícia Chijo"]

3a) Será criado um array somente com os dois objetos que não tem o apelido Chijo.
*/

/*Exercício de escrita:
1.Dado o seguinte array de cachorrinhos que são clientes de um pet shop, realize as operações pedidas nos itens abaixo utilizando as funções de array map e filter:*/

const pets = [
   { nome: "Lupin", raca: "Salsicha"},
   { nome: "Polly", raca: "Lhasa Apso"},
   { nome: "Madame", raca: "Poodle"},
   { nome: "Quentinho", raca: "Salsicha"},
   { nome: "Fluffy", raca: "Poodle"},
   { nome: "Caramelo", raca: "Vira-lata"},
]

/*a) Crie um novo array que contenha apenas o nome dos doguinhos*/

const nomeDosDogs = pets.map((item, index, array) => {
   return item.nome
})

console.log(nomeDosDogs)


/*b) Crie um novo array apenas com os [cachorros salsicha]*/

const dogsDaRacaSalsicha = pets.filter((item, index, array)=> {
    return item.raca.toLowerCase() === "salsicha"
 })
 
console.log(dogsDaRacaSalsicha)

/*c) Crie um novo array que possuirá mensagens para enviar para todos os clientes que são poodles. A mensagem deve ser: "Você ganhou um cupom de desconto de 10% para tosar o/a `[NOME]`!"*/

const somentePoodles = pets.filter((item, index, array)=> {

    return (item.raca.toLowerCase() === "poodle")
})
 
const nomeDosPoodles = somentePoodles.map((item,index) => {
    return (`Você ganhou um cupom de desconto de 10% para tosar o/a ${item.nome}!`)
})
console.log (nomeDosPoodles)

/* 2.Dado o seguinte array de produtos, realize as operações pedidas nos itens abaixo utilizando as funções de array map e filter:*/

const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]

/*a) Crie um novo array que contenha apenas o nome de cada item*/

const nomeDosProdutos = produtos.map((item) => {
    return item.nome
})
console.log(nomeDosProdutos)

/*b) Crie um novo array que contenha um objeto com o nome e o preço de cada item, aplicando 5% de desconto em todos eles*/

const produtosSoComPreco = produtos.map((item) => {
    return item.nome +` R$`+ (item.preco * 0.95)
})
console.log(produtosSoComPreco)

/*c) Crie um novo array que contenha apenas os objetos da categoria Bebidas*/

const somenteBebidas = produtos.filter((item)=> {

    return (item.categoria.toLowerCase() === "bebidas")
})
console.log (somenteBebidas)

/*d) Crie um novo array que contenha apenas os objetos cujo nome contenha a palavra "Ypê"*/

const somenteYpe = produtos.filter((item)=> {

    return (item.nome.toLowerCase().includes("ypê"))
})
console.log (somenteYpe)

/*e) Crie um novo array onde cada item é uma frase "Compre [NOME] por [PREÇO]". Esse array deve conter frases apenas dos itens cujo nome contenha a palavra "Ypê"*/

 
const msgProdutosYpe = somenteYpe.map((item,) => {
    return (`Compre ${item.nome} por ${item.preco}`)
})
console.log (msgProdutosYpe)