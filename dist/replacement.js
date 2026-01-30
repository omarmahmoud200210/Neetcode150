"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function characterReplacement(s, k) {
    let left = 0, right = 0, windowLength = 0, longest = 0;
    let frequency = {};
    while (right < s.length) {
        frequency[s[right]] = (frequency[s[right]] || 0) + 1;
        windowLength = right - left + 1;
        let mostFrequency = 0;
        for (let count of Object.values(frequency)) {
            mostFrequency = Math.max(mostFrequency, count);
        }
        if (windowLength - mostFrequency > k) {
            frequency[s[left]]--;
            left++;
        }
        else {
            longest = Math.max(longest, windowLength);
        }
        right++;
    }
    return longest;
}
console.log(characterReplacement("AABABBA", 1));
