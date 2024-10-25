let resultado = Math.random() * 100

resultado = Math.floor(resultado + 1)

if(resultado > 70) {
    console.log('Atingiram o nível bom de compatibilidade: ' + resultado + '%') 
} else {
    console.log('A porcentagem entre vcs é: ' + resultado + '%') 
}








function tamanho (alturaCaio, alturaManu) {

    geral = alturaCaio - alturaManu
    
    let resultado = Math.round(geral)

    if (alturaCaio > alturaManu) {
        console.log('Por ' + resultado + ' cm, o Caio é maior')
    } else {
        console.log('Por ' + resultado + ' cm, a Manu é maior')
    }
}

tamanho(170, 159)

