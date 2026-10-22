class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let minValue = prices[0];
        let maxProfit = 0;
        for (const n of prices) {
            if (n < minValue) minValue = n;
            if (maxProfit < n - minValue) maxProfit = n - minValue;
        }
        return maxProfit;
    }
}
