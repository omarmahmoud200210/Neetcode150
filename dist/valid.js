"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Solution {
    isValid(brackets) {
        let stack = [];
        let opens = {
            ")": "(",
            "}": "{",
            "]": "[",
        };
        for (let i = 0; i < brackets.length; i++) {
            let currentBracket = brackets[i];
            if (currentBracket === "(" ||
                currentBracket === "[" ||
                currentBracket === "{") {
                stack.push(brackets[i]);
            }
            else {
                if (stack.length === 0)
                    return false;
                if (opens[currentBracket] === stack[stack.length - 1]) {
                    stack.pop();
                }
                else
                    return false;
            }
        }
        return stack.length === 0 ? true : false;
    }
}
