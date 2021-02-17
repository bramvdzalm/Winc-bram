let calculate = function (num1, num2, num3, num4, num5){
    let total = num1 + num2 + num3 + num4 + num5
    let average = Math.round(total / calculate.length)
    return average
}
console.log(calculate(2, 4, 6, 8, 10))
console.log(calculate(15, 10, 1, 100, 25))
console.log(calculate(0.15, 16, 1.25, 6.69, 5))

// this function produce something