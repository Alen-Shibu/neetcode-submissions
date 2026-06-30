class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let max_area = 0;
        let l = 0;
        let r = heights.length - 1;

        while(l<r){
            const length = Math.min(heights[l],heights[r]);
            const width = r - l;
            const area = length * width;
            max_area = Math.max(area,max_area)

            if(heights[l]<heights[r]){
                l++;
            }else if(heights[l]>heights[r]){
                r--;
            }else{
                l++;
                r--;
            }
        }

        return max_area;
    }
}
