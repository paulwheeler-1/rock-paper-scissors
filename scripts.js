function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3); 
    let compChoice

    if (choice == 0) {
        compChoice = 'rock'
    } else if (choice == 1) {
        compChoice = 'paper'
    } else if (choice == 2) {
        compChoice = 'scissors'
    }
    return compChoice
}

/*function validPlayerChoice(playerChoice) {
    let playervalidChoice = playerChoice.toLowerCase()
    console.log(playervalidChoice)

   // if (playervalidChoice != 'rock' ||
   // playervalidChoice != 'paper' ||
    //playervalidChoice != 'scissors') {
   // throw new Error('Invalid Input') }

   // need to add error handling

    return playervalidChoice
}*/

function playRockPaperScissors(playerSelection, computerSelection) {
    let victorymessage = ''
    let playervictorybool = 0
    let tiebool = 0

    if (playerSelection == computerSelection) {
        victorymessage = "Tie! Both chose " + playerSelection + " , Let's redo that one!"
        tiebool = 1
        return [victorymessage, playervictorybool, tiebool]
    } else if (playerSelection == 'rock') {
        if (computerSelection == 'scissors') { playervictorybool = 1}
    } else if (playerSelection == 'paper') {
        if (computerSelection == 'rock') { playervictorybool = 1}
    } else if (playerSelection == 'scissors') {
        if (computerSelection == 'paper') {playervictorybool = 1}
    }

    if (playervictorybool == 1) {
        victorymessage = "Player wins! " + playerSelection + " beats " + computerSelection + "!"
    } else {
        victorymessage = "Computer wins! " + computerSelection + " beats " + playerSelection + "!"
    }
    //console.log(victorymessage)
    return [victorymessage, playervictorybool, tiebool]
}

function game() {

    if (playerPoints >= 5 || computerPoints >= 5) return

    let wins = 0
    let vicArr = [null,null,null]
    let vicMessage = ''
    let vicTrack = 0
    let vicIncrement =0
    let tieBool = 0

        //playerSelection = validPlayerChoice(playerInput)

        //catch
        compSelection = getComputerChoice()
        console.log('Computer chose ' + compSelection)

        vicArr = playRockPaperScissors(playerSelection, compSelection)
        vicMessage = vicArr[0]
        playerVictoryBool = vicArr[1]
        tieBool = vicArr[2]

        if (tieBool == 1) {
            // do the things
            console.log('tie! no points')
            return
        }

        if (playerVictoryBool) {
            playerPoints += playerVictoryBool
            console.log('playerpoints ' + playerPoints)

        } else if (!playerVictoryBool) {
            computerPoints += 1
            console.log('computerpoints ' + computerPoints)  
        }

        //adjust DOM per click
        playerScoreDisplay.textContent = `${playerPoints}`
        computerScoreDisplay.textContent = `${computerPoints}`
        plays.textContent = `${vicMessage}`

        //endgame
        if (playerPoints >= 5 || computerPoints >= 5) {
            winner.textContent = `We have a winner! Play again soon!`
        }

}

const rockbtn = document.querySelector('#rock-button')
const paperbtn = document.querySelector('#paper-button')
const sczbtn = document.querySelector('#scissors-button')
const playerScoreDisplay = document.querySelector('#player-score')
const computerScoreDisplay = document.querySelector('#computer-score')
const plays = document.querySelector('.plays')
const winner = document.querySelector('.winner')

let playerSelection
let playerPoints = 0
let computerPoints = 0

rockbtn.onclick = () => {
    playerSelection = "rock"
    game()
}

paperbtn.onclick = () => {
    playerSelection = "paper"
    game()
}

sczbtn.onclick = () => {
    playerSelection = "scissors"
    game()
}


