// Object.preventExtensions
const produto = Object.preventExtensions({ // não consegue adicionar mais atributos no objeto mas consegue excluir
    nome: 'Qualquer', preco: 1.99, tag: 'promocao'    
})
console.log('Entensível:', Object.isExtensible(produto))
produto.nome = 'Borracha'
produto.descricao = 'Borracha escolar branca'
delete produto.tag
console.log(produto) 

// Object.seal // sela o objeto, não consegue adicionar novos atributos e nem consegue excluir mas consegue modificar o valor do objeto que ja existe
const pessoa = {nome:'Juliana', idade: 35}
Object.seal(pessoa)
console.log('Selado:', Object.isSealed(pessoa))

pessoa.sobrenome = 'Silva'
delete pessoa.nome
pessoa.idade = '17'
console.log(pessoa)

// Object.freeze = selado + valores constantes

