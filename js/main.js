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
// Functions to play the game
//********************************************
function selectYellow(){
    playerColor = "yellow"
    ennemyColor = "red"
    console.log(playerColor);
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

function reinitializeTurnMessage(turnPlayer){
    playerTurn.textContent = "Welcome back, "+turnPlayer+"'s turn"
};

function selectWinner(c1,c2,c3,c4,turnPlayer){
    c1.classList.add(turnPlayer+'-win');
    c2.classList.add(turnPlayer+'-win');
    c3.classList.add(turnPlayer+'-win');
    c4.classList.add(turnPlayer+'-win');
    replay.style.visibility = 'visible';
};

function checkVictory(){
    var winningCombination =[/* Horizontal*/
                            [0,1,2,3],[1,2,3,4],[2,3,4,5],[3,4,5,6],
                            [7,8,9,10],[8,9,10,11],[9,10,11,12],[10,11,12,13],
                            [14,15,16,17],[15,16,17,18],[16,17,18,19],[17,18,19,20],
                            [21,22,23,24],[22,23,24,25],[23,24,25,26],[24,25,26,27],
                            [28,29,30,31],[29,30,31,32],[30,31,32,33],[31,32,33,34],
                            [35,36,37,38],[36,37,38,39],[37,38,39,40],[38,39,40,41],
                            /*Vertical*/
                            [0,7,14,21],[7,14,21,28],[14,21,28,35],
                            [1,8,15,22],[8,15,22,29],[15,22,29,36],
                            [2,9,16,23],[9,16,23,30],[16,23,30,37],
                            [3,10,17,24],[10,17,24,31],[17,24,31,38],
                            [4,11,18,25],[11,18,25,32],[18,25,32,39],
                            [5,12,19,26],[12,19,26,33],[19,26,33,40],
                            [6,13,20,27],[13,20,27,34],[20,27,34,41],
                            /*Diagonal*/
                            [14,22,30,38],
                            [7,15,23,31],[15,23,31,39],
                            [0,8,16,24],[8,16,24,32],[16,24,32,40],
                            [1,9,17,25],[9,17,25,33],[17,25,33,41],
                            [2,10,18,26],[10,18,26,34],
                            [3,11,19,27],
                            [38,32,26,20],
                            [37,31,25,19],[31,25,19,13],
                            [36,30,4,18],[30,24,18,12],[24,18,12,6],
                            [35,29,23,17],[29,23,17,11],[23,17,11,5],
                            [28,22,16,10],[22,16,10,4],
                            [21,15,9,3]
                            ];
   for (var i =0; i < winningCombination.length; i++){
        var cell1 = cells[winningCombination[i][0]];
        var cell2 = cells[winningCombination[i][1]];
        var cell3 = cells[winningCombination[i][2]];
        var cell4 = cells[winningCombination[i][3]];
        if(cell1.classList.contains(playerColor) && cell2.classList.contains(playerColor) && cell3.classList.contains(playerColor) && cell4.classList.contains(playerColor)){
            selectWinner(cell1,cell2,cell3,cell4,playerColor);
            alert(playerColor+' won !');
            displayWinningMessage(playerColor);

        }else if(cell1.classList.contains(ennemyColor) && cell2.classList.contains(ennemyColor) && cell3.classList.contains(ennemyColor) && cell4.classList.contains(ennemyColor)){
            selectWinner(cell1,cell2,cell3,cell4,ennemyColor);
            alert(ennemyColor+' won !');
            displayWinningMessage(ennemyColor);
        }
    }
};
function playAgain() {
    for (var i=0; i<cells.length; i++){
        cells[i].classList.remove(playerColor);
        cells[i].classList.remove(ennemyColor);
        cells[i].classList.remove(playerColor+'-win');
        cells[i].classList.remove(ennemyColor+'-win');
        reinitializeTurnMessage(playerColor);
        currentPlayer=1;
        replay.style.visibility = 'hidden';
    }
};
//********************************************
// select color and transition to connect four board
//********************************************
chooseYellow.addEventListener('click', function(){
    selectYellow();
    displayBoard();
    changeTurnMessage(playerColor);
});

chooseRed.addEventListener('click', function(){
    selectRed();
    displayBoard();
    changeTurnMessage(playerColor);
});

//********************************************
// Connect four logic, draw the chips in and determine winner
//********************************************

for (var i = 0; i < cells.length; i++)
    (function (index) {
        cells[i].onclick = function () {
            if (cells[index + 7].classList.contains("taken")) {
                if (
                    cells[index].classList.contains(playerColor) === false &&
                    cells[index].classList.contains(ennemyColor) === false
                ) {
                    if (currentPlayer === 1) {
                        cells[index].classList.add("taken");
                        cells[index].classList.add(playerColor);
                        changeTurnMessage(ennemyColor);
                        checkVictory()
                        currentPlayer = 2;
                    } else if (currentPlayer === 2) {
                        cells[index].classList.add("taken");
                        cells[index].classList.add(ennemyColor);
                        changeTurnMessage(playerColor);
                        checkVictory()
                        currentPlayer = 1;
                        console.log("works");
                    }
                } else{
                    alert("This cell is already taken.")
                }
            }else {
                alert("Illegal move.");
            }
        }
    })(i);

//********************************************
// Restart method
//********************************************
replay.addEventListener('click', function(){
    playAgain();
});









