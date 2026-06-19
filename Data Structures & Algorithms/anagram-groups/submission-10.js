class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = new Map();
        for(let str of strs){
            const arr = new Array(26).fill(0)
            for(let ch in str){
                arr[str.charCodeAt(ch) - 'a'.charCodeAt(0)] ++
            }
            const key = arr.join('#')
            if(!map.has(key)) map.set(key,[])
            map.get(key).push(str)
        }

        return [...map.values()]
    }
}
