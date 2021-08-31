function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
  
   let quantidadeElementos = arrayDeNumeros.filter(x => x === numeroEscolhido).length
   if (quantidadeElementos===0){
     return "Número não encontrado"
   }
   
   return `O número ${numeroEscolhido} aparece ${quantidadeElementos}x`
  
}