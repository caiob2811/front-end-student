const soma = function (x,y) {
    return x + y;
}

const imprimirResultador = function(a, b, operacao = soma) {
    console.log(operacao(a,b))
}

imprimirResultador(3, 4)
imprimirResultador(3, 4, function (x, y) {
    return x - y
})

imprimirResultador(3, 4, (x, y) => x * y)


const pessoa = {
    falar: function () {
        console.log(' oi')
    }
}

pessoa.falar()