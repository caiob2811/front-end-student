let score = Math.random() * 100

score = Math.floor(score + 1)


if(score > 30 && score <= 70) {
    console.log('Atingiram o nível de compatibilidade médio de: ' + score + '%') 
} 

if(score > 70) {
    console.log('Atingiram o nível bom de compatibilidade: ' + score + '%') 
} 
if (score <= 30) {
    console.log('A porcentagem entre vcs é baixa: ' + score + '%') 
}