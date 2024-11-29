function houseKeeper(name, age, yearsOfExperience, clean, limparComodo) {
    this.name = name,
    this.age = age,
    this.yearsOfExperience = yearsOfExperience,
    this.clean = clean,
    this.limparComodo = function() { // aqui ensina como coloco com função
      alert('Limpando')
    }  
}

// ou

function houseKeeper2 (name, age, yearsOfExperience, clean) {
    this.name = name
    this.age = age
    this.yearsOfExperience = yearsOfExperience
    this.clean = clean
}

let houseKeeper1 = new houseKeeper("Cara", 50, 20, ['banheiro'])

console.log(houseKeeper1)