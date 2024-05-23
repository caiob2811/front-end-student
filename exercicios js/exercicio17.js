function reajuste(plano,salarioAtual){
    switch(plano) {
        case 'A':
            return (salarioAtual * 1.1)
        case 'B':
            return (salarioAtual * 1.15)
        case 'C':
            return (salarioAtual * 2.0)
        default:
            return (salarioAtual)
    }
}

console.log(reajuste('A', 1500))
console.log(reajuste('B', 1500))
console.log(reajuste('C', 1500))
console.log(reajuste('D', 1500))