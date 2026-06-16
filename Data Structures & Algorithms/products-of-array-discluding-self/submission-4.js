class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let pref = 1
        let suff = 1
        let prefArr = []
        let suffArr = []

        for(let i=0;i<nums.length;i++){
            prefArr.push(pref)
            pref *= nums[i]
        }

        for(let i=nums.length-1;i>=0;i--){
            suffArr[i] = suff
            suff *= nums[i]
        }

        let output = [];
        for(let i=0;i<nums.length;i++){
            output.push(prefArr[i] * suffArr[i])
        }

        return output;
    }
}
