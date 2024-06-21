function filtrarPorQuantidadeDeDigitos(numeros, quantidade) {

    return numeros.filter(numero => {
        const quantidadeDeDigitos = String(numero).length
        return quantidadeDeDigitos === quantidade
    })  
}

console.log(filtrarPorQuantidadeDeDigitos([38, 2, 365, 10, 125, 11], 2))