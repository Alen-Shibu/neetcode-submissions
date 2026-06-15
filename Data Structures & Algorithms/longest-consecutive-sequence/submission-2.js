class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if(nums.length===0) return 0
        const sorted = nums.sort((a,b) => a-b)
        const set = [...new Set(sorted)]

        let count = 1;
        let maxStreak = 1

        for(let i=1;i<set.length;i++){
            if(set[i] - set[i-1] === 1){
                count ++
            } else{
                if(count>maxStreak) maxStreak=count
                count=1
            }
        }
        if(count>maxStreak) maxStreak=count

        return maxStreak;

    }
}
