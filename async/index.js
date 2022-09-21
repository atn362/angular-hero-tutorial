//
// fetch('https://pokeapi.co/api/v2/pokemon/ditto')
//     .then((response) => response.json())
//     .then((data) => console.log(data));
const inputElement = document.getElementById('input');
const outputElement = document.getElementById('output')

async function getPokemonData(pokemonName) {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/' + pokemonName)
    if(response.ok == false) {
        console.log('there was an issue')
        return null;
    }
    const data = await response.json();
    return data;
}

async function search() {
    try {
        const pokemonName = inputElement.value;
        const pokemonData = await getPokemonData(pokemonName);

        outputElement.innerHTML = `<h1> ${pokemonData.name}  </h1>`;
        console.log(pokemonData)
    } catch (error) {

    }
}

// let pokemonData = await getPokemonData()
// console.log(
//     await pokemonData
// );
