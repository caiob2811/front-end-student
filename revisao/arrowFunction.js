const teste = () => console.log('Oi')

let double = function (num) {
    return 2 * num
}

double = (num) => {
    return 2 * num
}

double = num => 2 * num
console.log(double(2))

let hi = function () {
    return 'Jesus te ama'
}

hi = () => 'Jesus te ama'

hi = _ => 'Jesus te ama'

console.log(hi)

// e também para não variar o this, o this sempre referenciar o contexto (objeto = pessoa)

function Pessoa() { 
    this.idade = 0
    
    setInterval ( () => {
        this.idade++
        console.log(this.idade)
    }, 1000)
}

new Pessoa()

//this ficou amarrado a pessoa e não ao setInterval que nem no arquivo do bind.js