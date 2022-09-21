const inputElement = document.getElementById("input");
const outputElement = document.getElementById("output");

async function getPokemonData(pokemonName) {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/" + pokemonName)
    if (response.ok === false) {
        console.log('there was some issue')
        return null;
    }

    const data = await response.json();
    return data;
}

async function search() {
    try {
        const pokemonName = inputElement.value;
        const pokemonData = await getPokemonData(pokemonName);
        if (pokemonData === null) {
            outputElement.innerText = "Pokemon not found!"
            return;
        }


        const gameNameArray = pokemonData.game_indices.map(game => game.version.name);

        let str = "<ol>";
        for (const name of gameNameArray) {
            str += `<li>${name}</li>`;
        }
        str += "</ol>";

        // let str = gameNameArray.reduce(
        //     (prev, curr) => { return prev + `<li>${curr}</li>`; },
        //     "<ol>"
        // );
        // str += "</ol>";

        outputElement.innerHTML = `
        <div> 
            <H1>${pokemonData.name}</H1>
            <div> ${str} </div>
        </div>`

        console.log(pokemonData)
    } catch (error) {
    }
}
