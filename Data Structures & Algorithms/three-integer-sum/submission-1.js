class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        let res = []
        for(let i=0;i<nums.length;i++){
            for(let j=i+1;j<nums.length;j++){
                for(let k=j+1;k<nums.length;k++){
                    if(nums[i] + nums[j] + nums[k] === 0){
                        res.push([nums[i],nums[j],nums[k]])
                    }
                }
            }
        }

        for(let arr of res){
            arr.sort((a,b) => a-b)
        }

        for(let arrIdx=0;arrIdx<res.length;arrIdx++){
            const [i,j,k] = res[arrIdx];
            for(let idx=arrIdx+1;idx<res.length;idx++){
                const [a,b,c] = res[idx]
                if(i===a && j===b && k===c){
                    res.splice(idx,1)
                    idx--
                }
            }
        }

        return res
    }
}
