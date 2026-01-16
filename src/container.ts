function maxArea(heights: number[]): number {
    let left:number = 0, right:number = heights.length - 1;
    let width: number = 0, height: number = 0, area: number = 0;
    let maxArea: number = 0;


    while (left < right) {
        width = right - left;
        height = Math.min(heights[left]!, heights[right]!);
        area = width * height;

        if (area > maxArea) maxArea = area;

        if (heights[left]! <= heights[right]!) left++;
        else right--;
    }

    return maxArea;
}

console.log(maxArea([1, 7, 2, 5, 4, 7, 3, 6]));