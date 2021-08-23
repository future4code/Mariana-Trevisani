/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

const carta = comprarCarta()
const carta2 = comprarCarta()
if ((carta.valor === 11 && carta2.valor === 11) === true){
   carta = comprarCarta()
   carta2 = comprarCarta()
}
const carta3 = comprarCarta()
const carta4 = comprarCarta()

if ((carta3.valor === 11 && carta4.valor === 11) === true ){
   carta3 = comprarCarta()
   carta4 = comprarCarta()
}

confirm(
   `Suas cartas são ${carta.texto} ${carta2.texto}. A carta revelada do computador é ${carta3.texto}.
   \n 
   Deseja comprar mais uma carta?`)
  