// let movie = {
//     title: "Verliefd op Ibiza",
//     duration: 135,
//     artists: ["Jim Bakkum", "Armin van Buuren" , "Jan Kooijman", "Kim Feenstra"]
// }
// function print(film) {
//     console.log(movie.title + ' duurt ' + movie.duration + ' minuten ' + ' met de volgende artiesten: ' + movie.artists)
// } 
// print(movie)

const myFavMovie = {
    title: "Puff the Magic Dragon",
    duration: 220,
    stars: ["Puff", "Jackie", "Living Sneezes"]
  };
  
//   // De oplossing met een for loop
//   const printMovie1 = function(movie) {
//     console.log(movie.title + " lasts for " + movie.duration + " minutes");
//     let starsString = "Stars: ";
//     for (let i = 0; i < movie.stars.length; i++) {
//       starsString += movie.stars[i];
//       // Uigebreide syntax: starsString = starsString + movie.stars[i]
//       if (i !== movie.stars.length - 1) {
//         starsString += ", ";
//       }
//     }
//     console.log(starsString);
//   };
  
  // De oplossing met een array.join
  const printMovie2 = function(movie) {
    console.log(movie.title + " lasts for " + movie.duration + " minutes");
    console.log("It stars: " + movie.stars.join(", "));
  };
 
  printMovie2(myFavMovie);
  