// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
    return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
    return array.reverse()
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    array.sort(function compararNumeros(a, b) {
        return a - b;
        })
    
    return array
}

// EXERCÍCIO 04
function retornaNumerosPares(array) { 
    let arrayPar = []
    for (let i=0; i<= array.length; i++){
                
        if (array[i]%2 === 0){
            
            arrayPar.push(array[i])           
        }
        
    }
    return arrayPar
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    let arrayPar = []
    for (let i=0; i<= array.length; i++){
                
        if (array[i]%2 === 0){
            
            arrayPar.push(array[i]*array[i])           
        }
        
    }
    return arrayPar
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    let numeroMaior = array[0]
    for (let i= 0; i< array.length; i++){
                
        if (numeroMaior < array[i]){
            
            numeroMaior = array[i]     
            
        }
        
    }
    return numeroMaior
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {

    let objeto = {
        maiorNumero: 0,
        maiorDivisivelPorMenor: 0,
        diferenca: 0
    }   

    if (num1>num2){
        
    objeto.maiorNumero = num1
    objeto.diferenca = num1 - num2
        if (num1%num2 === 0){
            objeto.maiorDivisivelPorMenor = true
        }else {
            objeto.maiorDivisivelPorMenor = false
        }
        
    }else if (num2>num1){
    
    objeto.maiorNumero = num2
    objeto.diferenca = num2 - num1
        if (num2%num1 === 0){
            objeto.maiorDivisivelPorMenor = true
        }else {
            objeto.maiorDivisivelPorMenor = false
        }        
    }    
    return objeto
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
   
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {

}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   
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