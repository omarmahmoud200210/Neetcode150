"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function twoSum(numbers, target) {
    let i = 0;
    let j = 1;
    while (i < j) {
        if (numbers[i] + numbers[j] === target) {
            return [i + 1, j + 1];
        }
        if (j < numbers.length - 1) {
            j++;
        }
        else {
            i++;
            j = i + 1;
        }
    }
    return [];
}
console.log(twoSum([2, 7, 11, 15], 9));
