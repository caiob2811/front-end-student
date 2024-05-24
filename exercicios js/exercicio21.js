function planoDeSaude(idade) {
    if(idade < 10) {
        return 180
    }else if (idade < 30) {
        return 130
    } else if (idade < 60) {
        return 195
    } else{
        return 230
    }
}


console.log(planoDeSaude(10))
console.log(planoDeSaude(30))
console.log(planoDeSaude(40))
console.log(planoDeSaude(52))
console.log(planoDeSaude(60))
console.log(planoDeSaude(80))
