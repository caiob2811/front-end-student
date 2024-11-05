function sorteio() {

    let resultado = []

    for (i = 0; i <=10; i++) {
        resultado = Math.floor(Math.random() * 11)
    }
    console.log(resultado)
}

sorteio()

function weekDays(days) {
    switch (days) {
        case 1:
            return 'Domingo'
        case 2:
            return 'Segunda'
        case 3:
            return 'Terça'
        case 4:
            return 'Quarta'
        case 5:
            return 'Quinta'
        case 6:
            return 'Sexta'
        case 7:
            return 'Sábado' 

        default:
            return 'Dia da semana inválido'
    }
}

console.log(weekDays(1))
console.log(weekDays(2))
console.log(weekDays(3))
console.log(weekDays(4))
console.log(weekDays(5))
console.log(weekDays(6))
console.log(weekDays(7))
console.log(weekDays(8))