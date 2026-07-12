class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const map = new Map();
        for(let num of nums){
            if(!map.has(num)){
                map.set(num,0)
            }
            map.set(num,map.get(num)+1)
        }

        const arr = [...map.entries()].sort((a,b)=> b[1] - a[1] )

        let res = []

        for(let num of arr.values()){
            if(res.length===k) return res;
            res.push(num[0])
        }

        return res;
    }
}
