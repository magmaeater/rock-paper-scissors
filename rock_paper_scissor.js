function getPlayerChoice()
{
        let choice = prompt("Enter rock, paper or scissors");
        
        if(choice.toLowerCase() === 'rock' || choice.toLowerCase() === 'paper'|| choice.toLowerCase() === 'scissors')
        {
            return choice.toLowerCase();
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
    if(playerSelection === false)
    {
        console.log("invalid input");
        return;
    }
    
    let win = playerSelection === "rock" && computerSelection === "scissors" || playerSelection === "paper" && computerSelection === "rock" || playerSelection === "scissors" && computerSelection === "paper";
    let draw = playerSelection === computerSelection;
    
    if(draw === true)
    {
        console.log(`draw!!\ncomputer - ${computerSelection}\nplayer - ${playerSelection.toLowerCase()}`);
    }
    else if(win === false)
    {
        console.log(`you lose!! you picked ${playerSelection.toLowerCase()} and the computer picked ${computerSelection}`);
    }
    else if(win === true)
    {
        console.log(`you win!! you picked ${playerSelection.toLowerCase()} and the computer picked ${computerSelection}`);
    }
    
    
    
}

playRound(getPlayerChoice(), getComputerChoice());