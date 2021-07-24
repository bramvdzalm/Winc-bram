const maxEight = pass => notNull(pass) && pass.length <= 8;
const notNull = pass => pass !== null;
const upperCase = pass => notNull(pass) && pass.toLowerCase() !== pass;
const lowerCase = pass => notNull(pass) && pass.toUpperCase() !== pass;
const numbers = pass => /\d/.test(pass)

const minimunConditions = conditions => {
    conditions = conditions.filter(bool => bool)
    return conditions.length >= 3
}

const verifyPassword = pass => {
    const total = [
        notNull(pass), 
        maxEight(pass), 
        upperCase(pass), 
        lowerCase(pass), 
        numbers(pass)
    ];
    const result = minimunConditions(total) && lowerCase(pass)
    return result
}

module.exports = {verifyPassword, maxEight, notNull, upperCase, lowerCase, numbers, minimunConditions }

