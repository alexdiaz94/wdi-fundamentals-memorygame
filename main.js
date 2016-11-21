
//var cardOne = "queen";
//var cardTwo = "king";
//var cardThree = "queen";
//var cardFour = "king";
//if (cardOne === cardThree) {
//	alert('You found a match!');	
//} else {
//  alert('Sorry, try again.');
//}
// represents the cards of the game
var cards = ['queen', 'queen', 'king', 'king'];
var cardsInPlay = [];

var board = document.getElementById('game-board');


// SET GAME BOARD  

function createBoard() {

for (var i=0; i<cards.length; i++) {
var cardElement = document.createElement('div');
cardElement.className = 'card';
cardElement.setAttribute('data-card', cards[i]);
cardElement.addEventListener('click', isTwoCards)
board.appendChild(cardElement);
    }
}

///// CHECK FOR 2 CARDS INPLAY  

function isTwoCards() {
cardsInPlay.push(this.getAttribute('data-card'));
console.log(this.getAttribute('data-card'));
if (this.getAttribute('data-card') === 'king') {
        this.innerHTML = "<img src='https://pixabay.com/static/uploads/photo/2012/04/11/13/36/spade-28267_960_720.png' alt="King of Spades">; 
            } else {
        this.innerHTML = "<img src='https://pixabay.com/static/uploads/photo/2012/04/11/13/48/hearts-28307_960_720.png' alt="Queen of Hearts">"; 
    }


if (cardsInPlay.length === 2) {
isMatch(cardsInPlay);
cardsInPlay = [];
    }
}

///// MATCH FUNCTION  

function isMatch(cards) {
 if (cards[0] === cards[1]) {
   alert("You found a match!");
 } else {
   alert("Sorry, Try Again :'( ");

 }
}

createBoard();
