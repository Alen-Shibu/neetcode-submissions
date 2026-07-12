class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = new Map();

        for(let word of strs){
            const count = new Array(26).fill(0)
            for(let i=0;i<word.length;i++){
                count[word.charCodeAt(i) - 97]++
            }
            const hash = count.join('#')
            if(!map.has(hash)){
                map.set(hash,[])
            }

            map.get(hash).push(word)
        }

        return [...map.values()]
    }
}
