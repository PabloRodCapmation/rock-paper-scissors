//computer has 3 options
var gameOptions = [
    'Rock',
    'Paper',
    'Scissors'
];
//computer chooses randomly between this options
function computerPlay(){
var randomOption = gameOptions[Math.floor(Math.random()*gameOptions.length)];
return randomOption;
}
//output the result

let playerSelection = 'Rock';
console.log(playerSelection);
let computerSelection 

function playRound (playerSelection, computerSelection) {
    computerSelection = computerPlay();
    console.log (computerSelection);
    if (computerSelection === playerSelection ) {
    return 'empate';
    } else if (computerSelection === 'Scissors' ) {
        return 'Ganaste, Rock destruye Scissors';
    } else if (computerSelection === 'Paper' ) {
        return 'Perdiste, Paper tapa Rock'
    } else {
        return "error"
    }
}

function game() {
    for ( let i=1; i<=5; i++){
        let intento = playRound(playerSelection,computerSelection)
        console.log( 'Juego' + ' ' + i + ' - ' + intento);
    }
}

console.log(game());