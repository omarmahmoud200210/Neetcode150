"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isPalindrome(str) {
    if (str === "")
        return true;
    const cleaned = str.replace(/[^a-z0-9]/gi, "").toLowerCase();
    let left = 0, right = cleaned.length - 1;
    while (left < right) {
        if (cleaned[left] !== cleaned[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}
console.log(isPalindrome("Was it a car or a cat I saw?"));
