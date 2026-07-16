class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let pref = 1;
        let suff = 1;
        let output = []
        for(let i=0;i<nums.length;i++){
            output[i] = pref;
            pref *= nums[i]
        }
        for(let i=nums.length-1;i>=0;i--){
            output[i] *= suff;
            suff *= nums[i]
        }
        return output;
    }
}
