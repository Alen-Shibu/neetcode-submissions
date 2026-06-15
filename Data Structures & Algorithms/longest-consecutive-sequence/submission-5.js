class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const set = new Set(nums)
        let longestSeq = 0

        for(const num of set){
            if(!set.has(num-1)){
                let seqLength = 0;
                while(set.has(num+seqLength)){
                    seqLength ++
                }
                longestSeq = Math.max(longestSeq,seqLength)
            }
        }
        return longestSeq
    }
}
