// Compulsory Task 2

let items = [];
fetch("https://pokeapi.co/api/v2/pokemon/eevee/")
.then(res => res.json())
.then((result) => {
pokemon = result;
console.log(`Name: 
${pokemon.name}\n`);
console.log(`Weight:
${pokemon.weight}\n`);
console.log("Abilities: ");
console.log(pokemon.abilities);
}),
(error) => {
console.log(error);
}
