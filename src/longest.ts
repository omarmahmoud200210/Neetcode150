function longestConsecutive(nums: number[]): number {
    if (nums.length === 0) return 0;

    let longest = 1, current = 1;

    const sortedNums = [...new Set([...nums])].sort((a, b) => a - b);

    for (let i = 0; i < sortedNums.length - 1; i++) {
        if (sortedNums[i]! + 1 === sortedNums[i + 1]!) {
          current++;
          longest = Math.max(longest, current);
        } else {
          current = 1;
        }
    }

    return longest;
};

console.log(longestConsecutive([2, 20, 4, 10, 3, 4, 5]));

// Optimized Solution 
function longestConsecutive2(nums: number[]): number {
  if (nums.length === 0) return 0;

  const numSet = new Set(nums);
  let longest = 0;

  for (const num of numSet) {
    // Only start counting if this is the beginning of a sequence
    if (!numSet.has(num - 1)) {
      let current = 1;
      let currentNum = num;

      // Count consecutive numbers
      while (numSet.has(currentNum + 1)) {
        current++;
        currentNum++;
      }

      longest = Math.max(longest, current);
    }
  }

  return longest;
}


console.log(longestConsecutive2([2, 20, 4, 10, 3, 4, 5]));