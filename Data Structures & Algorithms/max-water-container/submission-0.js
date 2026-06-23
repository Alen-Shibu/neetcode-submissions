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
            const min = Math.min(heights[l],heights[r]);
            const idx = r - l
            const area = min * idx;
            max_area = Math.max(max_area,area);

            if(heights[l] < heights[r]){
                l++;
            }else if(heights[r] < heights[l]){
                r--;
            }else{
                l++;
                r--;
            }
        }

        return max_area;
    }
}
