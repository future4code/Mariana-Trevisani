function calculaNota(ex, p1, p2) {

    let media = (Number(ex)+Number(p1)+Number(p2))/3
    if (media >= 9){
        return "A"
    } else if (9 > media && media >= 7.5){
        return "B"
    } else if (7.5 > media && media >= 6){
        return "C"
    } else {
        return "D"
    }
  
}