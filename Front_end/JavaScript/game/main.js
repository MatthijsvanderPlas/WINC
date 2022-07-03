let randomInt = 0;

const addElement = (element) => {
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
    if (username) {
        return username;
    } else getUsername();
}

const getRange = () => {

    const smallest = prompt(`Please specify the range of numbers, first the smallest!`);
    if (smallest) {
        const largest = prompt(`And now the largest!`);
        if (largest) {
            return [parseInt(smallest), parseInt(largest)];
        }
    }else getRange();
}

const getGuess = () => {
    const guess = prompt(`Take a guess at the number?`);
    if (guess) {
        return guess;
    } else getGuess();
    
}

const checkRangeInput = (smallest, largest) => {
    if ((smallest != null && largest != null) && (typeof(smallest) == 'number' && typeof(largest) == 'number')) {
        const range = document.createElement('p');
        range.textContent = `You are playing with a number range of [${smallest} - ${largest}]`;
        addElement(range);
    } else {
        alert('The values you entered are not correct! Please insert only integer numbers')
        const [smallest, largest] = getRange();
        checkRangeInput(smallest, largest);
    }
}

const checkGuess = (guess, randomInt, tries = 5, guessedArray = []) => {
    guessedArray.push(guess)

    if (parseInt(guess) === parseInt(randomInt)) {
        const message = confirm(`You win! the number was ${randomInt}\nPlay again?`)
        if (message) {
            runGame();
        } else return;

    } else {
        tries -= 1;
        if (tries === 0 || tries < 0) {
            const lives = document.querySelector('.lives');
            lives.innerHTML = `Wrong number! Tries left: ${tries}<br /> Guessed: [ ${guessedArray} ]`;
            const lost = confirm('No more tries left, sorry!\nPlay again ?');
            if (lost) {
                runGame();
            } else return;
        }

        if(document.querySelector('.lives')) {
            const lives = document.querySelector('.lives');
            lives.innerHTML = `Wrong number! Tries left: ${tries}` + "<br />" + ` Guessed: [ ${guessedArray} ]`;
        } else {
            const lives = document.createElement('p');
            lives.innerHTML = `Wrong number! Tries left: ${tries}`+ "<br />" +` Guessed: [ ${guessedArray} ]`;
            lives.classList.add('lives');
            addElement(lives);
        }
        guessing(randomInt, tries, guessedArray);
    }
}
  

const guessing = (randomInt, tries = 5, guessedArray = []) => {
    const guess = getGuess();
    checkGuess(guess, randomInt, tries, guessedArray);
}

const clearPage = () => {
    const container = document.querySelector('.container');
    container.innerHTML = '';
}

const runGame = () => {

    clearPage();

    const username = getUsername();

    if (username != null) {
        const greeting = document.createElement('p');
        greeting.textContent = `Hey! ${username} lets play a game of guess the number!`;
        addElement(greeting);
    }

    const [smallest, largest] = getRange();
    checkRangeInput(smallest, largest);

    randomInt = getRandomInt(smallest, largest);
    guessing(randomInt);
}

runGame()