
// ROCK PAPER SCISSOR

let userscore = 0;
let compscore = 0;


const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");




const genCompChoice = () => {
    const options = ["rock","paper","scissor"];
    const randomIdx = Math.floor(Math.random() * 3);
    return options[randomIdx];
    // rock, paper, scissor

}

const drawGame = () => {
    msg.innerText = "Game is draw!"
    msg.style.backgroundColor = "blue";
}

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
       userscore++;
       userScorePara.innerText = userscore;
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";

    }else {
        compscore++;
        compScorePara.innerText = compscore;
        msg.innerText = `You lost! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";

    }

}

const playGame = (userChoice) =>{
const compChoice = genCompChoice();
    // Generate computer choice 

    if(userChoice === compChoice) {
        drawGame()
    }else {
        let userWin = true;
        if(userChoice === "rock"){
            userWin = compChoice === "paper" ? false:true;
        }else if(userChoice === "paper") {
            userWin = compChoice === "scissor" ? false:true;

        }else {
            userWin = compChoice === "rock" ? false:true;
        }
        showWinner(userWin, userChoice, compChoice);
    }

}



choices.forEach((choice) =>{
    choice.addEventListener("click", () =>{
        const userChoice = choice.getAttribute("id");
        // console.log(`you clicked ${userChoice}`);
        playGame(userChoice);
    })
})