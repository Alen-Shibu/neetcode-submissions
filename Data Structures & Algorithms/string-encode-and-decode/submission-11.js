class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let res = '';
        for(let str of strs){
            res += str.length + '#' + str;
        }
        return res;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const res = [];
        let i=0;
        while(i<str.length){
            let j=i+1
            while(str[j]!=='#') j++
            const length = Number(str.slice(i,j));
            const start = j+1
            const word = str.slice(start,start + length)
            res.push(word);
            i = start+length
        }
        return res;
    }
}
