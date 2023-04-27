function getPlayerChoice()
{
        let choice = prompt("Enter rock, paper or scissors \n");
        
        if(choice.toLowerCase() === 'rock' || choice.toLowerCase() === 'paper'|| choice.toLowerCase() === 'scissors')
        {
            return choice;
        }
        else
        {
            return false;
        } 
}

function getComputerChoice()
{
    let choices = [
        "rock",
        "paper",
        "scissors"
    ];

    let choice = Math.floor(Math.random() * choices.length);
    return choices[choice];
}

function playRound(playerSelection, computerSelection)
{
    console.log(playerSelection);
    console.log(computerSelection);
}

playRound(getPlayerChoice(), getComputerChoice());