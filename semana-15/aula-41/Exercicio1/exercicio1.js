// Usamos o process.argv para acessar os parâmetros.

const nome =  process.argv[2]

const idade = process.argv[3]

const imprimirDados = () => {
    console.log (`Olá, ${nome}! Você tem ${idade} anos. Em sete anos você terá ${Number(idade)+7}`)
}

imprimirDados()