let squared = function(num1, num2) {
    let totalTogether12 = (num1 * num1) + (num2 * num2)
    return totalTogether12 
}
console.log(squared(3,5))

function squared2(num3, num4) {
    let totalTogether34 = (num3 * num3) + (num4 * num4)
    return totalTogether34
}
console.log(squared2(3,5))

let squared3 = (num5, num6) => (num5 * num5) + (num6 * num6)

console.log(squared3(3,5))