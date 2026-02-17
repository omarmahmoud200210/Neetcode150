class MinStack {
  arr: number[] = [];
  minimum: number[] = [];

  constructor() {
    this.arr = [];
    this.minimum = [];
  }

  push(val: number): void {
    this.arr.push(val);

    if (this.minimum.length === 0) {
      this.minimum.push(val);
    } else {
      let current = this.minimum[this.minimum.length - 1]!;
      if (val < current) {
        this.minimum.push(val);
      } else {
        this.minimum.push(current);
      }
    }
  }

  pop(): void {
    this.arr.pop();
    this.minimum.pop();
  }

  top(): number {
    return this.arr[this.arr.length - 1] as number;
  }

  getMin(): number {
    return this.minimum[this.minimum.length - 1] as number;
  }
}

const minStack = new MinStack();

minStack.push(1);
minStack.push(2);
minStack.push(0);
console.log(minStack.getMin()); // return 0
minStack.pop();
console.log(minStack.top()); // return 2
console.log(minStack.getMin()); // return 1
