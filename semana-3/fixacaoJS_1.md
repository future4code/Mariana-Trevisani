function calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {
    const comissao = (Number(qtdeCarrosVendidos)*100)+(Number(valorTotalVendas)*0.05)
    const salario = comissao + 2000.00
    return salario
}