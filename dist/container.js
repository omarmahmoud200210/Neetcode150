"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function maxArea(heights) {
    let left = 0, right = heights.length - 1;
    let width = 0, height = 0, area = 0;
    let maxArea = 0;
    while (left < right) {
        width = right - left;
        height = Math.min(heights[left], heights[right]);
        area = width * height;
        if (area > maxArea)
            maxArea = area;
        if (heights[left] <= heights[right])
            left++;
        else
            right--;
    }
    return maxArea;
}
console.log(maxArea([1, 7, 2, 5, 4, 7, 3, 6]));
