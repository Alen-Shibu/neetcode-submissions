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

        const bucket = new Array(nums.length+1).fill(0).map(()=> []);

        for(let [key,value] of map.entries()){
            bucket[value].push(key)
        }

        let res = [];

        for(let i=bucket.length-1;i>=0;i--){
            for(let num of bucket[i]){
                res.push(num)
                if(res.length===k) return res;
            }
        }

        return res;

    }
}
