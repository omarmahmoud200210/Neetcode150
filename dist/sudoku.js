"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isValidSudoku(board) {
    var _a, _b, _c, _d, _e, _f;
    const status = Array.from({ length: 3 }, () => true);
    const rowSets = Array.from({ length: 9 }, () => new Set());
    const columnSets = Array.from({ length: 9 }, () => new Set());
    const boxSets = Array.from({ length: 9 }, () => new Set());
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (board[i][j] !== ".") {
                let num = board[i][j];
                if (!((_a = rowSets[i]) === null || _a === void 0 ? void 0 : _a.has(num))) {
                    (_b = rowSets[i]) === null || _b === void 0 ? void 0 : _b.add(num);
                }
                else {
                    status[0] = false;
                }
                if (!((_c = columnSets[j]) === null || _c === void 0 ? void 0 : _c.has(num))) {
                    (_d = columnSets[j]) === null || _d === void 0 ? void 0 : _d.add(num);
                }
                else {
                    status[1] = false;
                }
                const box_row = Math.floor(i / 3);
                const box_column = Math.floor(j / 3);
                const box_index = box_row * 3 + box_column;
                if (!((_e = boxSets[box_index]) === null || _e === void 0 ? void 0 : _e.has(num))) {
                    (_f = boxSets[box_index]) === null || _f === void 0 ? void 0 : _f.add(num);
                }
                else {
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
