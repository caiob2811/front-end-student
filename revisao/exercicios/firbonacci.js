/* function firbonacciGenerator(n) {

    let saida = []

    let a = 0
    let b = 1

    while (a <= n) {
        saida.push(a)

        let soma = a + b
        a = b
        b = soma
    }


    console.log(saida)

}

firbonacciGenerator(144)
 */

function firbonacciGenerator(n) {
    let output = []
    let a = 0
    let b = 1

    while (a <= n) {
        output.push(a)

        let soma = a + b
        a = b
        b = soma
    }
    console.log(output)
}

firbonacciGenerator(250)