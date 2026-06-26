class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let max_area = 0;
        let l=0;
        let r=heights.length-1;

        while(l<r){
            const left = heights[l]
            const right = heights[r]
            const area = Math.min(left,right) * (r-l);
            max_area = Math.max(max_area,area);

            if(left<right){
                l++;
            }else if(right<left){
                r--;
            }else{
                l++;
                r--;
            }
        }

        return max_area;
    }
}
