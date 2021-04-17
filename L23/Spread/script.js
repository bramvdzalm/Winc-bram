const summ = function(...tot) {
    return tot.reduce((prev,cur) => {
        return prev + cur;
    })
}

console.log(summ(1,4,5,6));


const sum = function(...args) {
    return args.reduce((acc,item) => {
            return acc + item;
    })
}

console.log(sum(1,2,3,4,5,6))



function sum2(s1, s2, s3) {
    return s1 + s2 + s3;
}

const cijfers = [1, 2, 3]

console.log(sum2(...cijfers))