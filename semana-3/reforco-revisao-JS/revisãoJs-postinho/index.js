
// COMPARADORES
// Exercício 1------------------------------------------------------------------------------------

// a-)Comparador de desigualdade a!==b 
// Exemplo:

function checarDesigualdade(a, b) {

    return `No comparador de desigualdade ${a}!==${b} é ${a !== b}`
}
console.log(checarDesigualdade(1, 2));



function checarIgualdade(a, b) {

    return `No comparador de igualdade ${a}===${b} é ${a === b}`
}
console.log(checarIgualdade(1, 2));

// c-)Faça uma função chamada "verificaSeEMaior"

function verificaSeEMaior(a, b) {

    return `Na verificação se o primeiro é maior que o segundo ${a}>${b} ${a>b} ou o segundo é maior que o primeiro ${a}<${b} ${a<b}`
}
console.log(verificaSeEMaior(321, 2156));




// Exercício 2------------------------------------------------------------------------------------
//Escreva true or false para as comparações abaixo:
// exemplo 1>2 = false
// a-) 1==='1'= false
// b-) 1=='1'= true
// c-) 'a'==='b'= false
// d-) 'b'>'a'= true
// e-) 0!==null= true
 

// CONDICIONAIS

// Exercício 3------------------------------------------------------------------------------------

// const cadastro = () => {

//     let usuario = []
//     const nomeDoUsuario = prompt("Qual o seu nome?")
//     const anoDeNascimento = Number(prompt("Em que ano você nasceu?"))
//     const senhaDoUsuario = prompt("Digite uma senha com no mínimo 6 caracteres.")
//     let nacionalidade = prompt("Qual a sua nacionalidade?").toLowerCase().replaceAll("o","a")
    
    
//     if ((2021-anoDeNascimento)>=18 && (senhaDoUsuario.length >= 6) && (nacionalidade === "brasileira")){
//         usuario.push(nomeDoUsuario)
//         usuario.push(anoDeNascimento)
//         usuario.push(senhaDoUsuario)
//         usuario.push(nacionalidade)
//     }
    
//     console.log(usuario)

// }
// console.log(cadastro());

// Exercício 4-----------------------------------------------------------------------------------------------

// const login = () => {

//     const login = "labenu"
//     const loginUsuario = prompt("Digite a sua senha")
//    if (login === loginUsuario){
//        console.log("Usuário logado")
//    } else{
//        console.log("Senha inválida")
//    }

// }

// console.log(login());

// Exercício 5----------------------------------------------------------------------------------------------------

// const primeiraDose = () => {

//     const nome = prompt("Qual o seu nome?")
//     const vacina = prompt("Tomou a primeira dose de qual vacina ?")
//     let tempo = ""
//     let data = ""
//     if (vacina=== "Coronvac"){
//         tempo = 28
//         data = "29/08/2021"
//     } else if (vacina=== "Astrazenica"){
//         tempo = 90
//         data = "01/11/2021"
//     } else if (vacina=== "Pfizer"){
//         tempo = 90
//         data = "01/11/2021"
//     }

//     return `Olá ${nome}! A próxima dose da ${vacina} é daqui a ${tempo} dias. Compareça no posto na data ${data}.`
// }
// console.log(primeiraDose())


// LOOP+CONDICIONAL

// Exercício 6 -------------------------------------------------------------------------------------

// const segundaDose = (nomeDoUsuario) => {
    
//     const usuarios = [
//         { nome: "Artur", imunizacao: "incompleta" },
//         { nome: "Barbara", imunizacao: "incompleta" },
//         { nome: "Carlos", imunizacao: "incompleta" }
//     ]

//     for(let i = 0; i < usuarios.length; i++ ){
//         if(nomeDoUsuario === usuarios.nome){
//             usuarios.imunizacao.replace( "incompleta", "completa" ) 
//             }
            
//     }


// }
// console.log(segundaDose("Barbara"));

// Exercício 7 --------------------------------------------------------------------------------------

const avisoAosAtrasados = () => {
    const usuarios = [
        { nome: "Artur", imunizacao: "incompleta" },
        { nome: "Barbara", imunizacao: "completa" },
        { nome: "Carlos", imunizacao: "incompleta" }
    ]
    
    
    for(let i = 0; i < usuarios.length; i++ ){
        
        const imunizacao = usuarios.imunizacao
        console.log (imunizacao)
        if (imunizacao === "incompleta"){
            console.log (`Olá ${usuarios.nome}! Sua imunização está ${usuarios.imunizacao}, por favor volte ao postinho para tomar a segunda dose.`)
            
        }
    
    }
}
console.log(avisoAosAtrasados());


// DESAFIO------------------------------------------------------------------------------------------

const usuarios = [
    {
        nome: "Artur",
        ano: 2000,
        nacionalidae: "brasileiro",
        senha: "123456",
        vacina: "pfizer",
        imunizacao: "incompleta"
    },
    {
        nome: "Bárbara",
        ano: 1984,
        nacionalidae: "brasileira",
        senha: "labenu",
        vacina: "astrazenica",
        imunizacao: "completa"
    },
    {
        nome: "Carlos",
        ano: 2000,
        nacionalidae: "brasileiro",
        senha: "123456",
        vacina: "coronavac",
        imunizacao: "incompleta"
    }

]

// const cadastro = () => {
//     //  Sua lógica aqui
// }
// console.log(cadastro());

// const login = () => {
//     //  Sua lógica aqui
// }
// console.log(login());

// const primeiraDose = () => {
// //  Sua lógica aqui
// }
// console.log(primeiraDose())
// const segundaDose = (nomeDoUsuario) => {
//     //  Sua lógica aqui
// }
// console.log(segundaDose("ALGUM NOME AQUI"));

// const avisoAosAtrasados = () => {
//     //  Sua lógica aqui
// }
// console.log(avisoAosAtrasados());