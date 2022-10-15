const cellElements = document.querySelectorAll('[data-cell]')
const restartBtn = document.getElementById('restart')

//restart button
restartBtn.addEventListener('click', () => {
    cellElements.forEach(cell => {
        cell.innerHTML = ''
    });
});

let currentTurn = 'O'
//define who's turn and write X's or O's based on the turn
document.getElementById('1').addEventListener('click', () => {
    document.getElementById('1').innerHTML = currentTurn
    currentTurn = currentTurn === 'O' ? 'X' : 'O'
    document.getElementById('turn').innerHTML = currentTurn
})
document.getElementById('2').addEventListener('click', () => {
    document.getElementById('2').innerHTML = currentTurn
    currentTurn = currentTurn === 'O' ? 'X' : 'O'
    document.getElementById('turn').innerHTML = currentTurn
})
document.getElementById('3').addEventListener('click', () => {
    document.getElementById('3').innerHTML = currentTurn
    currentTurn = currentTurn === 'O' ? 'X' : 'O'
    document.getElementById('turn').innerHTML = currentTurn
})
document.getElementById('4').addEventListener('click', () => {
    document.getElementById('4').innerHTML = currentTurn
    currentTurn = currentTurn === 'O' ? 'X' : 'O'
    document.getElementById('turn').innerHTML = currentTurn
})
document.getElementById('5').addEventListener('click', () => {
    document.getElementById('5').innerHTML = currentTurn
    currentTurn = currentTurn === 'O' ? 'X' : 'O'
    document.getElementById('turn').innerHTML = currentTurn
})
document.getElementById('6').addEventListener('click', () => {
    document.getElementById('6').innerHTML = currentTurn
    currentTurn = currentTurn === 'O' ? 'X' : 'O'
    document.getElementById('turn').innerHTML = currentTurn
})
document.getElementById('7').addEventListener('click', () => {
    document.getElementById('7').innerHTML = currentTurn
    currentTurn = currentTurn === 'O' ? 'X' : 'O'
    document.getElementById('turn').innerHTML = currentTurn
})
document.getElementById('8').addEventListener('click', () => {
    document.getElementById('8').innerHTML = currentTurn
    currentTurn = currentTurn === 'O' ? 'X' : 'O'
    document.getElementById('turn').innerHTML = currentTurn
})
document.getElementById('9').addEventListener('click', () => {
    document.getElementById('9').innerHTML = currentTurn
    currentTurn = currentTurn === 'O' ? 'X' : 'O'
    document.getElementById('turn').innerHTML = currentTurn
})

//the winning formula
    // ['1', '4', '7']
    // ['2', '5', '8']
    // ['3', '6', '9']
    // ['1', '5', '9']
    // ['3', '5', '7']
    // ['1', '2', '3']
    // ['4', '5', '6']
    // ['7', '8', '9']
    let roundWon = false
document.getElementById('board').addEventListener('click', () => {
    let cell1 = document.getElementById('1').innerText
    let cell2 = document.getElementById('2').innerText
    let cell3 = document.getElementById('3').innerText
    let cell4 = document.getElementById('4').innerText
    let cell5 = document.getElementById('5').innerText
    let cell6 = document.getElementById('6').innerText
    let cell7 = document.getElementById('7').innerText
    let cell8 = document.getElementById('8').innerText
    let cell9 = document.getElementById('9').innerText
    if (cell1, cell2, cell3, cell4, cell5, cell6, cell7, cell8, cell9 === '') {
        roundWon = false
        document.getElementById('winner').innerHTML = `Who's going to win!?`
    } else if (
        cell1 === cell4 && cell4 === cell7 || cell2 === cell5 && cell5 === cell8 ||
        cell3 === cell6 && cell6 === cell9 || cell1 === cell5 && cell5 === cell9 ||
        cell3 === cell5 && cell5 === cell7 || cell1 === cell2 && cell2 === cell3 ||
        cell4 === cell5 && cell5 === cell6 || cell7 === cell8 && cell8 === cell9) {
            roundWon = true
            console.log(roundWon)
            if (roundWon = true && currentTurn === 'X') {
                document.getElementById('winner').innerHTML = `O wins!`
            } else if (roundWon = true && currentTurn === 'O') {
                document.getElementById('winner').innerHTML = `X wins!`
            } else {
                document.getElementById('winner').innerHTML = `It's a tie, reset and play again!`
            }
        }
    })