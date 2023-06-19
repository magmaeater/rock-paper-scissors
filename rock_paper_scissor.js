
/*
function getPlayerChoice(choice)
{
        
        if(choice.toLowerCase() === 'rock' || choice.toLowerCase() === 'paper'|| choice.toLowerCase() === 'scissors')
        {
            return choice.toLowerCase();
        }
        else
        {
            return false;
        } 
}
*/
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

    let result = document.querySelector(".result");

    if(playerSelection === false)
    {
        result.innerHTML = ("invalid input");
        //return;
    }
    
    let win = playerSelection === "rock" && computerSelection === "scissors" || playerSelection === "paper" && computerSelection === "rock" || playerSelection === "scissors" && computerSelection === "paper";
    let draw = playerSelection === computerSelection;
    
    if(draw === true)
    {
        result.innerHTML = (`draw!! <br> computer - ${computerSelection}<br>player - ${playerSelection}`);
        //return "draw";
    }
    else if(win === false)
    {
        result.innerHTML = (`you lose!! you picked ${playerSelection} and the computer picked ${computerSelection}`);
        //return "loss";
    }
    else if(win === true)
    {
        result.innerHTML = (`you win!! you picked ${playerSelection} and the computer picked ${computerSelection}`);
        //return "win";
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
        console.log(`final score - player - ${pCount}\ncomputer - ${cCount}`);
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

//long redundant implementation to adding interactivity to buttons
/* 
let rock = document.querySelector("#rock");
rock.addEventListener("click", () => 
{
    let choice = "rock";
    let comp = getComputerChoice();
    playRound(choice, comp);
});
let paper = document.querySelector("#paper");
paper.addEventListener("click", () => 
{
    let choice = "paper";
    let comp = getComputerChoice();
    playRound(choice, comp);
    
});
let scissors = document.querySelector("#scissors");
scissors.addEventListener("click", () => 
{
    let choice = "scissors";
    let comp = getComputerChoice();
    playRound(choice, comp);
    
});
*/

//efficient implementation to adding interactivity to buttons
let rock = document.querySelector("#rock");
let paper = document.querySelector("#paper");
let scissors = document.querySelector("#scissors");

let ops = [rock,paper,scissors];

ops.forEach(choice => {
    choice.addEventListener("click", () => 
    {
        let p = choice.textContent.toLowerCase();
        let comp = getComputerChoice();
        playRound(p, comp);
        
    });
})

//game();