class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let ip = ''
        for(let i=0;i<strs.length;i++){
            ip += strs[i].length + '#' + strs[i]
        }
        return ip;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const res = [];
        let l=0;
        while(l < str.length){
            let r=l;
            while(str[r] !== '#') r++;
            const length = Number(str.slice(l,r))
            const word = str.slice(r+1,r+1+length)
            res.push(word)
            l = length+r+1
        }
        return res
    }
}
