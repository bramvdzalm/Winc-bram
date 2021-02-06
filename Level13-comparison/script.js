const age = 17;
const isFemale = true;
const driverStatus = "rob";
const name = "Bram";
const totalAmount = 55;

if (age > 17) {
    console.log("jij mag naar binnen!")
 } else { 
    console.log("jij mag niet naar binnen, je bent te jong ")
 }

 if (isFemale) {
     console.log("jij bent een madame")
 } else {
     console.log("helaas, je bent geen madame")
 }

 if (driverStatus == "bob") {
     console.log("jij mag naar huis rijden")
 } else {
     console.log("je mag niet rijden, bel een taxi")
 }
 if (age >= 17 && age <= 25) {
    console.log("Je krijgt 50% korting!")
 } else { 
    console.log("Geen korting voor jou")
 }
if (name === "Sarah" || name === "Bram") {
    console.log("jij krijgt gratis bier")
} else {
    console.log("jammer voor jou, geen gratis bier")
}
if (totalAmount > 100) {
    console.log("Gratis fles champagne")
} else if (totalAmount > 50) {
    console.log("Gratis portie nacho's")
} else if (totalAmount > 25) {
    console.log("Gratis portie bitterballen")
} else {
    console.log("Bestel voor 25 euro of meer voor een gratis portie bitterballen, 50 euro of meer voor een gratis portie nacho's of 100 euro of meer voor een gratis fles champagne")
}