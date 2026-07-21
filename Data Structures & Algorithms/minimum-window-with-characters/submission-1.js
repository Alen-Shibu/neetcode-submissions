class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        if(!s || !t || s.length<t.length) return "";

        let minLength = Infinity;
        let ans = "";

        let tCount = {};
        for(let i=0;i<t.length;i++){
            tCount[t[i]] = (tCount[t[i]] || 0) + 1;
        }

        for(let i=0;i<s.length;i++){
            let subCount = {};
            for(let j = i;j<s.length;j++){
                const currentChar = s[j]
                subCount[currentChar] = (subCount[currentChar] || 0) + 1;
                let isValid = true;
                for(let char in tCount){
                    if((subCount[char] || 0) < tCount[char]){
                        isValid = false;
                        break;
                    }
                }

                const currentLength = j-i+1;
                if(isValid && currentLength < minLength){
                    minLength = currentLength;
                    ans = s.substring(i,j+1);
                }
            }
        }

        return ans;
    }
}
