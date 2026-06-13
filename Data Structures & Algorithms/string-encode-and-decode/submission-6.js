class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encoded = strs.join('#123') 
        if(strs.length===0) encoded='empty'
        return encoded
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let decoded = str.split('#123') 
        if(str === 'empty') return []
        return decoded
    }
}
