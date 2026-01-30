/* 
Example 1:
    s1 = "abc" Target 
    s2 = "lecabee" String to be searched 
    We look at s1. The ingredients are: 1 'a', 1 'b', 1 'c'.
    We scan through s2 looking at chunks of 3 letters (since s1 has length 3):

    "lec" → Does not match.
    "eca" → Does not match.
    "cab" -> Matches! It contains one 'c', one 'a', and one 'b'.

    Even though "cab" is spelled differently than "abc", it is a permutation. Therefore, the answer is true.
*/

function checkInclusion(target: string, string: string): boolean {
  let left = 0,
    right = target.length - 1;
  let frequencyTarget: { [key: string]: number } = {};

  for (let i = 0; i < target.length; i++)
    frequencyTarget[target[i]!]! = (frequencyTarget[target[i]!]! || 0) + 1;

  let isMatch = true;

  while (right < string.length) {
    let frequencySubstring: { [key: string]: number } = {};
    isMatch = true;

    for (let i = left; i <= right; i++)
      frequencySubstring[string[i]!]! =
        (frequencySubstring[string[i]!]! || 0) + 1;

    for (let key in frequencyTarget) {
      if (frequencySubstring[key] !== frequencyTarget[key]) {
        isMatch = false;
        break;
      }
    }

    left++;
    right++;

    if (isMatch) return true;
  }

  return false;
}

console.log(checkInclusion("abc", "lecabee"));
console.log(checkInclusion("abc", "lecaabee"));
