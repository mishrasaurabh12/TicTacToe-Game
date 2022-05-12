let music = new Audio("music.mp3");
let turnsong = new Audio("ting.mp3");
let gameOver = new Audio("gameover.mp3");
let turn = "X";
let isgameover = false;
// function to change the turn
function changeTurn() {
    if (turn === "X") {
        return "0"
    }
    else {
        return "X"
    }
}
// function to check the win
function checkWin() {
    let boxText = document.getElementsByClassName('boxtext');
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]
    wins.forEach(element => {
        if ((boxText[element[0]].innerText === boxText[element[1]].innerText) && (boxText[element[1]].innerText === boxText[element[2]].innerText) && (boxText[element[0]].innerText !== "")) {
            document.getElementById('change').innerText = boxText[element[0]].innerText + " WON";
            isgameover = true;
            document.getElementById('gif').style.opacity = '5';

        }
    })
}
//  GAME LOGIC
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxText = element.querySelector(".boxtext");
    element.addEventListener('click', () => {
        if (boxText.innerText === '') {
            boxText.innerText = turn;
            turn = changeTurn();
            turnsong.play();
            checkWin();
            let newTurn = document.getElementById('change');
            if (!isgameover) {
                newTurn.innerText = `Turn for ${turn}`;
            }

        }
    })
})
// ADD ON CLICK LISTENET TO RRSET BUTTON
let reset = document.getElementById('reset');
reset.addEventListener('click', () => {
    let boxText = document.getElementsByClassName('boxtext');
    Array.from(boxText).forEach(element => {
        element.innerText = "";
    })
    document.getElementById('gif').style.opacity = '0';
    turn="X";
    isgameover=false;
    let newTurn = document.getElementById('change');
    if (!isgameover) {
        newTurn.innerText = `Turn for ${turn}`;
    }


})