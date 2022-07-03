Simple Guess the number game:

Requirements

These are the requirements that your project should fulfill:

    As a user, I want an introductory message that greets the user and asks for their name. "Welcome! What is your name?"
    As a user, I want to be able to enter my name and click enter.
    As a user, after I entered my name, I want to see a message: "Hey [name]"
    As a user, after the greeting with my name, I want to be asked for a new input with a digit. For example: "Enter a number between 0 and 25 to start guessing..."
    As a game developer, I want the user to have a realistic chance to win, therefore I take a random number between 0 and 25. Hint: use Math.random()
    As a user, I want to be able to enter a number and click enter.
    As a user, I want to receive a message when I guessed the wrong number, for example: "Unfortunately, that is not correct!". Afterward, I want to be asked to guess again.
    As a user, I want to receive a message when I guess the right number, for example: "Congratulations, you have won the game!". The game is now finished.
    As a user, I want to receive a message when the game is done, for example: "Bye [name], see you!"

Bonus

    A user gets a maximum of five tries to guess the number.
        As a user, I want to see how many tries I have left after every attempt.
        As a user, I want to receive a message when I have run out of tries. The game is now finished.
    A user can specify the range between the random number that will be chosen.
        As a user, at the start of the game, I want to be asked which is the smallest and which is the largest number to guess.
        As a user, I now play with the number range that I entered at the start of the game.

I think it turned out pretty ok. Could do with refactoring, since there is still some recurring code. 

You cant opt out of the alert/prompts before playing the game only at the end (win or loose) can you decide to cancel and stop it running. 

I feel that I have learned a good amount on making this and believe that any extra effort to enhance the game at this stage is not worth the effort I would be putting in. In the future I will be moving to bigger, bettter and smarter way of doing things (async await, react etc.) I might revisit and upgrade the game.