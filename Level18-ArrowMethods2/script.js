// const superheroes = [
//     {name: "Batman", alter_ego: "Bruce Wayne"}, 
//     {name: "Superman", alter_ego: "Clark Kent"}, 
//     {name: "Spiderman", alter_ego: "Peter Parker"}]
//     
//     let findSpiderman = superheroes.find((item) => {
//         return item.name === "Spiderman"
//     })  
//     console.log(findSpiderman) 

// 
// let numbers = [1, 2, 3]
// 
// numbers.forEach((item) => {
//     console.log(item * 2)
// })


// let biggerThenTen = function(array) {
//     return array.some(number => {
//         return number > 10
//     })
// }
// console.log("is there some number bigger then ten?", biggerThenTen([1, 4, 3, 6, 9, 7, 11]))


// let isItalyInTheGreat7 = function(array) {
//     return array.includes("Italy")
// }
// console.log("Italy, are you there?", isItalyInTheGreat7(['Canada', 'France','Germany','Italy','Japan','United Kingdom','United States'])) 

// 
// let tenfold = function(array) {
//     let newArray = []
//     array.forEach(element => {
//         newArray.push(element * 10)
//     });
//     return newArray
// }
// 
// console.log("some number iterate 10", tenfold([1, 4, 3, 6, 9, 7, 11]))
// 
// let isBelow100 = function(array) {
//     return array.every(number => {
//         return number < 100
//     })
// }
// 
// console.log(isBelow100([1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 101, 11, 77, 84, 98 ]))
// 
// 
// 
// let allNumbers = [1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 11, 77, 84, 98, 101, 206, 234]
// 
// let total = allNumbers.reduce((current, items) => {
//     return items + current
// })
// 
// console.log(total)

