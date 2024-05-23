function comprarcarro(tipoDeCarro) {
    switch(tipoDeCarro) {
        case 'hatch':
        return 'Compra efetuada com sucesso'
        case 'sedan':
        case 'motocicleta':
        case 'caminhonete':
        return 'Tem certeza que não prefere este modelo?'
        default:
            return 'Não trabalhamos com este tipo de automóvel aqui!'
    }
}

console.log(comprarcarro('hatch'))
console.log(comprarcarro('sedan'))
console.log(comprarcarro('motocicleta'))
console.log(comprarcarro('caminhonete'))
console.log(comprarcarro('kiwi'))