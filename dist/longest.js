"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function longestConsecutive(nums) {
    if (nums.length === 0)
        return 0;
    let longest = 1, current = 1;
    const sortedNums = [...new Set([...nums])].sort((a, b) => a - b);
    for (let i = 0; i < sortedNums.length - 1; i++) {
        if (sortedNums[i] + 1 === sortedNums[i + 1]) {
            current++;
            longest = Math.max(longest, current);
        }
        else {
            current = 1;
        }
    }
    return longest;
}
;
console.log(longestConsecutive([2, 20, 4, 10, 3, 4, 5]));
