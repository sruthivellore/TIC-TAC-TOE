var board = new Array();
var playerTurn = "O";
var movesCount = 0;

function loadGame(size){

	for( var i = 0; i < size; i++){ 		
		board[i] = new Array();
	}
	playerTurn = "O";
	movesCount = 0;
	showGrid(size);
}

function showGrid(size){
	var htmlContent = "";
	for(var i = 0; i < board.length; i++){
		htmlContent += "<div class='rows'>";
		for(var j = 0; j < board.length; j++){
			htmlContent += "<div id='"+i+""+j+"'class='cell' onclick='mark("+i+","+j+")'></div>";
		}
		htmlContent += "</div>";
	}	
	document.getElementById("grid").innerHTML = htmlContent;
}



function isAnyRowElementsSame(){
	for(var i = 0; i < board.length; i++){
            if(isRowElementsSame(i)){
                return true;
              }
        }
        return false;
}

function isAnyColumnElementsSame(){
	for(var i = 0; i < board.length; i++){
            if(isColumnElementsSame(i)){
                return true;
            }
         }
         return false;
}

function isRowElementsSame(row){
	if( board[row][0] == undefined ){
            return false;
        } else {
             for (var i = 1; i < board.length; i++){
                 if( board[row][0] != board[row][i] ){
                     return false;
                  }
              }
        }
       return true;
}

function isColumnElementsSame(col){
	if( board[0][col] == undefined ){
            return false;
        } else {
            for (var i = 1; i < board.length; i++){
                if( board[0][col] != board[i][col] ){
                    return false;
                    }
             }
         }
         return true;
}

function isDiagonalElementsSame(){
	if(board[0][0] == undefined){
            return false;
          }
        for(var i = 1; i < board.length; i++){
            if(board[0][0] != board[i][i]){
                 return false;
             }
         }
        return true;
}

function isCrossDiagonalElementsSame(){
	if(board[0][board.length-1] == undefined){
            return false;
         }
        for(var i = 1; i < board.length; i++){
            if(board[0][board.length-1] != board[i][board.length-1-i]){
                 return false;
             }
        }
        return true;

        }

function hasWinner(){
	return (isDiagonalElementsSame() || isCrossDiagonalElementsSame()
                 || isAnyRowElementsSame() || isAnyColumnElementsSame());
}

function mark(x,y){
	if( board[x][y] == undefined ){
            document.getElementById(x+""+y).innerHTML = playerTurn;
            playerTurn == "O" ? board[x][y] = "O" : board[x][y] = "X";
            playerTurn == "O" ? playerTurn = "X" : playerTurn = "O";
            movesCount++;
            if( movesCount >= 4){
                if(hasWinner()){
                    alert("Game won by " + (playerTurn == "X" ? "O" : "X"));
                    loadGame(board.length);
                      }
            }
            if( movesCount == 9 ){
                alert("Game Draw !!! ");
                loadGame(board.length);
            }
        } else {
            alert("Position Already Occupied !!!");
         }
}



