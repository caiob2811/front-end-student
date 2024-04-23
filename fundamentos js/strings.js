const escola = "Cod3r"

console.log(escola.charAt(4)) // pega determinada posição do caractere na string
console.log(escola.charCodeAt(5)) // pega determinada posição do caractere na string
console.log(escola.charCodeAt(3)) // código do caractere a partir do charCodeAt
console.log(escola.indexOf(3)) // indice dele

console.log(escola.substring(1)) // do 1 para lá
console.log(escola.substring(0,3)) // vai do zero, e para antes do 3, sem incluir a posição 3.

console.log('Escola '.concat(escola).concat("!")) 
console.log('Escola ' + escola + "!") 

console.log(escola.replace(3,'e'))

console.log('Ana,Maria,Pedro'.split(',')) // usa a string para quebrar a string em array




