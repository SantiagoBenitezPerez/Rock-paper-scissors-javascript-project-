// setting global variables
// add an event listener on the container of the buttons

const topContainer = document.querySelector('#top-container');
const topBtns = document.querySelectorAll('.topBtn');
const result = document.getElementById('result');
const userScore = document.getElementById('score');
const resetBtn = document.getElementById('reset-btn');

// add variables that hold both the user and computer choice
let userChoice = "";
let computerChoice = "";

// user´s score
userScore.innerHTML = "";
let score = Number(userScore.innerHTML);

// random option for the computer choice
const arrayOfChoices = ["rock", "paper", "scissors"];

window.onload = () => {
    start();
    resetBtn.addEventListener('click', reset);
    
}

const start = () => {
      getChoices();
}

const reset = () => {
    userScore.innerHTML = "";
    score = Number(userScore.innerHTML);
    result.innerHTML =  "";
}

const getUserChoice = e => {
   for (btn of topBtns) {
     if(e.target == btn) {
        userChoice = btn.getAttribute('id');
        return userChoice;
     }
   }
}

const getComputerChoice = array => {     
    let randomNum = Math.floor(Math.random() * array.length);
    computerChoice = array[randomNum];
    return computerChoice;
}


const getChoices = () => {
    topContainer.addEventListener('click', e => {
        userChoice = getUserChoice(e);
        computerChoice = getComputerChoice(arrayOfChoices);
        sayResult(userChoice, computerChoice);
        
    });
 
}

const sayResult = (userChoice, computerChoice) => {
    
    if(userChoice == "rock" && computerChoice == "paper") {
        userScore.innerHTML = `<h2 class = "score">SCORE: ${score-=1}</h2>`;
        result.innerHTML =  `<h3 class = "result">&#129704;${userChoice} VS &#9995;${computerChoice} <br> You lost! </h3>`;
    } else if(userChoice == "rock" && computerChoice == "scissors") {
        userScore.innerHTML = `<h2 class = "score">SCORE: ${score+=1}</h2>`;
        result.innerHTML =  `<h3 class = "result">&#129704;${userChoice} VS &#9986;${computerChoice} <br> You win! </h3>`;
    } else if(userChoice == "paper" && computerChoice == "rock") {
        userScore.innerHTML = `<h2 class = "score">SCORE: ${score+=1}</h2>`;
        result.innerHTML =  `<h3 class = "result">&#9995;${userChoice} VS &#129704;${computerChoice} <br> You win! </h3>`;
    } else if(userChoice == "paper" && computerChoice == "scissors") {
        userScore.innerHTML = `<h2 class = "score">SCORE: ${score-=1}</h2>`;
        result.innerHTML =  `<h3 class = "result">&#9995;${userChoice} VS &#9986;${computerChoice} <br> You lost! </h3>`;
    } else if(userChoice == "scissors" && computerChoice == "paper") {
        userScore.innerHTML = `<h2 class = "score">SCORE: ${score+=1}</h2>`;
        result.innerHTML =  `<h3 class = "result">&#9986;${userChoice} VS &#9995;${computerChoice} <br> You win! </h3>`;
    } else if(userChoice == "scissors" && computerChoice == "rock") {
        userScore.innerHTML = `<h2 class = "score">SCORE: ${score-=1}</h2>`;
        result.innerHTML =  `<h3 class = "result">&#9986;${userChoice} VS &#129704;${computerChoice} <br> You lost! </h3>`;
    }  else if(userChoice == computerChoice) {
        userScore.innerHTML = `<h2 class = "score">SCORE: ${score}</h2>`;
        result.innerHTML =  `<h3 class = "result">${document.getElementById(userChoice).innerText} ${userChoice} VS ${document.getElementById(computerChoice).innerText} ${computerChoice} <br> It is a Draw! </h3>`;
    }
}


