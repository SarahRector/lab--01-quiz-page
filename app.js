// import functions and grab DOM elements
const quizButton = document.getElementById('quiz-button');

// initialize state

// set event listeners to update state and DOM
quizButton.addEventListener('click', () => {
    const firstName = prompt("What's your first name?");
    name = firstName;

    const lastName = prompt("What's your last name?");
    name = name + ' ' + lastName;

    const derbyHistory = prompt("Are the Wheels of Justice ranked number one in the world? (yes or no)");

    const howToPlay = prompt("Can the pivot become the jammer? (yes or no)");

    const gnarWallsFav = prompt("Does Braun Swanson have a sibling named Bald Eagle? (yes or no)");
    console.log(gnarWallsFav);
});