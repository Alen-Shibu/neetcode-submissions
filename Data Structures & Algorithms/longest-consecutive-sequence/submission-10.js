class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let longestFreq = 0;
        const set = new Set(nums)
        for(let num of set){
            if(!set.has(num-1)){
                let length = 0;
                while(set.has(num+length)) length++;
                longestFreq = Math.max(length,longestFreq)
            }
        }

        return longestFreq;
    }
}
