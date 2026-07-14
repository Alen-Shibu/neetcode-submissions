class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let l = 0;
        let r = l+1;
        let max_profit = 0;
        while(r<prices.length){
            if(prices[r] < prices[l]){
                l=r;
            }
            max_profit = Math.max(max_profit,prices[r] - prices[l])
            r++;
        }

        return max_profit
    }
}
