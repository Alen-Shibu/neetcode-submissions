class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        if(s.length===0) return 0;
        const set = new Set();
        let l = 0;
        let r = 0;
        let max_len = 1;

        while(r<s.length){
            if(!set.has(s[r])){
                set.add(s[r]);
                max_len = Math.max(max_len,r-l+1)
                r++;
            }else{
                set.delete(s[l])
                l++;
            }
        }

        return max_len;

    }
}
