class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = new Map();

        for(const word of strs){
            let arr = Array.from({length:26},()=> 0)
            for(let ch in word){
                arr[word.charCodeAt(ch) - 'a'.charCodeAt(0)]++
            }
            const key = arr.join('#');
            if(!map.get(key)) map.set(key,[])
            map.get(key).push(word)
        }

        return [...map.values()]
    }
}
