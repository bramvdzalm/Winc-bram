// const nummers = ['hoi', 10, true]
// 
// nummers.push = 'dinsdag' // toevoegen aan een array, als laatste
// 
// nummers.unshift('grapjas') // toevoegen aan een array, komt 1ste te staan
// 
// nummers.pop() // Laatste uit een Array verwijderen
// 
// console.log(Array.isArray)
// 
// console.log(nummers)
// 
// console.log(nummers.indexOf(10)) // positie in een Array
// 

// const person = {
//     vnaam: 'bram',
//     anaam: 'zalm',
//     lt: 32,
//     hobbies: ['muziek', 'films', 'voetbal'],
//     adres: {
//         straat: 'rdoedoensstraat',
//         nummer: 23,
//         plaats: 'Noordwijk'
//     }
// }
// console.log(person.adres.straat)
// 
// 
// const personen = [{
//     no: 1,
//     naam: 'gert',
//     klaar: true
// },
// {
//     no: 2,
//     naam: 'jan',
//     klaar: true
// },
// {
//     no: 3,
//     naam: 'klaas',
//     klaar: false
// }]
// 
// // for (let i = 0; i <= 10; i++) {
// //     console.log(i)
// // }
// // 
// // let i = 0
// // while(i < personen.length) {
// //     console.log(personen[i])
// //     i++
// // }
// 
// // for(let num of nummers) {
// //     console.log(num)
// // }
// 
// 
// // personen.forEach(function(hoi) {
// //     console.log(hoi.klaar)
// // })
// 
// const todoText = personen.filter(function(hoi) {
//     return hoi.klaar == true
// }).map(function(hoi) {
//     return hoi.naam;
// })
// 
// console.log(todoText);

// const x = 11;
// 
// if (x == 10) {
//     console.log('het is gelijk')
// }
// else if(x < 10) {
//     console.log('het is lager dan 10')
// }
// else {
//     console.log('hoger dan 10')
// }

// const tien = 11
// 
// const color = tien > 10 ? 'red' : 'yellow'
// 
// switch(color) {
//     case 'red':
//         console.log('the color is red')
//         break;
//     case 'yellow':
//         console.log('the color is yellow')
//         break;
//     default:
//         console.log('both not red or yellow')
//         break
// }

// function add(num1, num2) {
//     return num1 * num2
// }
// 
// console.log(add(4, 8))

// constructor function//
// function persoon(voornaam, achternaam, woonplaats, date) {
//     this.voornaam = voornaam;
//     this.achternaam = achternaam;
//     this.woonplaats = woonplaats;
//     this.date = new Date(date)
//     this.getBirthYear = function () {
//         return this.date.getFullYear()
//     }
// }
// const persoon1 = new persoon('bram', 'zalm', 'noordwijk', '10-8-1988');
// const persoon2 = new persoon('john', 'steen', 'Grashoek', '10-22-1989')
// 
// console.log(persoon2.getBirthYear())
