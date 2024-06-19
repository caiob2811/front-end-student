// Crie uma função que receba uma array e retorne o primeiro e o último elemento desse array como um novo array:

function receberPrimeiroEUltimo(elementos) {
    
  const primeiroElemento = elementos.shift()
  const ultimoElemento = elementos.pop()

  return [primeiroElemento, ultimoElemento]
}

console.log(receberPrimeiroEUltimo([1, 2, 3, 4, 5]))
console.log(receberPrimeiroEUltimo(['a', 'b', 'c']))

