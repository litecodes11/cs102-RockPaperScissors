function playGame(playerChoice) {
    const computerChoice = getComputerChoice();
    const winner = determineWinner(playerChoice, computerChoice);
    displayResult(winner, playerChoice, computerChoice);
}

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

function determineWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return 'It\'s a tie!';
    }

    if (playerChoice === 'rock') {
        return computerChoice === 'scissors' ? 'You win!' : 'Computer wins!';
    } else if (playerChoice === 'paper') {
        return computerChoice === 'rock' ? 'You win!' : 'Computer wins!';
    } else {
        return computerChoice === 'paper' ? 'You win!' : 'Computer wins!';
    }
}

function displayResult(winner, playerChoice, computerChoice) {
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `You chose ${playerChoice}, computer chose ${computerChoice}. <strong>${winner}</strong>`;
}