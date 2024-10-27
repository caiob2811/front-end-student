let output = []

output.push(1)
output.push(2)
output.push('fizz')
output.pop() // sempre tira o elemento do array
console.log(output)

// ou


let outputt = []

let count = 1

function fizzBuzz () {
    if (count % 3 === 0 && count % 5 === 0) {
        output.push('FizzBuzz')
    }
    
    if(count % 3 === 0) {
         outputt.push('Fizz')
    } else if( count % 5 === 0) {
        outputt.push('Buzz')
    } else {
        outputt.push(count)
    }

    count ++
    console.log(outputt)
}

fizzBuzz()
fizzBuzz()
fizzBuzz()
fizzBuzz()
fizzBuzz()
fizzBuzz()
fizzBuzz()
fizzBuzz()
fizzBuzz()
fizzBuzz()
fizzBuzz()
fizzBuzz()
fizzBuzz()
fizzBuzz()
fizzBuzz()