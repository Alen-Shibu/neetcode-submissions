class Solution {
    twoSum(nums, target) {
        const op = [];
        for(let i=0; i<nums.length;i++){
            for(let j=1;j<nums.length;j++){
                if(nums[i] + nums[j] === target && i!= j){
                    op.push(i)
                    op.push(j)
                    break;
                }
            }
            if(op.length==2) break;
        }
        return op;
    }
}