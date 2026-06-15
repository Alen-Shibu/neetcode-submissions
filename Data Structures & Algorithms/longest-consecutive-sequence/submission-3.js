class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const set = [...new Set(nums)]
        let longestSeq = 0

        for(let i=0;i<nums.length;i++){
            if(set.includes(nums[i])){
                let seqLength = 0;
                while(set.includes(nums[i]+seqLength)){
                    seqLength ++
                }
                longestSeq = Math.max(longestSeq,seqLength)
            }
        }
        return longestSeq
    }
}
