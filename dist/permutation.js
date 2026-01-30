"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function checkInclusion(target, string) {
    let left = 0, right = target.length - 1;
    let frequencyTarget = {};
    for (let i = 0; i < target.length; i++)
        frequencyTarget[target[i]] = (frequencyTarget[target[i]] || 0) + 1;
    let isMatch = true;
    while (right < string.length) {
        let frequencySubstring = {};
        isMatch = true;
        for (let i = left; i <= right; i++)
            frequencySubstring[string[i]] =
                (frequencySubstring[string[i]] || 0) + 1;
        for (let key in frequencyTarget) {
            if (frequencySubstring[key] !== frequencyTarget[key]) {
                isMatch = false;
                break;
            }
        }
        left++;
        right++;
        if (isMatch)
            return true;
    }
    return false;
}
console.log(checkInclusion("abc", "lecabee"));
console.log(checkInclusion("abc", "lecaabee"));
