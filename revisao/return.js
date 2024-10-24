function comprarPao(dinheiro, custoPorPao) {
    console.log('vira a rua')
    console.log('segue reto')
    
    console.log('Comprei ' + calcPao(dinheiro, custoPorPao) + ' pães')
    
    return calcularTroco(dinheiro, custoPorPao)   
}

function calcPao(valorDoDinheiro, custoPorPao) {
    let numerosDePaes = Math.floor(valorDoDinheiro / custoPorPao)
    return numerosDePaes 
}

function calcularTroco(dinheiroInicial, custoPorPao) {
     let trocoDoPao = dinheiroInicial % custoPorPao
        return trocoDoPao
}
   
console.log(comprarPao(4, 1.5))