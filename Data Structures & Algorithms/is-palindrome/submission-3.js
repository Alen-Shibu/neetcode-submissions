class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isAlphanumeric(ch){
        return /^[a-z0-9]$/i.test(ch)
    }
    isPalindrome(s) {
        let l = 0;
        let r = s.length-1;


        while(l<r){

            while(l<r && !this.isAlphanumeric(s[l])){
                l++
            }
            while(l<r && !this.isAlphanumeric(s[r])){
                r--
            }

            if(s[l].toLowerCase() !== s[r].toLowerCase() ) return false;

            l++;
            r--
            }
            return true;
    }
}
