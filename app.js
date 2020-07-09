


// import functions and grab DOM elements
import { countsAsAYes } from './utils.js';
const quizButton = document.getElementById('quiz-button');

// initialize state

// set event listeners to update state and DOM
quizButton.addEventListener('click', () => {
    const firstName = prompt("What's your first name?");
    const lastName = prompt("What's your last name?");
    const fullName = firstName + ' ' + lastName;

    const really = confirm('Do you really want to test your derby knowledge?');
    if (!really) return;

    const derbyHistory = prompt('Are the Wheels of Justice ranked number one in the world? (yes or no)');

    const howToPlay = prompt('Can the pivot become the jammer? (yes or no)');

    const gnarWallsFav = prompt('Does Braun Swanson have a sibling named Bald Eagle? (yes or no)');
    
    let score = 0;
    if (countsAsAYes(derbyHistory)) {
        score++;
    }
        
    if (countsAsAYes(howToPlay)) {
        score++;
    }
        
    if (!countsAsAYes(gnarWallsFav)) {
        score++;
    }
    
    let response = '';

    if (score > 1) {
        response = `Congratualations ${fullName}! You're ready to roll!`;
    } else {
        response = `OH NO ${fullName}! You're headed to the penalty box! Read up and take the quiz again!`;
    }
    quizButton.textContent = response;
    
});