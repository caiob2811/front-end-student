// Corta o array (filtra)

const produtos = [
    { nome: 'Notebook', preco: 2499.00, fragil: true},
    { nome: 'Ipad', preco: 4199.00, fragil: true},
    { nome: 'Copo de vidro', preco: 12.49, fragil: true},
    { nome: 'Copo de plástico', preco: 18.99, fragil: false}
]

console.log(produtos.filter(function (p) {
    return false
}))

const caro = produtos => produtos.preco >= 500
const fragil = produtos => produtos.fragil

console.log(produtos.filter(caro).filter(fragil))
