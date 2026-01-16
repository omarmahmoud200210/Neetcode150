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
function threeSum2(nums) {
    let left = 0, right = 0;
    let grouped = [];
    let seen = new Set();
    nums.sort((a, b) => a - b);
    for (let i = 0; i < nums.length - 2; i++) {
        if (!seen.has(nums[i]))
            seen.add(nums[i]);
        else
            continue;
        left = i + 1;
        right = nums.length - 1;
        while (left < right) {
            let sum = nums[i] + nums[left] + nums[right];
            if (sum === 0) {
                let triplet = [nums[i], nums[left], nums[right]];
                grouped.push(triplet);
                left++;
                right--;
                while (left < right && nums[left] === nums[left - 1])
                    left++;
                while (left < right && nums[right] === nums[right + 1])
                    right--;
            }
            else if (sum < 0)
                left++;
            else
                right--;
        }
    }
    return grouped;
}
console.log(threeSum2([-1, 0, 1, 2, -1, -4]));
