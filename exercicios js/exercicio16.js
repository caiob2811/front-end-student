function calculadoraBasica(num1, operacao, num2) {
    switch (operacao) {
        case '+':
            return num1 + num2
        case '-':
            return num1 - num2
        case '*':
            return num1 * num2
        case '/':
            return num1 / num2
        default:
            return 'Operação inválida'         
    }
}

console.log(calculadoraBasica(2, '+', 3));
console.log(calculadoraBasica(2, '-', 3));
console.log(calculadoraBasica(2, '*', 3));
console.log(calculadoraBasica(2, '/', 2));
console.log(calculadoraBasica(2, 'a', 3));