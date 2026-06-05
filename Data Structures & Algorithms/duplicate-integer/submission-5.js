class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const repeat = [];
        for(let i=0;i<nums.length;i++){
            if(repeat.includes(nums[i])){
                return true
            }else{
                repeat.push(nums[i]);
            }
        }
        return false;
    }
}
