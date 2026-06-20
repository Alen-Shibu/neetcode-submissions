class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const rowMap = new Map()
        const colMap = new Map()
        const gridMap = new Map()

        for(let row in board){
            for(let col in board[row]){
                const val = board[row][col];
                if(val ==='.') continue;

                if(!rowMap.has(row)) rowMap.set(row,new Set())
                if(!colMap.has(col)) colMap.set(col,new Set())
                const grid = `${Math.floor(row/3)} - ${Math.floor(col/3)}`;
                if(!gridMap.has(grid)) gridMap.set(grid,new Set())

                if(rowMap.get(row).has(val)
                || colMap.get(col).has(val)
                || gridMap.get(grid).has(val)){
                    return false;
                }

                rowMap.get(row).add(val)
                colMap.get(col).add(val)
                gridMap.get(grid).add(val)
            }
        }
        return true;
    }
}
