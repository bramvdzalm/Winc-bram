// const sinterklaasIsGul = true;
// 
// // Promise maken (dit hoeven jullie dus niet te leren, dit is aan de API (back-end) kant)
// const krijgIkEenNieuweiPhone = new Promise(
//     (resolve, reject) => {
//         if (sinterklaasIsGul) {
//             const smartphone = {
//                 merk: 'Apple',
//                 type: 'iPhone 11'
//             };
//             resolve(smartphone);
//         } else {
//             const metWelkeReden = new Error('Je bent stout geweest, geen cadeaus voor jou');
//             reject(metWelkeReden);
//         }
// 
//     }
// );
// 
// // Promise aanroepen, of "consumeren" (dit zullen je dus wel doen en moeten leren)
// const vraagAanSinterklaas = () => {
//     krijgIkEenNieuweiPhone
//         .then(function (resolved) {
//             // yay, je hebt een nieuwe smartphone
//             console.log(resolved);
//         })
//         .catch(function (error) {
//             // oeps, geen Sinterklaas cadeau dit jaar
//             console.log(error.message);
//         });
// }
// 
// vraagAanSinterklaas();

const testNum = function(num) {
    return new Promise((resolve, reject) => {
        if (num > 10) {
            resolve(num + ' is groter dan 10')
        } else {
            reject(num + ' is kleiner dan 10')
        }
    })
}
testNum(9)
    .then(result => console.log(result))
    .catch(error => console.log(error));

testNum(15)
    .then(result => console.log(result))
    .catch(error => console.log(error));

const makeAllCaps = function(words) {
    return new Promise ((resolve, reject) => {
    if (words.every(word => {
        return typeof word === 'string'
    })){
        resolve(words.map(word => {
            return word.toUpperCase()
        })
    )
} else {
    reject('not a string')
}
    })
}

const sortWords = function(words) {
    return new Promise ((resolve, reject) => {
        if (words) {
        resolve (words.sort())
        } else {
            reject('strings only')
        }
    })
}

const woorden = ['auto', 'vlieger', 'schoenen']
const geenWoorden = [4, false, 'ruimte']

makeAllCaps(woorden)
    .then(sortWords(woorden))
    .then(result => console.log(result))
    .catch(error => console.log(error))

makeAllCaps(geenWoorden)
  .then(sortWords(geenWoorden))
  .then(result => console.log(result))
  .catch(error => console.log(error));