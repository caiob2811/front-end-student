let ativo = false
console.log(ativo)

ativo = true
console.log(ativo)

ativo = 1 // se comporta com true
console.log(!!ativo)

console.log('verdadeiros...')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!!'texto')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(ativo = true))

console.log('falsos...')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(ativo = false))

let nome = 'Lucas'
console.log(nome || 'Desconhecido')
