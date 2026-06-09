class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = new Map();
        for(let s of strs){
            const arr = new Array(26).fill(0);
            for(let i=0;i<s.length;i++){
                arr[s.charCodeAt(i) - 'a'.charCodeAt(0)] += 1;
            }
            const key = arr.join('#')
            if(!map.has(key)) map.set(key,[])
            map.get(key).push(s)
        }
        return [...map.values()]
    }
}
