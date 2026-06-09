class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const sorted = new Map();
        for(let i=0;i<strs.length;i++){
            const key = strs[i].split('').sort().join('')
            if(!sorted.has(key)){
                sorted.set(key,[])
            }
            sorted.get(key).push(strs[i])
        }
    return [...sorted.values()];
    }
}
