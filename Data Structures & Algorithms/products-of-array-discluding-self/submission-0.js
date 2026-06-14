class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let l = 0;
        let point=0;
        let op = []
        while(point<nums.length){
        let mul = 1;
            for(let i=0;i<nums.length;i++){
                if(i !== point){
                    mul *= nums[i]
                }
            }
            op.push(mul)
            point++
        }
        return op;
    }
}
