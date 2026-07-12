class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let res = '';
        for(let word of strs){
            res += word.length + '#' + word
        }
        return res;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let res = [];

        let l=0,r=l;
        while(r<str.length){
            while(str[r]!=='#'){
                r++;
            }
            const length = Number(str.slice(l,r))
            const word = str.slice(r+1,r+1+length)
            res.push(word)
            l = r+1+length
            r=l
        }

        return res;
    }
}
