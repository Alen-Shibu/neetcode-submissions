class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isAlphanumeric(ch){
        return /[a-z0-9]/i.test(ch)
    }


    isPalindrome(s) {
        let newStr = ''
        for(let i=0;i<s.length;i++){
            if(this.isAlphanumeric(s[i])) newStr+=s[i].toLowerCase()
        }
        return newStr === newStr.split('').reverse().join('')
    }
}
