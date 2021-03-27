
    // let getal = function (min, max) {
    //     let nummer = Math.round((Math.random() * max) + min);
    //     while (nummer > max) {
    //         nummer = Math.round((Math.random() * max) + min);
    //     }
    //     return nummer;
    // } 

function range(min, max) {
 return Math.floor( (Math.random() * (max - min) ) + min );
    
}
// return range;

    console.log(range(88, 92));
