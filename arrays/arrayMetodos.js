const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() // remove o ultimo elemento do array
console.log(pilotos)

pilotos.push('Caio')
console.log(pilotos)

pilotos.shift() // tira o primeiro elemento do array
console.log(pilotos)

pilotos.unshift('Kobayashi') // coloca o elemento no inicio do array
console.log(pilotos)

// splice pode adicionar e remover elementos
// adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

// remover
pilotos.splice(2,1)
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) //slice -> pega uma parte do array(fatia) nesse caso novo array gerado a partir do indice 2
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4) 
console.log(algunsPilotos2)