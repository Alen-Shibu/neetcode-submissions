class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let maxProfit = 0;
        for(let i=0;i<prices.length;i++){
            let profit = 0;
            for(let j=i+1;j<prices.length;j++){
                profit = Math.max(profit,prices[j] - prices[i])
            }
            maxProfit = Math.max(profit,maxProfit)
        }

        if(maxProfit>0) return maxProfit
        else return 0
    }
}
