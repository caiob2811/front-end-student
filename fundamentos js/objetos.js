const prod1 = {} // chaves significa objeto, [] significa arrays
prod1.nome = 'Celular Ultra'
prod1.preco = 4999.90
prod1['desconto legal'] = 0.40 // evitar atributos com espaço

console.log(prod1) 

const prod2 = { 
    nome: 'Camisa polo',
    preco: 79.90,
}
prod2['desconto legal'] = 0.50 // evitar atributos com espaço

console.log(prod2)
