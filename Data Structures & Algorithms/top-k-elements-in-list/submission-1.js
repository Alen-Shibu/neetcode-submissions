class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const map = new Map();
        const count = 0;

        for(let i=0;i<nums.length;i++){
            if(!map.has(nums[i])) map.set(nums[i],count)
            map.set(nums[i],map.get(nums[i])+1)
        }

        const sorted = [...map.entries()].sort((a,b) => b[1]-a[1])

        return sorted.slice(0,k).map((entry) => entry[0])
    }
}
