"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MinStack {
    constructor() {
        this.arr = [];
        this.minimum = [];
        this.arr = [];
        this.minimum = [];
    }
    push(val) {
        this.arr.push(val);
        if (this.minimum.length === 0) {
            this.minimum.push(val);
        }
        else {
            let current = this.minimum[this.minimum.length - 1];
            if (val < current) {
                this.minimum.push(val);
            }
            else {
                this.minimum.push(current);
            }
        }
    }
    pop() {
        this.arr.pop();
        this.minimum.pop();
    }
    top() {
        return this.arr[this.arr.length - 1];
    }
    getMin() {
        return this.minimum[this.minimum.length - 1];
    }
}
const minStack = new MinStack();
minStack.push(1);
minStack.push(2);
minStack.push(0);
console.log(minStack.getMin());
minStack.pop();
console.log(minStack.top());
console.log(minStack.getMin());
