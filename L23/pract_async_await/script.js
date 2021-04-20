const showMovieGenres = async function() {
    const genreList = document.getElementById('genre_list')
    const data = await getMovieGenres()
    console.log(data)
    data.genres.forEach((movies) => {
        const li = document.createElement("li")
        const liInfo = document.createTextNode(
            `genre naam: ${movies.name}, id: ${movies.id}`
        );
        li.appendChild(liInfo)
        genreList.append(li)
    }
    )
}

showMovieGenres()

const showFavMovie = async function() {
    const favMovie = document.getElementById('fav_movie')
    const data = await getFavMovie()
    console.log(data)
    const movie = data.movie_results[0]
    const li = document.createElement("li")
    const liInfo = document.createTextNode(
        `favarite movie: ${movie.title}`
    );
    li.appendChild(liInfo)
    favMovie.append(li)
}
showFavMovie()

const showTopRatedMovies = async function() {
    const topRated = document.getElementById("top_rated")
    const data = await getTopRatedMovies()
    const showTen = data.results.splice(10)
    console.log(data)
    showTen.forEach((movies) => {
        const li = document.createElement("li")
        const liInfo = document.createTextNode(
            `${movies.title}`
        )
        li.appendChild(liInfo)
        topRated.append(li)
    }
    )
}

showTopRatedMovies()

const showTopRatedByGenreMovies = async function() {
    const topRated = document.getElementById("top_genre")
    const data = await getTopRatedByGenreMovies()
    const showTen = data.results.splice(10)
    console.log(showTen)
    showTen.forEach((movies) => {
        const li = document.createElement("li")
        const liInfo = document.createTextNode(
            `${movies.title}`
        )
        li.appendChild(liInfo)
        topRated.append(li)
    }
    )
}

showTopRatedByGenreMovies()

const showTopRatedIn1975Movies = async function() {
    const topRated = document.getElementById("top_1975")
    const data = await getTopRatedIn1975Movies()
    const showTen = data.results.splice(10)
    console.log(showTen)
    showTen.forEach((movies)=> {
        const li = document.createElement("li")
        const liInfo = document.createTextNode(
            `${movies.title}`
        )
        li.appendChild(liInfo)
        topRated.append(li)
    })
}
showTopRatedIn1975Movies()