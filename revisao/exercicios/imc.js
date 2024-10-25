function calculoImc(weight, height) {
    let imc = weight / Math.pow(height, 2)

    return Math.round(imc)
}

console.log(calculoImc(70,1.70))