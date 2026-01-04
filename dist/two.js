// first way to solve this problem.
const twoSum = (numbers, target) => {
    let sumIndx = [];

    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            if (i !== j &&  numbers[i] + numbers[j] === target) {
                sumIndx.push(i, j)
            }
        }
    }

    return sumIndx;
}

//console.log(twoSum([2, 7, 11, 15], 9));
//console.log(twoSum([4, 5, 6], 10));
//console.log(twoSum([5, 5], 10));

// more optimize way to the above problem.
const twoSumOptimization = (numbers, target) => { 
    const numsObj = {};
    let arr = [];

    for (let i = 0; i < numbers.length; i++) {
        numsObj[numbers[i]] = i;
    }

    for (let i = 0; i < numbers.length; i++) {
        let sum = target - numbers[i];

        if (numsObj[sum] !== undefined && numsObj[sum] !== i) {
            arr.push(i, numsObj[sum]);
        }

        if (arr.length === 2) return arr;
    }
};

console.log(twoSumOptimization([4, 5, 6], 10));