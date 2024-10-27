for (let i = 1; i<5; i++) {
    console.log(i)
}

let outputt = []



function fizzBuzz() {

    for (let count = 1; count <= 100; count++ ) {
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

        console.log(outputt)
    }


}

fizzBuzz()