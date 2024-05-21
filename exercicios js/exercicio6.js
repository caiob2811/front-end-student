// 06) Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda retornará o valor da aplicação sob o regime de juros compostos.
function jurosSimples(capital, taxa, tempodeapli) {
    return capital + (capital * taxa * tempodeapli)
}

function jurosCompostos(capital, taxa, tempodeapli) {

    return capital * (1 + taxa) ** tempodeapli
}

console.log(jurosSimples(100, 10/100, 2));
console.log(jurosCompostos(100, 10/100, 2));