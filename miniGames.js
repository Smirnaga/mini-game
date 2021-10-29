'use strict';

const board = document.querySelector('#board')
const colors = ['red','blue', '#ADFF2F', '#00FF00', 'yellow', '#F0E68C', '#66CDAA', '#00FFFF', 'purple', '#FF00FF', '#FF8C00', 'orange']
const SQUARES_NUMBER = 1000

for (let i = 0; i<SQUARES_NUMBER; i++ ) {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () => setColor(square))
    
    square.addEventListener('mouseleave', () => removeColor(square))

    board.append(square)
}

function setColor(element) {
    const color = getRandomColor()
    element.style.backgroundColor = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}
function removeColor(element) {
    element.style.backgroundColor = '#1d1d1d'
    element.style.boxShadow = `0 0 2px #1d1d1d`

}
function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)]
}