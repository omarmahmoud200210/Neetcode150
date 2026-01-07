// Naive Solution - O(N^2)
function productExceptSelf(nums: number[]): number[] {
  let output: number[] = [];

  for (let i: number = 0; i < nums.length; i++) {
    let itemIndex = i;
    let multiply = 1;

    for (let j = 0; j < nums.length; j++) {
      if (itemIndex !== j) multiply *= nums[j]!;
    }

    output.push(multiply);
  }

  return output;
}

console.log(productExceptSelf([1, 2, 4, 6]));

// The Optimized Solution O(N) - Prefix and Postfix (Suffix)
function productExceptSelfOptimized(nums: number[]): number[] {
  const output: number[] = new Array(nums.length).fill(1);

  let prefix = 1;
  for (let i: number = 0; i < nums.length; i++) {
    output[i] = prefix;
    prefix *= nums[i]!;
  }

  let postfix = 1;
  for (let i: number = nums.length - 1; i >= 0; i--) {
    output[i]! *= postfix;
    postfix *= nums[i]!;
  }

  return output;
}

console.log(productExceptSelfOptimized([1, 2, 4, 6]));
