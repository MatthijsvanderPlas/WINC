/*
Exercise 1:
Write a function testNum that takes a number as an argument and returns a Promise that tests if the value is less than or greater than the value 10. Log the result to the console.
*/

const testNum = (num) => {
    return promise = new Promise((resolve, reject) => {
        if (num >= 10) {
            resolve(num + ' is greater or equal to 10');
        } else {
            reject(num + ' is smaller then 10');
        }
    });
};

testNum(9)
    .then(result => console.log(result))
    .catch(error => console.log(error));

testNum(11)
    .then(result => console.log(result))
    .catch(error => console.log(error));

/*
Exercise 2:
Write two functions that use Promises that you can chain! The first function, makeAllCaps(), will take in an array of words and capitalize them, and then the second function, sortWords(), will sort the words in alphabetical order. If the array contains anything but strings, it should throw an error.
Then call these functions by *chaining* the promises
*/

function makeAllCaps(array) {
    return new Promise((resolve, reject) => {
        if (array.every(i => (typeof i === 'string'))) {
            resolve(
                sortWords(
                    array.map(word => word.toUpperCase())
            ))
        } else {
            reject('Array is not valid (does not contain only strings)')
        }
    })
 }  


const sortWords = words  => {
    return new Promise((resolve,reject) => {
        if (words){
            resolve(words.sort());
        } else {
            reject('Only strings can be used')
        }
    })
};

const arrayOfWords = ['cucumber', 'tomatos', 'avocado'];
const complicatedArray = ['cucumber', 44, true];

makeAllCaps(arrayOfWords)
    .then(result => console.log(result))
    .catch(err => console.log(err));

makeAllCaps(complicatedArray)
    .then(res => console.log(res))
    .catch(err => console.log(err))

// call both functions, chain them together and log the result to the console