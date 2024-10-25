let a = 1
let b = '1'

if(a === b) { // é igual
    console.log('True')
} else {
    console.log('false')
} 

let c = 1
let d = '1'

if(c == d) { //comparação
    console.log('True')
} else {
    console.log('false')
}


let score = Math.random() * 100

score = Math.floor(score + 1)


if(score > 90) {
    console.log('Atingiram o nível execelente de compatibilidade: ' + score + '%') 
} 

if(score > 70) {
    console.log('Atingiram o nível bom de compatibilidade: ' + score + '%') 
} 
if (score <= 50) {
    console.log('A porcentagem entre vcs é baixa: ' + score + '%') 
}
