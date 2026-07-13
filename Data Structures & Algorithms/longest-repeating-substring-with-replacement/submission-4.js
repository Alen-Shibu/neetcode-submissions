class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let l=0;
        let max_freq = 0;
        let max_window = 0;
        const freq = new Map();

        for(let r=0;r<s.length;r++){

            if(!freq.has(s[r])) freq.set(s[r],0)

            freq.set(s[r],freq.get(s[r])+1)
            max_freq = Math.max(freq.get(s[r]),max_freq)

            if(r-l+1 - max_freq > k){
                freq.set(s[l],freq.get(s[l]) - 1);
                l ++;
            }

            const window_size = r-l+1;
            max_window = Math.max(window_size,max_window)
        }

        return max_window;
    }
}
