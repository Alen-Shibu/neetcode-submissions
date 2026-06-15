class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        //Row check
        for(let arr of board){
            let rowSet = new Set()
            for(let num of arr){
                if(num === '.') continue;
                if(rowSet.has(num)) return false
                rowSet.add(num)
            }
        }
        //Column check
            for(let col=0;col<9;col++){
            let colSet = new Set()
                for(let row=0;row<board.length;row++){
                    if(board[row][col] === '.') continue;
                    if(colSet.has(board[row][col])) return false;
                    colSet.add(board[row][col])
                }
            }

        //Sub box check
            for(let boxRow = 0; boxRow < 9; boxRow += 3){
                for(let boxCol = 0; boxCol < 9; boxCol += 3){
                    let boxSet = new Set();
                    for(let r = boxRow; r < boxRow + 3; r++){
                        for(let c = boxCol; c < boxCol + 3; c++){
                            if(board[r][c] === '.') continue;
                            if(boxSet.has(board[r][c])) return false;
                            boxSet.add(board[r][c])
                        }
                    }

                }
            }

            return true
    }
}
