let naam = prompt("Hallo, welkom! Wat is je naam?")

alert("Hi " + naam)

alert("We gaan raden tussen 2 getallen & jij mag bepalen tussen welke 2")

let min = parseInt (prompt ("Vul het eerste getal in"))
let max = parseInt (prompt ("Vul het tweede getal in"))

let raad = parseInt (prompt("Voer een nummer in tussen de " + min + " en " + max + " om te raden"))

for (let i = 4 ; i >= 0; i--) {

    let getal = Math.floor(Math.random() * (max - min + 1)) + min
    
    if (raad == getal) {
        alert("Gefeliciteerd je hebt gewonnen!")
        break
    }
    else if(i == 0){
        alert("Niet correct, je mag niet meer raden")
    }
    else {
        prompt("Niet correct, je mag nog " + i + " keer raden, het was " + getal)
    } 
}
alert("Bedankt voor het spelen " + naam + ", wellicht tot een volgende keer")
