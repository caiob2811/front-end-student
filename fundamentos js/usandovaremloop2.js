const funcs = []

for( var i = 0; i < 10; i++) { // não tem escopo em função
    funcs.push(function(){
        console.log(i)
    })
}

funcs [2]()
funcs [8]()
