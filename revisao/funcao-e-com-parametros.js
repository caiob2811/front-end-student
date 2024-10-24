function getPao() {
    console.log('vira a rua')
    console.log('segue reto')
    console.log('compre pão')
}

getPao()

/* com parametros */
function getPaoo(pao) {
    console.log('vira a rua')
    console.log('segue reto')
    console.log('compre ' + pao + ' pães')
}

getPaoo(10)


function getPaooo(dinheiro) {
    console.log('vira a rua')
    console.log('segue reto')
    
    let numerosDePaes = Math.floor(dinheiro / 1.5)

    console.log('Comprei ' + numerosDePaes + ' pães')
}

getPaooo(5)

/* desafio */
function timeOfLife (age) {
    let yearsRemaining = 90 - age 

    let days = yearsRemaining * 365
    let weeks = yearsRemaining * 52 
    let months = yearsRemaining * 12

    console.log('Você tem ' + days + ' dias restantes' + weeks + ' semanas restantes' + months + ' meses restantes')
}

timeOfLife(56)
C