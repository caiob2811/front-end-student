console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array('Agatha', 'Aldo', 'Daniel')
console.log(aprovados)

aprovados = ['Agatha', 'Aldo', 'Daniel']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])

aprovados[3] = 'Paulo' // usado para substituir o valor
aprovados.push('Abia') // usado para adicionar um novo valor
console.log(aprovados.length)

aprovados[9] = 'Rafael'
console.log(aprovados.length)
console.log(aprovados[8] === undefined)
console.log(aprovados)

console.log(aprovados)
aprovados.sort() // ordena o array
console.log(aprovados)

delete aprovados[1] // deleta o valor mas não ordena o array, ele coloca undefined naquela posição
console.log(aprovados[1])
console.log(aprovados[2])

aprovados = ['Agatha', 'Aldo', 'Daniel']
aprovados.splice(1, 1) //(primeiro é o indice e depois é quantidade que você quer excluir a partir daquele indice e depois põe quem você quer adicionar)
// serve pra adicionar o indice no array e também serve para excluir
console.log(aprovados)