var board = document.getElementById('board');
var squares = board.getElementsByTagName('th');
var rows = board.getElementsByTagName('tr');
var tracker = 0;

function hasClass(element, cls) {
    return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1;
}

for(i = 0; i < squares.length; i++){
	squares[i].addEventListener('click', turn);
}

function turn() {
	if(hasClass(this, 'clicked')) {
		return;
	} else {
		this.className += 'clicked';
		this.style.background = decideColor();

		tracker ++;
	} 

	var state = stateOfTheBoard();
	findWinnersInRows(state);
	findWinnersInColumns(state);
	findWinnersOnDiag(state);
};

decideColor = function(){
	return tracker % 2 == 0 ? 'blue' : 'red';
};

function stateOfTheBoard() {
	var state = [[],[],[]];

	for(i = 0; i < rows.length; i++) {
		var squaresInRow = rows[i].getElementsByTagName('th');
		
		for(j = 0; j < squaresInRow.length; j++) {
			state[i][j] = squaresInRow[j].style.background;
		}
	}

	return state;

};

function valueCheck(value1, value2, value3) {
	var winnerCheck = (value1 != '') && ((value1 == value2) && (value2 == value3)); 

	if (winnerCheck) {
		alert(value1 + ' is the winner!');
	}
};

function findWinnersInRows(state) {

	valueCheck(state[0][0], state[0][1], state[0][2]);
    valueCheck(state[1][0], state[1][1], state[1][2]);
    valueCheck(state[2][0], state[2][1], state[2][2]);

};


function findWinnersInColumns(state) {
   
    valueCheck(state[0][0], state[1][0], state[2][0]);
    valueCheck(state[0][1], state[1][1], state[2][1]);
    valueCheck(state[0][2], state[1][2], state[2][2]);

};

function findWinnersOnDiag(state) {

    valueCheck(state[0][0], state[1][1], state[2][2]);
    valueCheck(state[0][2], state[1][1], state[2][0]);

};
