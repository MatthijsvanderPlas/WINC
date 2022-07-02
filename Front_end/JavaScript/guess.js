const { exit } = require('process');

let mark = 0;

while (mark === 0) {
    mark = Math.round(10* Math.random());
}

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

const askQuestion = function() {

    readline.question('Guess the number! (1-9)' , guessNumber => {
        if (guessNumber == mark) {
            console.log("You win")
            exit();
        } else {
            console.log("Try again!")
            askQuestion();
        }    
    });
};

askQuestion();