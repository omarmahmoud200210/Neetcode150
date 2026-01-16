"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function threeSum(nums) {
    let i = 0;
    let j = 1;
    let y = 2;
    let grouped = [];
    let seen = new Set();
    nums.sort((a, b) => a - b);
    while (i < nums.length - 2) {
        j = i + 1;
        while (j < nums.length - 1) {
            y = j + 1;
            while (y < nums.length) {
                if (nums[i] + nums[j] + nums[y] === 0) {
                    let triplet = [nums[i], nums[j], nums[y]];
                    let key = triplet.join(",");
                    if (!seen.has(key)) {
                        seen.add(key);
                        grouped.push(triplet);
                    }
                }
                y++;
            }
            j++;
        }
        i++;
    }
    return grouped;
}
console.log(threeSum([-1, 0, 1, 2, -1, -4]));
