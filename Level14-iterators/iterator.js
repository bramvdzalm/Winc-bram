const colors = ["yellow", "blue", "red", "orange"]

// let i = 0 
// // while (i < colors.length) {
//     console.log(colors[i])
//     i++;
// }
// for (let x = 0; x <colors.length; x++) {
//     console.log(colors[x])
// }

colors.forEach(Element => console.log(Element))

// 1 de Whileloop neemt 5 regels in beslag
// 2 De ForEach method neemt 1 regel in beslag
// 3 Je gebruikt minder code en daarom is het overzichtelijker.
// 4

let persoon = {
    voornaam: "Bram",
    achternaam: "Zalm",
    woonplaats: "Noordwijk",
    geslacht: "Man",
    Leeftijd: "32",
}

for (x in persoon) {
    console.log(persoon[x])
}