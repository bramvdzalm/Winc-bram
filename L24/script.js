// alert("druk op de knop")

const showPokemon = async function() {
    const pokemon = document.getElementById("pokemon_list")
    const data = await getPokemon()
    console.log(data)
    const li = document.createElement("li")
    const liInfo = document.createTextNode(
        `name of the Pokemon is ${data.name} and his 
        specialties are: ${data.types[0].type.name} & ${data.types[1].type.name}`
    );
    li.appendChild(liInfo)
    pokemon.append(li)
}



