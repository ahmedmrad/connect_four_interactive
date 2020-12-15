var playerColor
var ennemyColor
var firstJumbotron = document.querySelector('.firstJumbotron')
var colorSelection = document.querySelector('.color-selection')
var chooseBlue = document.querySelector('#blue')
var chooseRed = document.querySelector('#red')

//********************************************
// Functions
//********************************************
function selectBlue(){
    playerColor = 'blue'
    ennemyColor = 'red'
    console.log(playerColor)
}

function selectRed(){
    playerColor = 'red'
    ennemyColor = 'blue'
    console.log(playerColor)
}

function displayBoard(){
    firstJumbotron.style.display = 'none'
    colorSelection.style.display = 'none'
}

//********************************************
// select color and transition to connect four board
//********************************************
