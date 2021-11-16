const operacaoMatematica = process.argv[2]

const primeiroValor = process.argv[3]

const segundoValor = process.argv[4]

const resultado = () => {
    if (operacaoMatematica === "add"){
        console.log(`Resposta: ${(Number(primeiroValor) + Number(segundoValor))}`)
    } else if (operacaoMatematica === "sub"){
        console.log(`Resposta: ${(Number(primeiroValor) - Number(segundoValor))}`)
    } else if (operacaoMatematica === "mult"){
        console.log(`Resposta: ${(Number(primeiroValor) * Number(segundoValor))}`)
    } else if (operacaoMatematica === "div"){
        console.log(`Resposta: ${(Number(primeiroValor) / Number(segundoValor))}`)
    } 
} 

resultado()