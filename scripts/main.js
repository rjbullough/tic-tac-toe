const selectSquare = document.querySelector('.grid');
let turn = 'X'
let numberOfTurns = 0
selectSquare.addEventListener('click', function (event) {
    const box = event.target
    const result = document.querySelector('.winner-message')
    if(!box.textContent) {
        box.textContent = turn
        numberOfTurns++
    };
    let boxes = document.querySelectorAll('.grid div');
    if (boxes[0].textContent === turn &&
        boxes[1].textContent === turn &&
        boxes[2].textContent === turn) {
        result.textContent = turn + ' is the winner!'
    } else if (boxes[3].textContent === turn &&
        boxes[4].textContent === turn &&
        boxes[5].textContent === turn) {
        result.textContent = turn + ' is the winner!'
    } else if (boxes[6].textContent === turn &&
        boxes[7].textContent === turn &&
        boxes[8].textContent === turn) {
        result.textContent = turn + ' is the winner!'
    } else if (boxes[0].textContent === turn &&
        boxes[3].textContent === turn &&
        boxes[6].textContent === turn) {
        result.textContent = turn + ' is the winner!'
    } else if (boxes[1].textContent === turn &&
        boxes[4].textContent === turn &&
        boxes[7].textContent === turn) {
        result.textContent = turn + ' is the winner!'
    } else if (boxes[2].textContent === turn &&
        boxes[5].textContent === turn &&
        boxes[8].textContent === turn) {
        result.textContent = turn + ' is the winner!'
    } else if (boxes[0].textContent === turn &&
        boxes[4].textContent === turn &&
        boxes[8].textContent === turn) {
        result.textContent = turn + ' is the winner!'
    } else if (boxes[2].textContent === turn &&
        boxes[4].textContent === turn &&
        boxes[6].textContent === turn) {
        result.textContent = turn + ' is the winner!'
    } else if (numberOfTurns === 9) {
        result.textContent = 'Draw'
    }
    if (turn === 'X') {
        turn = 'O' 
    } else {
        turn = 'X'
    }
});