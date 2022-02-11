type User = {
    name: string,
    age:number
}

console.log("hello World")

//Declarando variáveis em ts

const company: string = "Labenu"
let age: number = 5
let passwordIsCorrect: boolean = false

//Utilizando union type (mais de uma tipagem)

let text: string | undefined = "Mariana"
let message: string | null = null
let nickname: string|boolean = ""

//declarando array

const userIds: number[] = [0,1,2,3] //opção 1
const clientIds: Array<number> = [0,1,2,3] //opção 2

//declarando array com union type

const phrase1: (string|number)[]= ["o","i","!",6] //opção 1
const phrase2: Array<string|number> = ["o","i",1,5] //opção 2

// declarando objetos

const user:{name: string, age: number} = {
    name: "Astrodev",
    age: 500
}

// declarando objetos usando o type

const user1:User = {
    name: "astrodev",
    age:12
}


// exercício 1

type Carro = {
    marca: string,
    volumeDoTanque: number,
    temMotorFlex: boolean
}

const mustang: Carro = {
    marca: "Ford",
    volumeDoTanque: 61,
    temMotorFlex: false
}

const gol: Carro = {
    marca: "Volkswagen",
    volumeDoTanque: 55,
    temMotorFlex: true
}

const uno: Carro ={
    marca: "Fiat",
    volumeDoTanque: 45,
    temMotorFlex: false
}

const automoveis: Carro[] = []

automoveis.push(gol)
automoveis.push(uno)
automoveis.push(mustang)
automoveis.push({marca: "Fiat", volumeDoTanque:55, temMotorFlex: true})

console.log(automoveis)

// tipagem função

const buscarCarrosPorMarca = (
    frota: Carro[],
    marca?:String
): Carro[] => {
    if (marca === undefined){
        return frota
    }

    return frota.filter(
        (carro)=>{
            return carro.marca === marca
        }
    )
}

console.log(buscarCarrosPorMarca(automoveis,"Volkswagen"))

