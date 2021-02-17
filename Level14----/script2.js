let priceInc = function(basePrice, vatPercentation) {
    let sumVat = vatPercentation / 100 + 1
    return basePrice * sumVat
}


let calculation = function() {
    let price = priceInc(5, 21)
    console.log(price)
}

calculation()


let priceInc2 = function(price1) {
    let priceEx = price1 / 1.21
    let vat = price1 - priceEx
    return [priceEx, vat]
}

let calculation2 = function() {
    let seperate = priceInc2(121)
    console.log(seperate)
}

calculation2()


