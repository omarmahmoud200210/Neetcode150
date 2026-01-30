function characterReplacement(s: string, k: number): number {
  let left = 0,
    right = 0,
    windowLength = 0,
    longest = 0;
  let frequency: { [key: string]: number } = {};

  while (right < s.length) {
    frequency[s[right]!]! = (frequency[s[right]!]! || 0) + 1;
    windowLength = right - left + 1;

    let mostFrequency = 0;
    for (let count of Object.values(frequency)) {
      mostFrequency = Math.max(mostFrequency, count);
    }

    if (windowLength - mostFrequency > k) {
      frequency[s[left]!]!--;
      left++;
    } else {
      longest = Math.max(longest, windowLength);
    }
    right++;
  }
  return longest;
}

console.log(characterReplacement("AABABBA", 1));