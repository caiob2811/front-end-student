function getPreco(imposto = 0, moeda = 'R$') {
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}` // template string
}
const produto = {
    nome: 'Notebook',
    preco: 4589,
    desc: 0.15,
    getPreco
}
global.preco = 20
global.desc = 0.1

console.log(getPreco())
console.log(produto.getPreco())

const carro = {
    preco: 30000,
    desc: 0.20
}

console.log(getPreco.call(carro)) // chamar a função
console.log(getPreco.apply(carro)) // tbm chama a função

console.log(getPreco.call(carro, 0.17, '$'))
console.log(getPreco.apply(carro, [0.17, '$']))
// a forma que passa os parametros que diferencia o call e apply

