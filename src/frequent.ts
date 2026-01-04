function topKFrequent(nums: number[], k: number): number[] {
  if (nums.length === 1) return nums;

  //let frequency: Record<number, number> = {};
  let frequency: { [key: number]: number } = {};
  let array: number[] = [];

  for (let item of nums) frequency[item] = (frequency[item] || 0) + 1;

  for (let val in frequency) array.push(Number(val));

  array.sort((a, b) => frequency[b]! - frequency[a]!);
  return array.slice(0, k);
}

console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2));
console.log(topKFrequent([1, 2, 1, 2, 1, 2, 3, 1, 3, 2], 2));
console.log(topKFrequent([1], 1));
console.log(topKFrequent([1, 2], 2));
console.log(topKFrequent([-1, -1], 1));
// [1,1,1,2,2,3], k = 2
// [1,2,1,2,1,2,3,1,3,2], k = 2
// [1], k = 1
