let form = document.getElementById('form')

form.addEventListener('submit', function(event) {

    event.preventDefault()

    let number1 = Number(document.querySelector('input[name="number1"]').value)

    let number2 =  Number(document.querySelector('input[name="number2"]').value)

    let soma = number1 + number2

    document.querySelector('input[name="resultado"]').value = soma
})