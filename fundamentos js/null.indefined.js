let valor // não inicializada 
console.log(valor) // undefined(valor não foi definido)

valor = null // ausência de valor
console.log(valor)
// console.log(valor.toString()) // Erro! Não da pra acessar o que está nulo

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined // evite atribuir undefined, deixa a linguagem definir
console.log(!!produto.preco)
//delete produto.preco
console.log(produto)

produto.preco = null // sem preço
console.log(!!produto.preco)
console.log(produto)