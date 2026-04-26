
var diceImagesSrc = [
    "./\/images/dice1.png",
    "./\/images/dice2.png",
    "./\/images/dice3.png",
    "./\/images/dice4.png",
    "./\/images/dice5.png",
    "./\/images/dice6.png"
]
var diceImagesAlt = [
    1,2,3,4,5,6
]

function headingTitle() {
    var playerOneDice = document.querySelector(".onedice").alt;
    var playerTwoDice = document.querySelector(".twodice").alt;
    var p1won = document.querySelector('.p1won');
    var p2won = document.querySelector('.p2won');
    var tie = document.querySelector('.tie');
    var headingColor = document.querySelector('.headingColor');
    if (playerOneDice === playerTwoDice) {
        document.querySelector("h1").textContent = "It is a Tie!!!"
        p2won.classList.toggle('p2won', false);
        p1won.classList.toggle('p1won', false);
        headingColor.classList.toggle('headingColor', false);
    } else if (playerOneDice > playerTwoDice) {
        document.querySelector("h1").textContent = "Player ONE Won!!!"
        p2won.classList.toggle('p2won', false);
        tie.classList.toggle('tie', false);
        headingColor.classList.toggle('headingColor', false);
    } else if (playerOneDice < playerTwoDice) {
        document.querySelector("h1").textContent = "Player TWO Won!!!"
        p1won.classList.toggle('p1won', false);
        tie.classList.toggle('tie', false);
        headingColor.classList.toggle('headingColor', false);
    }  
}
function shuffle() {
    var shuffledDiceOne = Math.floor(Math.random() * diceImagesSrc.length)
    document.querySelector(".onedice").src = diceImagesSrc[shuffledDiceOne];
    document.querySelector(".onedice").alt = diceImagesAlt[shuffledDiceOne];
    var shuffledDiceTwo = Math.floor(Math.random() * diceImagesSrc.length)
    document.querySelector(".twodice").src = diceImagesSrc[shuffledDiceTwo];
    document.querySelector(".twodice").alt = diceImagesAlt[shuffledDiceTwo];
    headingTitle();
}
setTimeout(shuffle, 5);

