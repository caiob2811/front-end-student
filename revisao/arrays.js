let nome = 'Caio'

if (nome === 'Caio') {
    console.log ('convidado')
} else {
    console.log ('não convidado')
} // Para não repetir varias lets com nome, usa o array


// Relembrando 
console.log(typeof Array, typeof new Array, typeof [])

let nomes = new Array ('Caio', 'João')
console.log(nomes)

console.log(nomes[0])

nomes.push('Fernando')

console.log(nomes)
console.log(nomes.length)
console.log(nomes[2])


// 

let getNames = ['Caio' , 'João', 'Fernando', 'Josué'] 

console.log(getNames.length)

console.log(getNames[0])

console.log(getNames.includes('Caio'))

console.log(getNames.includes(''))

/* let nomesDaLista = ['Caio', 'João'] 

console.log(nomesDaLista)

let verificar = prompt('Qual é seu nome?');

if(nomesDaLista.includes(verificar)) {
    alert('ta dentro')
} else {
    alert ('Desculpe não ta na lista')
} */





