let listaDeTarefas = [
    "lavar a louça",
    "fazer exercícios",
    "dobrar a roupa",
]

const novaTarefa = process.argv[2]


const adicionarTarefa = ()=>{
     listaDeTarefas.push(novaTarefa)
     console.log(listaDeTarefas)

}

console.log(adicionarTarefa())