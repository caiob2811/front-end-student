let numeros = Math.random()
numeros = numeros * 100 // se quiser que vá de 1 a 6 * 6 / se for até 100

numeros = Math.floor(numeros + 1)

console.log(numeros) 

// ou

let resultado = Math.random() * 100

resultado = Math.floor(resultado + 1)

console.log('A porcentagem entre vocês dois é : ' + resultado + '%')

// ou 
function numerosRandom (resultado) {
    return Math.floor(Math.random()  * resultado)
}
    
    console.log(numerosRandom(50))