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

function playRound(playerSelection, computerSelection, pCount, cCount)
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
        return "draw";
    }
    else if(win === false)
    {
        console.log(`you lose!! you picked ${playerSelection.toLowerCase()} and the computer picked ${computerSelection}`);
        return "loss";
    }
    else if(win === true)
    {
        console.log(`you win!! you picked ${playerSelection.toLowerCase()} and the computer picked ${computerSelection}`);
        return "win";
    }     
}

function game()
{
    let pCount = 0;
    let cCount = 0;
    for(let i = 0; i < 5; i++)
    {
        console.log(`round ${i+1}:\nplayer score: ${pCount}\n computer score: ${cCount}`);
        let pChoice = getPlayerChoice();
        let cChoice = getComputerChoice();
        if(pChoice === false)
        {
            console.log("wrong input! try again");
            i--;
            continue;
        }

        let result = playRound(pChoice, cChoice);
        if(result === "win")
        {
            pCount++;
        }
        else if(result === "loss")
        {
            cCount++;
        }
        else{
            pCount++;
            cCount++;
        }
    }
    if(pCount > cCount)
    {
        console.log("you win the overall match, well done!");
        console.log(`final score - \nplayer - ${pCount}\ncomputer - ${cCount}`);
    }
    else if (pCount < cCount)
    {
        console.log("you losr the overall match, try again!");
        console.log(`final score - \nplayer - ${pCount}\ncomputer - ${cCount}`);
    }
    else
    {
        console.log(`it was a draw for the overall match!`);
        console.log(`final score - \nplayer - ${pCount}\ncomputer - ${cCount}`);
    }

}

game();