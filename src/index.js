//desafio consiste em declarar um nome para o treinador e o nome para seus seis pokemon, descobrir qual deles está com a vida menor que 40%, sendo menorigual que 40% o treinador terá que utilizar uma Potion para recuperar o status de HP do pokemon, se o pokemon estiver com 0 de vida o treinador tem que utilizar um Revive para reviver o pokemon.

let nickTrainer = "Lucasexe"
let timePokemon = [
    ["Charmander", 56],
    ["Squirtle", 78],
    ["Bulbasaur", 37],
    ["Pikachu", 98],
    ["Cubone", 21],
    ["Dratini", 0]
]

let potionHP = "Small Potion"
let revivePoke = "Max Revive"
let nPoke = 0

for (nPoke === 0; nPoke <= 5; nPoke++){
    if (timePokemon[nPoke][1] <= 40 && timePokemon [nPoke][1] > 0){
        console.log("Seu pokemon " + timePokemon[nPoke][0] + " está com vida inferior à 40% tome cuidado! use uma " + potionHP)
    } else if (timePokemon[nPoke][1] === 0) {
        console.log(timePokemon[nPoke][0] + " está com vida ZERADA use um " + revivePoke)
    } else {
        console.log(timePokemon[nPoke][0] + " está bem")
    }
}

console.log(nickTrainer + " Parabéns, seus pokémon estão prontos pra continuar batalhando!")
