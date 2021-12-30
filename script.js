const pcChoiceDisplay = document.getElementById('pc-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');
const possibleChoices = document.querySelectorAll('button');
const finalResultDisplay = document.getElementById('final-result');

const choices = ['Rock', 'Paper', 'Scissors']


let userChoice
let pcChoice
let result

let userScore = 0
let pcScore = 0

const userScoreDisplay = document.querySelector('#user-score');
userScoreDisplay.textContent = `Your score: ${userScore}`;

const pcScoreDisplay = document.querySelector('#pc-score');
pcScoreDisplay.textContent = `PC Score: ${pcScore}`;

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice
    generatePcChoice();
    getResult();
    finalResult();
}))

const generatePcChoice = () => {
    pcChoice = choices[Math.floor(Math.random() * choices.length)];
    pcChoiceDisplay.innerHTML = pcChoice;
}


function getResult() {
    if (pcChoice === userChoice) {
        result = 'It\'s a draw';
    } else if (pcChoice === 'Rock' && userChoice === 'Scissors' || pcChoice === 'Paper' && userChoice === 'Rock' || pcChoice === 'Scissors' && userChoice === 'Paper') {
        result = 'You Loose';
        pcScore++;
    } else {
        result = 'You Win';
        userScore++;
    }
    userScoreDisplay.textContent = `Your score: ${userScore}`;
    pcScoreDisplay.textContent = `PC Score: ${pcScore}`;
    resultDisplay.innerHTML = result
}

function finalResult() {
    if (pcScore === 5) {
        finalResultDisplay.textContent = `Perdiste todo todo todo`;
        console.log(finalResultDisplay);
        disableButtons();
    }

    if (userScore === 5) {
        finalResultDisplay.textContent = `Lo Ganaster todo baby`;
        disableButtons();
    }
}

function disableButtons() {
    possibleChoices.forEach(elem => {
        elem.disabled = true
    })
}