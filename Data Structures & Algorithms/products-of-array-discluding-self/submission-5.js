class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let suff = 1;
        let pref = 1;
        let res = [];

        for(let num of nums){
            res.push(pref);
            pref *= num;
        }

        for(let i=nums.length-1;i>=0;i--){
            res[i] *= suff;
            suff *= nums[i]
        }

        return res;
    }
}
