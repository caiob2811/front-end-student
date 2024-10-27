let i = 1

while (i < 5) {
    console.log(i)
    i++
}

let outputt = []

let count = 1

function fizzBuzz() {

    while (count <= 100) {
        if (count % 3 === 0 && count % 5 === 0) {
            outputt.push('FizzBuzz')
        }

        if (count % 3 === 0) {
            outputt.push('Fizz')
        } else if (count % 5 === 0) {
            outputt.push('Buzz')
        } else {
            outputt.push(count)
        }

        count++
        console.log(outputt)
    }


}

fizzBuzz()

let contando = 1
function contarNumeros() {
    while (contando <= 100) {
        console.log(contando)
        contando++
    }
    return 'Acabou'
}

console.log(contarNumeros())

let soma = 1
function contarAte10() {
    while (soma <= 10) {
        console.log(soma)
        soma++
    }
    return "Fim"
}

console.log(contarAte10())