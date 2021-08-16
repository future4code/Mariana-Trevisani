/* Exercícios de interpretação.
Questão1:
    a) Matheus Nachtergaele , Virginia Cavendish , canal: "Globo" , horario:"14h"
Questão2:
    a)  nome: "Juca", idade:3 , raca: "SRD"
        nome: "Juba", idade:3 , raca: "SRD"
        nome: "Jubo", idade:3 , raca: "SRD"
    b)  copia o objeto.
Questão3:
    a)  false
        undefined
    b)  chamamos pela função uma propriedade do objeto pessoa, na primeira chamada retornou um booleano false e na segunda chamada retornou undefined pois essa pripriedade "altura" não existe no objeto.*/

/*Exercícios de escrita
Questão1:
a) Crie um objeto. Ele deve conter duas propriedades: nome (string) e apelidos (um array que sempre terá exatamente três apelidos). Depois, escreva uma função que recebe como entrada um objeto e imprime uma mensagem no modelo abaixo:"Eu sou Amanda, mas pode me chamar de: Amandinha, Mandinha ou Mandi"*/

const pessoa = {
    nome: "Mariana",
    apelido: ["Mari","Nana","Ma"]
}
const imprimir = (objeto, propriedade1, propriedade2) =>{
    apelidos =  objeto[propriedade2]
    console.log(`Eu sou ${objeto[propriedade1]} mas pode me chamar de: ${apelidos[0]}, ${apelidos[1]} ou ${apelidos[2]}.`)
    return apelidos
}

imprimir(pessoa,"nome","apelido")

/*b) Agora, usando o operador spread, crie um novo objeto mantendo o valor da propriedade nome, mas com uma nova lista de três apelidos. Depois, chame a função feita no item anterior passando como argumento o novo objeto*/

const pessoa2 = {
    ...pessoa,
    apelido: ["Naninha","Marianinha","Mary"]
}

imprimir(pessoa2,"nome","apelido")

/*Questão2:
a) Crie dois objetos diferentes com as seguintes propriedades: nome, idade e profissão. */

const identidade1 = {
    nome:"Mariana" ,
    idade:32,
    profissao:"Estudante"
}
const identidade2 = {
    nome:"Thiago",
    idade:21,
    profissao:"Auxiliar de cozinha"
}

/*b) Escreva uma função que receba esses objetos e retorne um array com as seguintes informações:
1. O valor de `nome`
2. O numero de caracteres do valor `nome`
3. O valor de `idade`
4. O valor de `profissão`
5. O numero de caracteres do valor `profissão`*/

const array = (objeto1, objeto2, propriedade1, propriedade2, propriedade3) =>{
    arrayNome = [objeto1[propriedade1]] 
    arrayNome.push (objeto2[propriedade1])
    arrayNumeroNome = [arrayNome[0].length] 
    arrayNumeroNome.push(arrayNome[1].length)
    arrayIdade = [objeto1[propriedade2]]
    arrayIdade.push (objeto2[propriedade2])
    arrayProfissao = [objeto1[propriedade3]]
    arrayProfissao.push(objeto2[propriedade3])
    arrayNumeroProfissao = [arrayProfissao[0].length]
    arrayNumeroProfissao.push(arrayProfissao[1].length)
    arrayTotal=[]
    arrayTotal.push(arrayNome,arrayNumeroNome,arrayIdade,arrayProfissao,arrayNumeroProfissao)
    console.log(arrayIdade,arrayNome,arrayNumeroNome,arrayNumeroProfissao,arrayProfissao)
    console.log(arrayTotal)
}

array(identidade1,identidade2,"nome","idade","profissao")

