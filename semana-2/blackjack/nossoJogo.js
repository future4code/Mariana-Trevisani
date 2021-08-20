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

console.log (`Boas vindas ao jogo de Blackjack!`)

let iniciarJogo = prompt(`Quer iniciar uma nova rodada?`)

const jogo = (entrada) => {   
   
   if (entrada.toLowerCase() === "ok") {
      const carta = comprarCarta()
      const carta2 = comprarCarta()
      const somaDasCartasRodadaUsuario = carta.valor+carta2.valor

      console.log(`Usuário - cartas: ${carta.texto} ${carta2.texto} - pontuação: ${somaDasCartasRodadaUsuario}`)

      const carta3 = comprarCarta()
      const carta4 = comprarCarta()
      const somaDasCartasRodadaComputador = carta3.valor+carta4.valor

      console.log(`Computador - cartas: ${carta3.texto} ${carta4.texto} - pontuação: ${somaDasCartasRodadaComputador}`)

      if (somaDasCartasRodadaUsuario > somaDasCartasRodadaComputador) {
         console.log (`O usuário ganhou!`)
      } else if (somaDasCartasRodadaUsuario < somaDasCartasRodadaComputador){
         console.log (`O computador ganhou!`)
      } else {
         console.log (`Empate!`)
      }

   } else if (entrada.toLowerCase() === "cancel") { 
      console.log(`O jogo acabou.`)
      
   } else {
      console.log(`Desculpe não entendi! Digite "ok" para começar ou "cancel" para sair do jogo.`)
   } 
}
jogo(iniciarJogo)

// while(iniciarJogo === "ok"){
//    iniciarJogo = prompt(`Quer iniciar uma nova rodada?`)
//    jogo(iniciarJogo)
// }

