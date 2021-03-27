const moviesList = document.getElementById("movies-list");

const addMoviesToDom = function(movie) {
  
  const array = movie.map(function(movie) {
      const movieWebpage = "https://www.imdb.com/title/" + movie.imdbID;
      return (
          "<li class='movie-list-item'><a href=" + movieWebpage + "><img src=" + movie.Poster + " alt=''></a></li>"
      );
  });
  array.forEach(function(movie) {
  moviesList.innerHTML += movie;
  });
};

addMoviesToDom(movies)

const addEventListeners = function () {
  const buttons = document.querySelectorAll("input[name='filter']")
  buttons.forEach(function(item) {
    item.addEventListener("change", function (event) {
        handleOnChangeEvent(event.target.value)
        console.log(event.target.value)
    })
  })
}

addEventListeners()

const handleOnChangeEvent = (filt) => {
  switch(filt) {
    case "new-movies": filterLatestMovies();
    console.log("yes hij doet het New")
      break;
    case "avengers": filterMovies("Avengers");
     console.log("yes hij doet het Avengers")
      break;
    case "xmen": filterMovies("X-Men");
     console.log("yes hij doet het X-men")
      break;
    case "princess": filterMovies("Princess");
     console.log("yes hij doet het Princess")
      break; 
    case "batman": filterMovies("Batman");
     console.log("yes hij doet het Batman")
      break;
    case "all-movies": filterAllMovies("All movies");
     console.log("yes hij doet het All")
      break;   
  }
}

const filterLatestMovies = function() {
  const resultLatestMovies = movies.filter(function (movie) {
      return parseInt(movie.Year) >= 2014;
  });
  console.log(resultLatestMovies)
  clearList();
  addMoviesToDom(resultLatestMovies);
};


const filterMovies = function(e) {
  const resultFilterMovies = movies.filter(function (movie) {
      return movie.Title.includes(e)
  });
  console.log(resultFilterMovies)
  clearList();
  addMoviesToDom(resultFilterMovies);
};

const clearList = function() {
  const movieListItems = document.querySelectorAll('.movie-list-item');
  movieListItems.forEach(movie => movie.remove());
};

const filterAllMovies = () => {
  clearList();
  addMoviesToDom(movies);
};

const radioItems = document.querySelectorAll(".radio-item");

radioItems.forEach(link => {
  link.addEventListener("click", function(){
    radioItems.forEach(btn => btn.classList.remove("active"));
    this.classList.add("active");
  })
})

