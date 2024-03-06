let userScore = 0;
let computerScore = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userscore = document.querySelector("#user-score");
const compscore = document.querySelector("#computer-score");
const genCompChoice = () => {
    let options = ["rock", "paper", "scissors"];
    let randomIndex = Math.floor(Math.random() * 3);
    return options[randomIndex];


}
const drawGame = () => {
    console.log("Game was draw");
    msg.innerText = "Game was draw. Play again!";
    msg.style.backgroundColor = "grey";
}
const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        ++userScore;
        userscore.innerText = userScore;
        console.log("You win!");
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else {
        computerScore++;
        compscore.innerText = computerScore;

        console.log("You lose!");
        msg.innerText = `You lose! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}
const playGame = (userChoice) => {
    console.log("User choice = ", userChoice);
    // to generate computer choice
    const compChoice = genCompChoice();
    console.log("Computer choice = ", compChoice);
    if (userChoice === compChoice) {
        drawGame();
    }
    else {
        let userWin = true;
        if (userChoice === "rock") {

            userWin = compChoice === "paper" ? false : true;
        }
        else if (userChoice === "paper") {
            userWin = compChoice === "scissors" ? false : true;
        }
        else {

            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }

}
choices.forEach(choice => {
    console.log(choice);
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        //console.log("Choice was clicked");
        playGame(userChoice);
    });
});
