class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        let res = []
        for(let i=0;i<nums.length;i++){
            for(let j=i+1;j<nums.length;j++){
                for(let k=j+1;k<nums.length;k++){
                    if(nums[i] + nums[j] + nums[k] === 0){
                        res.push([nums[i],nums[j],nums[k]])
                    }
                }
            }
        }

        for(let arr of res){
            arr.sort((a,b) => a-b)
        }

        const set = new Set()
        for(let arr of res){
            set.add(arr.join(','))
        }

        return [...set].map(str => str.split(',').map(num => Number(num)))
    }
}
