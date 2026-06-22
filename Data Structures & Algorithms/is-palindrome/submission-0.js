class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const cleaned = s.toLowerCase().replace(/[^a-z0-9]/g, '');
        let l=0;
        let r= cleaned.length-1;
        while(r>l){
            if(cleaned[l] !== cleaned[r]) return false;
            l++;
            r--;
        }
        return true;
    }
}
