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
	findWinner(state);
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

// var positionValues = [value1, value2, value3];

function valueCheck(value1, value2, value3) {
	var winnerCheck = (value1 != '') && ((value1 == value2) && (value2 == value3)); 

	if (winnerCheck) {
		alert(value1 + ' is the winner!');
		clearBoard();
	}
};

function findWinner(state) {

 	for (i=0; i < state.length; i++) {
 		var column	= [state[i][0], state[i][1], state[i][2]],
 			row 	= [state[0][i], state[1][i], state[2][i]];

 			// diag	= [state[0][2], state[1][1], state[2][0]],
 			// diag2	= [state[0][0], state[1][1], state[2][2]];


 		valueCheck(row[0], row[1], row[2]);
 		valueCheck(column[0], column[1], column[2]);

 		// valueCheck(diag[0], diag[1], diag[2]);
 		// valueCheck(diag2[0], diag2[1], diag2[2]);
 	}

};

function findWinnersOnDiag(state) {

    valueCheck(state[0][0], state[1][1], state[2][2]);
    valueCheck(state[0][2], state[1][1], state[2][0]);

};

function clearBoard(state) {
	
	// console.log(squaresInRow[i]);

	for(i = 0; i < rows.length; i++) {
		var squaresInRow = rows[i].getElementsByTagName('th');
		
		// start here
		if(hasClass(squaresInRow[i], 'clicked')) {
			squaresInRow[i].className = '';
			squaresInRow[i].style.background = '';
			console.log('clear');
		}
	}

};





