"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function trap(height) {
    let maxLeft = 0, maxRight = 0;
    let right = height.length - 1, left = 0;
    let waterTrapped = 0, maxTrap = 0;
    while (left < right) {
        if (height[left] < height[right]) {
            maxLeft = Math.max(maxLeft, height[left]);
            waterTrapped = maxLeft - height[left];
            left++;
        }
        else {
            maxRight = Math.max(maxRight, height[right]);
            waterTrapped = maxRight - height[right];
            right--;
        }
        maxTrap += waterTrapped;
    }
    return maxTrap;
}
console.log(trap([0, 2, 0, 3, 1, 0, 1, 3, 2, 1]));
