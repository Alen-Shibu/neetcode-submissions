class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums.sort((a,b) => a-b)
        let res = []

        for(let i=0;i<nums.length-2;i++){
            if(nums[i]>0) break;
            if(i>0 && nums[i] === nums[i-1]) continue;

            let l = i + 1;
            let r = nums.length - 1;

            const target = Math.abs(nums[i])

            while(l<r){

                if(nums[l] + nums[r] < target){
                    l++
                }else if(nums[l] + nums[r] > target){
                    r--;
                }
                else{
                    res.push([nums[i],nums[l],nums[r]])
                    l++;
                    r--;

                    while(l<r && nums[l] === nums[l-1]) l++;
                    while(l<r && nums[r] === nums[r+1]) r--;

                }
            }
        }

        return res;
    }
}
