const add = (element) => {
    const div = document.getElementById("main");
    div.appendChild(element);
}

const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max) + 1;
    return Math.floor(Math.random()* (max - min) + min); 
}

const getUsername = () => {
    const username = prompt(`Welcome! what is your name?`);
    return username;
}

const getRange = () => {

    const smallest = prompt(`Please specify the range of numbers, first the smallest!`);

    const largest = prompt(`And now the largest!`);

    return [parseInt(smallest), parseInt(largest)];
}

const getGuess = () => {
    const guess = prompt(`Take a guess at the number?`);
    return guess;
}

const checkRangeInput = (smallest, largest) => {
    console.log(typeof(smallest));
    if ((smallest != null && largest != null) && (typeof(smallest) == 'number' && typeof(largest) == 'number')) {
        const range = document.createElement('p');
        range.textContent = `You are playing with a number range of [${smallest} - ${largest}]`;
        add(range);
    } else {
        alert('The values you entered are not correct! Please insert only integer numbers')
        const [smallest, largest] = getRange();
        checkRangeInput(smallest, largest);
    }
}

const checkGuess = (guess, randomInt) => parseInt(guess) === parseInt(randomInt) ? console.log(`You win! ${randomInt, typeof(randomInt)}`) : console.log(`You loose! ${randomInt, typeof(randomInt)}`);
  

const guessing = (randomInt) => {
    const guess = getGuess();
    const check = checkGuess(guess, randomInt);
}


let randomInt = 0;
let tries = 5;

const runGame = () => {

    const username = getUsername();

    if (username != null) {
        const greeting = document.createElement('p');
        greeting.textContent = `Hey! ${username} lets play a game of guess the number!`;
        add(greeting);
    }

    const [smallest, largest] = getRange();
    checkRangeInput(smallest, largest);

    randomInt = getRandomInt(smallest, largest);
    guessing(randomInt);
}

runGame()

// still to do 
// Implement tries with an Alert message
// keep an array of guessed numbers
// keep asking to guess the number until tries run out.
// display everything on the page