async function getPokemonData(pokemonName) {
const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
const data = await response.json();
//console上でdataを表示する
console.log(data);
return data;
}

async function displayPokemon() {
    const object = document.getElementById("pokemonshow");
    const dittoview = await getPokemonData("ditto");
    object.innerHTML = `
    <img src="${dittoview.sprites.front_default}" alt="${dittoview.name}">
    <dl>
        <ul>
        <li><dt><strong>えいごめい</strong></dt>
            <dd>${dittoview.name}</dd></li>
        <li><dt><strong>ぜんこくずかん</strong></dt>
            <dd>No.${dittoview.id}</dd></li>
        <li><dt><strong>たかさ</strong></dt>
            <dd>${dittoview.height / 10}m</dd></li>
        <li><dt><strong>おもさ</strong></dt>
            <dd>${dittoview.weight / 10}kg</dd></li>
    </dl>
    `;
    }

displayPokemon();