function maxProfit(prices: number[]): number {
    let left = 0, right = 0;
    let profit = 0, maxProfit = 0;
    
    while (right < prices.length) {
        if (prices[right]! < prices[left]!) {
            left = right;
        }
        else {
            profit = prices[right]! - prices[left]!;
            maxProfit = Math.max(maxProfit, profit);
        }
        right++;
    }

    return maxProfit;
}

console.log(maxProfit([7,1,5,3,6,4]));