function getSquared (num1, num2) {
    num1 *= num1;
    num2 *= num2;
    result = num1 + num2;
    return result *= result;
}

const getSquared2 = function(num1, num2) {
    num1 *= num1;
    num2 *= num2;
    result = num1 + num2;
    return result *= result;
};

const getSquared3 = (...nums) => {
    result = 0; 
    nums.forEach(num => {
        result += num * num;
    })
    return result * result;
};

const square = number => number * number;

const getSquared4 = (num1, num2) => square(square(num1) + square(num2));

console.log(getSquared(2, 2));
console.log(getSquared2(2, 2));
console.log(getSquared3(2, 2));
console.log(getSquared4(2, 2));