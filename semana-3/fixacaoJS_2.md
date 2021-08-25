function calculaPrecoTotal(quantidade) {

    let custoTotal = 0
    if (quantidade>=12){
        custoTotal = Number(quantidade) * 1.00
    } else {
        custoTotal = Number(quantidade) * 1.30
    }
  
    return custoTotal
}