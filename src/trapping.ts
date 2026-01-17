function trap(height: number[]): number {
    let maxLeft: number = 0,
      maxRight: number = 0;
    let right: number = height.length - 1,
      left: number = 0;
    let waterTrapped: number = 0,
      maxTrap: number = 0;

    while (left < right) {
      if (height[left]! < height[right]!) {
        maxLeft = Math.max(maxLeft, height[left]!);
        waterTrapped = maxLeft - height[left]!;
        left++;
      } else {
        maxRight = Math.max(maxRight, height[right]!);
        waterTrapped = maxRight - height[right]!;
        right--;
      }

      maxTrap += waterTrapped;
    }

    return maxTrap;
}

console.log(trap([0, 2, 0, 3, 1, 0, 1, 3, 2, 1]));