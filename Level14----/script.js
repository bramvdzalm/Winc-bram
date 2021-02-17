let adult = function(age) {
    if (age >= 18){
        return "true"
    }
    return "false"  
}

let adult2 = function() {
    if (adult2 === "true") {
        return "Hellow there"
    }
    return "Kiddo"  
}

let practice = function(age) {
    let total = adult(age)
    let result = adult2(total)
    return result
}

practice(20)
