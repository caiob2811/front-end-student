function sacolao(frutas) {
    switch(frutas) {
        case 'maçã':
        return 'Não vendemos essa fruta aqui'

        case 'kiwi':
        return 'Estamos com escassez de kiwis'

        case 'melancia':
        return 'Aqui está R$ 3 reais o quilo!'

        break
        default:
        return 'não vendemos essa fruta aqui (:'
    }
}

console.log(sacolao('maçã'))
console.log(sacolao('kiwi'))
console.log(sacolao('melancia'))
console.log(sacolao('banana'))
console.log(sacolao('pera'))
console.log(sacolao('laranja'))