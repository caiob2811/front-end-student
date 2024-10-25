function anoBissexto(ano) {

    if (ano % 4 === 0) {
        return 'O ano ' + ano +' é bissexto'
    }
    else if (ano & 100 === 0) {
        return 'O ano ' + ano +' é bissexto'

    } else if (ano & 400 === 0) {
         return 'O ano ' + ano +' é bissexto'

    } else {
        return 'O ano ' + ano +' não é bissexto'
    }
}

console.log(anoBissexto(2000))
console.log(anoBissexto(2100))
console.log(anoBissexto(2001))
console.log(anoBissexto(2023))
