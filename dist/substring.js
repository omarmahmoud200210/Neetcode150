"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function lengthOflongestSubstring(string) {
    let left = 0;
    let right = 0;
    let longest = 0;
    let current = 0;
    const charSet = new Set();
    while (right < string.length) {
        if (!charSet.has(string[right])) {
            charSet.add(string[right]);
        }
        else {
            while (charSet.has(string[right])) {
                charSet.delete(string[left]);
                left++;
            }
            charSet.add(string[right]);
        }
        right++;
        current = right - left;
        longest = Math.max(longest, current);
    }
    return longest;
}
console.log(lengthOflongestSubstring("abcabcbb"));
