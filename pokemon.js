const pokemon = "https://pokeapi.co/api/v2/pokemon/"
const machine = "https://pokeapi.co/api/v2/machine/"
const evolution = "https://pokeapi.co/api/v2/evolution-chain/"

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

function run() {
    readline.question('Program started  \n Enter pokemon name or id: ', input => {
        console.log(input)
        getPokemonEvo(evolution, input)
    })
}
function getPokemonEvo(url, input) {
    fetch(url + input)
        .then(res => res.json())
        .then(data => console.log(data.chain.evolves_to))
    run();
}

function getPokemon(url, poke) {
    fetch(url + poke)
        .then(res => res.json())
        .then(data => console.log('Name: ', data.name, '\n Height is: ', data.height, '\n Weight is: ', data.weight, " fatty boom boom"))

    run();
}

run();
//console.log("Wi ganna cach dem al! opsi Pikachu ded!")