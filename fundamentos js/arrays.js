const valores = [7.7, 8.9, 9.1, 1*1]
console.log(valores[0], valores [3])
console.log(valores[4])

valores[4] = 10
console.log(valores)
console.log(valores.length) // diz quantos elementos tem no array

valores.push({id: 3}, false, null, 'teste') // add valores no array
console.log(valores)

console.log(valores.pop()) // retiraa do array esse valor

delete valores[0] // deleta o valor do array
console.log(valores)

console.log(typeof valores) // array é um object