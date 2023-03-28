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

function validPlayerChoice(playerChoice) {
    let playervalidChoice = playerChoice.toLowerCase()
    console.log(playervalidChoice)

   // if (playervalidChoice != 'rock' ||
   // playervalidChoice != 'paper' ||
    //playervalidChoice != 'scissors') {
   // throw new Error('Invalid Input') }

   // need to add error handling

    return playervalidChoice
}

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
    let wins = 0
    let vicArr = [null,null,null]
    let vicMessage = ''
    let vicTrack = 0
    let vicIncrement =0
    let tieBool = 0

    console.log("Let's play Five Rounds of Rock Paper Sissors!")
    for (var i = 1; i < 6; i++){
        playerInput = prompt('Choose your Weapon')
        playerSelection = validPlayerChoice(playerInput)

        //catch
        compSelection = getComputerChoice()
        console.log('Computer chose ' + compSelection)

        vicArr = playRockPaperScissors(playerSelection, compSelection)
        vicMessage = vicArr[0]
        vicIncrement = vicArr[1]
        tieBool = vicArr[2]

        if (tieBool == 1) {
            i =  i-1
        }

        vicTrack += vicIncrement
        let vicComp = i - vicTrack
        //console.log(vicIncrement + ' vicinc')
        //console.log(vicTrack + ' victrack')


        console.log(vicMessage)
        console.log(('The score is ' + vicTrack + ' to ' + vicComp ))
        console.log((5-i + ' games left!'))
    }

    if (vicTrack > 2) {
        console.log("You Win! I won't forget this >:(")
    } else {
        console.log("HAHA LOSER! Eat my shorts")
    }
}

