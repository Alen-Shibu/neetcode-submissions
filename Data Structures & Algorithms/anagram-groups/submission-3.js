class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const sorted = new Map();
        for(let s of strs){
            const key = s.split('').sort().join('')
            if(!sorted.has(key)) sorted.set(key,[])
            sorted.get(key).push(s);
        }
        return [...sorted.values()]
    }
}
