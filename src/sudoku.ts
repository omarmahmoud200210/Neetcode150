function isValidSudoku(board: string[][]): boolean {
  const status: boolean[] = Array.from({ length: 3 }, () => true);
  const rowSets: Set<string>[] = Array.from({ length: 9 }, () => new Set());
  const columnSets: Set<string>[] = Array.from({ length: 9 }, () => new Set());
  const boxSets: Set<string>[] = Array.from({ length: 9 }, () => new Set());

  for (let i: number = 0; i < board.length; i++) {
    for (let j: number = 0; j < board[i]!.length; j++) {
      if (board[i]![j]! !== ".") {
        let num = board[i]![j]!;

        // Rows
        if (!rowSets[i]?.has(num)) {
          rowSets[i]?.add(num);
        } else {
          status[0] = false;
        }

        // Columns
        if (!columnSets[j]?.has(num)) {
          columnSets[j]?.add(num);
        } else {
          status[1] = false;
        }

        // Boxes
        const box_row = Math.floor(i / 3);
        const box_column = Math.floor(j / 3);
        const box_index = box_row * 3 + box_column;
        if (!boxSets[box_index]?.has(num)) {
          boxSets[box_index]?.add(num);
        } else {
          status[2] = false;
        }
        
      }
    }
  }
  return status.every(s => s);
}

const board1 = [
  ["1", "2", ".", ".", "3", ".", ".", ".", "."],
  ["4", ".", ".", "5", ".", ".", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", ".", "3"],
  ["5", ".", ".", ".", "6", ".", ".", ".", "4"],
  [".", ".", ".", "8", ".", "3", ".", ".", "5"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", ".", ".", ".", ".", ".", "2", ".", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "8"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];

const board2 = [
  ["1", "2", ".", ".", "3", ".", ".", ".", "."],
  ["4", ".", ".", "5", ".", ".", ".", ".", "."],
  [".", "9", "1", ".", ".", ".", ".", ".", "3"],
  ["5", ".", ".", ".", "6", ".", ".", ".", "4"],
  [".", ".", ".", "8", ".", "3", ".", ".", "5"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", ".", ".", ".", ".", ".", "2", ".", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "8"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];

console.log(isValidSudoku(board1));
console.log(isValidSudoku(board2));

//1. Create a status array with length 3 and fill it with true.
//2. Create three arrays (rowSets, ColSets, boxSets)

//3. Create a Parent Loop with (Board.length)
//4. Create a Nested Loop with (Board[i].length)

//5. Create a main condition (to skip ".")

//6. inside the main condition check: (First Condition)
        // if num not in the Set add it (rowSets[i])
        // if the num is already in the Set
        // status[0] = false

//7.(Second Condition)
    // if num not in the Set add it (colSets[j])
    // if the num is already in the Set
        // status[1] = false

//8. (Third Condition)
    // Do the Calculations -> (Box_row & Box_Col & Box_index)
    // if num not is the Set add it (BoxSets[boxIndex])
    // if the num is already in the Set
        // status[2] = false