class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isAlphaNumeric(ch){
        return (
            ch >= 'a' && ch <= 'z'
            || ch >= 'A' && ch <= 'Z'
            || ch >= '0' && ch <= '9'
        )
    }
    isPalindrome(s) {
        let l = 0;
        let r = s.length - 1;

        while(l<r){
            while(l<r && !this.isAlphaNumeric(s[l])) l++
            while(l<r && !this.isAlphaNumeric(s[r])) r--

            if(s[l].toLowerCase() !== s[r].toLowerCase()) return false;
            l++;
            r--;
        }

        return true;
    }
}
