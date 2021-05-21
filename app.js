const rock = document.getElementById('r');
const paper = document.getElementById('p');
const scissor = document.getElementById('s');
const userscorespan = document.querySelector('.user-point');
const compscorespan = document.querySelector('.comp-point');
const pauseAudiobtn = document.querySelector('.pause-audio');
const resultBox = document.getElementById("result-box");

let userscore = 0;
let compscore = 0;

const pchoice = document.querySelectorAll(".col-4 .choices");
pchoice.forEach((x) => {
    x.addEventListener('click', () => {
        const pchoice = x.id;
        const comChoice = getComputerChoice();
        // console.log(`You choosed ${pchoice}`);
        // console.log(`Computer choosed ${comChoice}`);
        let win = playGame(pchoice, comChoice);
        //console.log(win); 1-win, 2-loss, 3-tie
        showresult(win, pchoice, comChoice);

        resultBox.style.display = 'block';
        resultBox.style.animation = 'fade-in 1s';



    })
})



function getComputerChoice() {
    const Choices = ['r', 'p', 's'];
    const randomNum = Math.floor(Math.random() * 3);
    const computerChoice = Choices[randomNum];
    return computerChoice;
}

function playGame(pchoice, comChoice) {
    const p = pchoice;
    const c = comChoice;
    const res = p + c;
    let win = 0;
    // console.log(p,c);
    console.log(res);
    switch (res) {
        case 'rs':
        case 'pr':
        case 'sp':
            console.log(`Win! You : ${p} com: ${c}`);
            userscore += 1;
            userscorespan.innerHTML = `${userscore}`;
            win = 1; //1 for win
            break;
        case 'rp':
        case 'ps':
        case 'sr':
            console.log(`Loss! You : ${p} com: ${c}`);
            compscore += 1;
            compscorespan.innerHTML = `${compscore}`;
            win = 2;    // 2 for loss
            break;
        case 'rr':
        case 'pp':
        case 'ss':
            console.log(`Tie! You : ${p} com: ${c}`);
            win = 3;    //3 for tie
            break;
    }
    return win;
}


function showresult(win, pchoice, comChoice) {

    let usericonName = "";
    let comiconName = "";
    let userIcon = document.querySelector('.user');
    let comIcon = document.querySelector('.comp');
    let verdictText = document.querySelector('.verdict-text');
    let resultEmoji = document.querySelector('.emoji');

    usericonName = getIconName(pchoice);
    comiconName = getIconName(comChoice);

    userIcon.classList = `user fas fa-hand-${usericonName}`;
    comIcon.classList = `comp fas fa-hand-${comiconName}`;

    if (win == 1) {
        //winner
        verdictText.innerText = "Hey Man! You Won";
        resultEmoji.classList = "emoji fas fa-smile";

    }
    else if (win == 2) {
        //loss
        verdictText.innerText = "Sorry! You Loss";
        resultEmoji.classList = "emoji fas fa-heart-broken text-danger";

    }
    else if (win == 3) {
        //tie
        verdictText.innerText = "Oopps! That's a Tie!";
        resultEmoji.classList = "emoji fas fa-meh text-white";
    }
    else {
        console.log(`Something error`);
    }
}

function getIconName(choice) {
    console.log(choice);
    switch (choice) {
        case 'r':
            return "rock";

        case 'p':
            return 'paper';
        case 's':
            return 'scissors';

    }
}