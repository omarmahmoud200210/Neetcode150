// Solve it with sorting
const isAnagram = (s, t) => { 
    let str = s.split('').sort().join('');
    let str1 = t.split('').sort().join('');

    return str === str1;
};

// console.log(isAnagram("racecar", "carrace"));
// console.log(isAnagram("jar", "jam"));
// console.log(isAnagram("a", "ab"));
// console.log(isAnagram("bccc", "ccbc"));

//solve it with frequency pattern
const anagramFreq = (s, t) => {
    if (s.length < t.length || t.length < s.length) return false;

    let frequencyCounter1 = {};
    let frequencyCounter2 = {};

    for (let val of s) {
        frequencyCounter1[val] = (frequencyCounter1[val] | 0) + 1;
    }

    
    for (let val of t) {
      frequencyCounter2[val] = (frequencyCounter2[val] | 0) + 1;
    }

    for (let key in frequencyCounter1) {
        if (frequencyCounter1[key] !== frequencyCounter2[key]) {
          return false;
        }
    }

    return true;
};

//anagramFreq("racecar", "carrace");
console.log(anagramFreq("bcbc", "ccbc"))
//anagramFreq("racecar", "carrace");