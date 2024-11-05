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