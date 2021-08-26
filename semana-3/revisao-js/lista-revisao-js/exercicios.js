// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
   return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
    const novoArray = array.reverse()
    return novoArray
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
   
    let arrayOrdenado =[]
    for(let i = 0; i<array.length; i++){
        if (array[i]array[i+1]){
        arrayOrdenado.push(array[i])
    }
    
    }
  return arrayOrdenado
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    let arrayPar = []
    for(let i = 0; i<array.length; i++){
        if (array[i]%2 === 0){
            
            arrayPar.push(array[i])
            
        }
        
    }
  
 return arrayPar
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) { 
    
    let arrayParElevadoADois = []
    for(let i = 0; i<array.length; i++){

        if (array[i]%2 === 0){
            arrayParElevadoADois.push(array[i]*array[i])            
        }       
    }
  
 return arrayParElevadoADois
     
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {

  
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {

}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
    let primeirosNumerosArrayPar = []
    for(let i = 0; i<n; i++){
        if (n[i]%2 === 0){
            
         primeirosNumerosArrayPar.push(n[i])
            
        }
        
    }
 console.log (primeirosNumerosArrayPar)
 return primeirosNumerosArrayPar
   
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {

}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
    
        
 return (`Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores[0]}, ${filme.atores[1]}, ${filme.atores[2]}, ${filme.atores[3]}.`)

}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}