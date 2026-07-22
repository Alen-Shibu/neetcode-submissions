class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
 if(!s || !t || s.length<t.length) return ""
    let ans = ''
    let minLen = Infinity

    let tCount = {}
    for(let char of t){
        tCount[char] = (tCount[char] || 0) + 1
    }

    for(let i=0;i<s.length;i++){
        let subCount = {}
        for(let j=i;j<s.length;j++){
            subCount[s[j]] = (subCount[s[j]] || 0) + 1

            let isValid = true;
            for(let char in tCount){
                if((subCount[char] || 0)<tCount[char]){
                    isValid = false;
                    break;
                }
            }

            if(isValid){
                const currentLength = j-i+1
                if(currentLength<minLen){
                    minLen = currentLength
                    ans = s.slice(i,j+1)
                }
                break;
            }
        }
    }

    return ans    }
}
