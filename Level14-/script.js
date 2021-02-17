let paintWalls = function() {
    console.log("The wall has been painted red")
}

paintWalls()

let paintWalls2 = function(color) {
    console.log("The wall has been painted " + color )
}

paintWalls2("green")
paintWalls2("purple")

let paintWalls3 = function(area, color) {
    console.log(" The " + area +  " wall has been painted " + color )
}
paintWalls3("north", "green")
paintWalls3("east", "pink")