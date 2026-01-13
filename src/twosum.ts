function twoSum(numbers: number[], target: number) {
    let i: number = 0;
    let j: number = 1;

    while (i < j) {
        if (numbers[i]! + numbers[j]! === target) {
            return [i + 1, j + 1];
        }

        if (j < numbers.length - 1) {
            j++;
        }
        else {
            i++;
            j = i + 1;
        }
    }
    return [];
}

console.log(twoSum([2,7,11,15], 9));