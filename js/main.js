var playerColor;
var ennemyColor;
var turn = 0;
var firstJumbotron = document.querySelector('.firstJumbotron');
var colorSelection = document.querySelector('.color-selection');
var playerTurn =  document.querySelector('#textIntro');
var connectFourBoard = document.querySelector('.connectFourBoard');
var chooseYellow = document.querySelector('#yellow');
var chooseRed = document.querySelector('#red');
var cells =  document.querySelectorAll('.cell');
var currentPlayer = 1
//********************************************
// Functions
//********************************************
function selectYellow(){
    playerColor = "yellow"
    ennemyColor = "red"
    console.log(playerColor)
};

function selectRed(){
    playerColor = 'red';
    ennemyColor = 'yellow';
    console.log(playerColor);
};

function displayBoard(){
    firstJumbotron.style.display = "none";
    colorSelection.style.display = "none";
    connectFourBoard.style.display = "grid";
};

String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
};
function changeTurnMessage(turnPlayer){
    playerTurn.textContent = turnPlayer.capitalize() +"'s turn";
};
function displayWinningMessage(turnPlayer){
    playerTurn.textContent = turnPlayer.capitalize() + " Won !";
};
//********************************************
// select color and transition to connect four board
//********************************************
chooseYellow.addEventListener('click', function(){
    selectYellow();
    displayBoard();
});

chooseRed.addEventListener('click', function(){
    selectRed();
    displayBoard();
});

//********************************************
// Connect four logic, draw the chips in
//********************************************

for (var i = 0; i < cells.length; i++)
    (function(index){
    cells[i].onclick = function () {
        if (cells[index + 7].classList.contains("taken")) {
            if (currentPlayer === 1) {
                cells[index].classList.add("taken");
                cells[index].classList.add(playerColor);
                changeTurnMessage(ennemyColor);
                currentPlayer = 2;
            } else if (currentPlayer === 2){
                cells[index].classList.add("taken");
                cells[index].classList.add(ennemyColor);
                changeTurnMessage(playerColor);
                currentPlayer = 1;
                console.log('works');
            }
        } else {
        }
    }
})(i);

//********************************************
// Determine winner
//********************************************
