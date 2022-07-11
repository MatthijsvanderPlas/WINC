const checkBiggerThenHundred = (num) => {
    return (num > 100);
}

console.log(checkBiggerThenHundred(101));
console.log(checkBiggerThenHundred(99));
console.log(checkBiggerThenHundred(-50));
console.log(checkBiggerThenHundred(251));


const bouncerBrenda = (max, current, age) => {
    if (age < 18) return "this is a club for aduts"
    if (current >= max) return "it's too busy now, come back later"
    return "come in"
}

console.log(bouncerBrenda(45, 50, 21));
console.log(bouncerBrenda(50, 15, 21));
console.log(bouncerBrenda(50, 2, 17));

const calcAverage = (...nums) => Math.round(nums.reduce((a, b) =>  a + b) / nums.length);

console.log(calcAverage(1,2,3,4,2));
console.log(calcAverage(20,4,91,124,2));
console.log(calcAverage(10,9,8,5,6));