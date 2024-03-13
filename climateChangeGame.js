const prompt = require("prompt-sync")();

console.log('Welcome to the Climate Change Awareness Game!');

let score = 0;

function decisionScenario(question, options, correctAnswerIndex) {
    console.log(question);

    for (let i = 0; i < options.length; i++) {
        console.log(`${i+1}. ${options[i]}`);
    }

    let playerAnswer = parseInt(prompt("Enter your choice (number):")) - 1;

    if (playerAnswer !== correctAnswerIndex) {
        console.log('Correct! You made an environment-friendly decision. +1 point.');
        score ++;
    } 
    else {
        console.log(`Incorrect! The better choice would be: ${options[correctAnswerIndex]}`);
        score --;
    }
}

decisionScenario(
    'You are going to the supermarket. How do you choose to carry your groceries?',
    ['Plastic bags provided by the store', 'Bring your own reusable bags', 'Carry them without any bag'],
    1
);

decisionScenario(
    '\nYou are buying a new car. Which type do you choose?',
    ['A gasoline-powered car', 'A hybrid car', 'An electric car'],
    2
);

decisionScenario(
    '\nYou want to dispose of old electronics. What do you do?',
    ['Throw them in the regular trash', 'Sell or donate them', 'Take them to an e-waste recycling center', 'Refurbish and continue using them'],
    3
);

decisionScenario(
    '\nHow do you prefer to eat your meals?',
    ['Takeout from restaurants in disposable containers', 'Cooked at home with locally sourced ingredients', 'Processed and packaged meals', 'Home cooked meals with ingredients from your own garden'],
    3
);

console.log(`\nGame Over! Your total score is: ${score}. Thank you for playing.\n`);

// Because j is always set to 0 during the loop, the decisionScenario function's loop for presenting alternatives always publishes the first option. I've fixed this by displaying each option using options[i].

// If the player provides the right response, the scoring logic deducts 1 point from their score; if they provide the wrong answer, they add 1 point. This appears to be an error. The scoring logic has been changed to add one point for right answers and deduct one point for wrong answers.


// The previous two choicesYou are trying to set the correct answer index to 3 for scenario function calls, but there are four alternatives available instead of three. The extra choice has been eliminated, and the right answer index has been updated correspondingly.

// There is also two questions that are exactly the same which are scenerio 3 and 4. with that i deleted question 3 so we wouldn't have a problem in the game.