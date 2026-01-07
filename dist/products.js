"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function productExceptSelf(nums) {
    let output = [];
    for (let i = 0; i < nums.length; i++) {
        let itemIndex = i;
        let multiply = 1;
        for (let j = 0; j < nums.length; j++) {
            if (itemIndex !== j)
                multiply *= nums[j];
        }
        output.push(multiply);
    }
    return output;
}
console.log(productExceptSelf([1, 2, 4, 6]));
function productExceptSelfOptimized(nums) {
    const output = new Array(nums.length).fill(1);
    let prefix = 1;
    for (let i = 0; i < nums.length; i++) {
        output[i] = prefix;
        prefix *= nums[i];
    }
    let postfix = 1;
    for (let i = nums.length - 1; i >= 0; i--) {
        output[i] *= postfix;
        postfix *= nums[i];
    }
    return output;
}
console.log(productExceptSelfOptimized([1, 2, 4, 6]));
