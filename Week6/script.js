//create class of cards. It will be invoked later with as 'DeckofCards' to show the deck of cards.
class Cards {
    constructor() {
        this.cards = [];
        let suits = ['Spades', 'Hearts', 'Diamonds', 'Clubs'];
        let ranks = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13'];
        for (let suit in suits) {
            for (let rank in ranks) {
                this.cards.push(`${ranks[rank]} of ${suits[suit]}`)
            }
        }
    }
}
let deckOfCards = new Cards();
console.log(deckOfCards);

//shuffling the card.
function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i+1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}
shuffle(deckOfCards.cards);
console.log(deckOfCards);

//deal cards to each player's hand.
const player1 = [];
const player2 = [];

for (let i = 0; i < deckOfCards.cards.length; i++) {
    if (i % 2 === 0) {
    player1.push(deckOfCards.cards[i]);
    } else {
    player2.push(deckOfCards.cards[i]);
    }
}
console.log(`Player 1 has: ${player1}`);
console.log(`Player 2 has: ${player2}`);

//iterate through the turns where each player plays a card.

for (let i = 0; i < player1.length; i++) {
    console.log(`Player 1: ${player1[i]} 
    vs. 
    Player 2: ${player2[i]}`);
    if (player1[i] > player2[i]) {
        console.log(`Player 1 gains a point!`) 
    } else if (player2[i] > player1[i]) {
        console.log(`Player 2 gains a point!`) 
    } else { 
        console.log(`It's a tie!`);
    }
}
//award a point to the player with the higher card. ties result in zero points.
const player1Points = [];
const player2Points = [];
for (let i = 0; i <26; i++){
if (player1[i] > player2[i]) {
    player1Points.push(1);
} else if (player2[i] > player1[i]) {
    player2Points.push(1);
} else {
    }
}

//after all cards have been played, display the score and declare the winnder
function winner() {
    if (player1Points > player2Points) {
        console.log('Player 1 Wins!');
    } else if (player2Points > player1Points) {
        console.log('Player 2 Wins!');
    } else {
        console.log(`It's a tie. Play again!`);
    }
}
console.log(`Player 1 Points: ${player1Points.length}`);
console.log(`Player 2 Points: ${player2Points.length}`);
winner();