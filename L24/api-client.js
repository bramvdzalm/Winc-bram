async function getPokemon() {
    const apiUrl = `https://pokeapi.co/api/v2/pokemon/1/`
    try {
        const res = await fetch(apiUrl, {method: "GET"});
        const data = await res.json();
        return data
    } catch(err) {
        return err
    }
}



