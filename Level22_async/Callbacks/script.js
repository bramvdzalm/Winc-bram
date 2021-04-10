function huiswerkMaken(vak, callback) {
    console.log(`Ok, ok, ik ga nu mijn ${vak} huiswerk maken`)
    setTimeout (function() {      
        callback();
}, 2000)
}
function klaarMetHuiswerk() {
    console.log(`Kijk paps en mams, ik ben klaar met huiswerk`)
}

huiswerkMaken('wiskunde', klaarMetHuiswerk);

