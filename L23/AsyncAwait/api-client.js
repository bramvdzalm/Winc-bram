const API_KEY = "aee15973b3645eb39df6a54dd484fa1f";

async function getData() {
    const apiUrl = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`
    try {
        const res = await fetch(apiUrl, {method: "GET"});
        const data = await res.json();
        return data
    } catch(err) {
        return err
    }
}

