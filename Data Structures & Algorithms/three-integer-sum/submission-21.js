class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums.sort((a,b)=> a-b);
        let result = [];
        for(let i=0;i<nums.length-2;i++){
            if(i>0 && nums[i]===nums[i-1]) continue;
            if(nums[i]>0) break;
            let j = i+1;
            let k = nums.length-1;

            while(j<k){
                const target = -nums[i];
                const sum = nums[j] + nums[k]
                if(sum>target) k--;
                else if(sum<target) j++;
                else{
                    result.push([nums[i],nums[j],nums[k]])
                    j++;
                    k--;
                    while(j<k && nums[j]===nums[j-1]) j++;
                    while(j<k && nums[k]===nums[k+1]) k--;
                }
            }
        }

        return result;
    }
}
