class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let min = Infinity;
        for(let num of nums){
            if(num < min) min = num
        }

        return min;
    }
}
