class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const repeat = new Set ();
        for(let i=0;i<nums.length;i++){
            if(repeat.has(nums[i])){
                return true
            }else{
                repeat.add(nums[i]);
            }
        }
        return false;
    }
}
