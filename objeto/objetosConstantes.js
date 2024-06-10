// pessoa -> 123 -> {...}
const pessoa = {nome: 'João'}
pessoa.nome = 'Pedro'
console.log(pessoa)

// pessoa -> 456 -> {...}
// pessoa = {nome: Ana}
Object.freeze(pessoa) //congela o objeto, não consegue mexer nele mais 

pessoa.nome = 'Maria' // não mudou o nome do objeto
pessoa.end = 'Rua ABC' // não adicionou
delete pessoa.nome // não deletou

console.log(pessoa.nome) 

console.log(pessoa)

const pessoaConst =  Object.freeze({nome: 'João'})
pessoaConst.nome = 'Maria'
console.log(pessoaConst) 