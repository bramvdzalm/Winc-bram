const API_KEY = "aee15973b3645eb39df6a54dd484fa1f";


async function getMovieGenres() {
    const apiUrl = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`
    try {
        const res = await fetch(apiUrl, {method: "GET"});
        const data = await res.json();
        return data
    } catch(err) {
        return err
    }
}

async function getFavMovie() {
    const apiUrl = `https://api.themoviedb.org/3/find/tt0075148?api_key=${API_KEY}&external_source=imdb_id`
    try {
        const res = await fetch(apiUrl, {method: "GET"});
        const data = await res.json();
        return data
    } catch(err) {
        return err
    }
}

async function getTopRatedMovies() {
    const apiUrl = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&external_source=imdb_id`
    try {
        const res = await fetch(apiUrl, {method: "GET"});
        const data = await res.json();
        return data
    } catch(err) {
        return err
    }
}

async function getTopRatedByGenreMovies() {
    const apiUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=28&sort_by=vote_average.desc`
    try {
        const res = await fetch(apiUrl, {method: "GET"});
        const data = await res.json();
        return data
    } catch(err) {
        return err
    }
}

async function getTopRatedIn1975Movies() {
    const apiUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&year=1975`
    try {
        const res = await fetch(apiUrl, {method: "GET"});
        const data = await res.json();
        return data
    } catch(err) {
        return err
    }
}

